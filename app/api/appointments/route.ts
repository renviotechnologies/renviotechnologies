import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Appointment from '@/model/Appointment';

// MongoDB connection function
async function connectToDatabase() {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined in environment variables');
    }
    
    await mongoose.connect(MONGODB_URI);
}

// POST - Create new appointment
export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const body = await request.json();
        const { name, email, phone, datetime, message } = body;
        
        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: 'Name, email, and phone are required fields' },
                { status: 400 }
            );
        }
        
        // Connect to MongoDB
        await connectToDatabase();
        
        // Create new appointment document using the model
        const appointment = new Appointment({
            name,
            email,
            phone,
            datetime: datetime || null,
            message: message || null,
            status: 'pending'
        });
        
        // Save to database
        await appointment.save();
        
        return NextResponse.json(
            { 
                success: true, 
                message: 'Appointment booked successfully',
                data: {
                    id: appointment._id,
                    name: appointment.name,
                    email: appointment.email,
                    phone: appointment.phone,
                    datetime: appointment.datetime,
                    status: appointment.status,
                    createdAt: appointment.createdAt
                }
            },
            { status: 201 }
        );
        
    } catch (error: any) {
        console.error('Error saving appointment:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err: any) => err.message);
            return NextResponse.json(
                { success: false, message: 'Validation failed', errors: validationErrors },
                { status: 400 }
            );
        }
        
        // Handle duplicate key errors
        if (error.code === 11000) {
            return NextResponse.json(
                { success: false, message: 'Duplicate entry detected' },
                { status: 409 }
            );
        }
        
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}

// GET - Fetch appointments (with optional filters)
export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();
        
        // Get query parameters
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');
        const phone = searchParams.get('phone');
        const status = searchParams.get('status');
        const limit = parseInt(searchParams.get('limit') || '50');
        const page = parseInt(searchParams.get('page') || '1');
        
        // Build filter object
        const filter: any = {};
        if (email) filter.email = email;
        if (phone) filter.phone = phone;
        if (status) filter.status = status;
        
        // Calculate skip for pagination
        const skip = (page - 1) * limit;
        
        // Fetch appointments with pagination
        const appointments = await Appointment.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        
        // Get total count for pagination
        const total = await Appointment.countDocuments(filter);
        
        return NextResponse.json(
            { 
                success: true, 
                data: appointments,
                pagination: {
                    total,
                    page,
                    limit,
                    pages: Math.ceil(total / limit)
                }
            },
            { status: 200 }
        );
        
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}

// PUT - Update appointment status
export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, status } = body;
        
        if (!id || !status) {
            return NextResponse.json(
                { success: false, message: 'ID and status are required' },
                { status: 400 }
            );
        }
        
        await connectToDatabase();
        
        const appointment = await Appointment.findByIdAndUpdate(
            id,
            { status, updatedAt: new Date() },
            { new: true, runValidators: true }
        );
        
        if (!appointment) {
            return NextResponse.json(
                { success: false, message: 'Appointment not found' },
                { status: 404 }
            );
        }
        
        return NextResponse.json(
            { success: true, message: 'Appointment updated successfully', data: appointment },
            { status: 200 }
        );
        
    } catch (error) {
        console.error('Error updating appointment:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}

// DELETE - Delete an appointment
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json(
                { success: false, message: 'ID is required' },
                { status: 400 }
            );
        }
        
        await connectToDatabase();
        
        const appointment = await Appointment.findByIdAndDelete(id);
        
        if (!appointment) {
            return NextResponse.json(
                { success: false, message: 'Appointment not found' },
                { status: 404 }
            );
        }
        
        return NextResponse.json(
            { success: true, message: 'Appointment deleted successfully' },
            { status: 200 }
        );
        
    } catch (error) {
        console.error('Error deleting appointment:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}