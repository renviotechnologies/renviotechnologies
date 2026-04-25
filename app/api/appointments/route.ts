import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Appointment from '@/model/Appointment';

const GOOGLE_FORM_URL = process.env.RENVIOWEBAPPOINTMENT!;
async function connectToDatabase() {
    if (mongoose.connection.readyState >= 1) return;
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined in environment variables');
    await mongoose.connect(MONGODB_URI);
}

async function submitToGoogleForm(data: {
    name: string;
    email: string;
    phone: string;
    datetime?: string | null;
    message?: string | null;
}) {
    try {
        let date = "";
        let time = "";

        if (data.datetime) {
            const dt = new Date(data.datetime);
            date = dt.toISOString().split("T")[0];           // e.g. 2026-04-23
            time = dt.toTimeString().slice(0, 5);            // e.g. 04:04
        }

        const formBody = new URLSearchParams({
            "entry.1942544064": data.name,
            "entry.2007837274": data.email,
            "entry.2099795635": data.phone,
            "entry.444797114":  date,
            "entry.2011257855": time,
            "entry.2139544904": data.message || "",
        });

        await fetch(GOOGLE_FORM_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formBody.toString(),
        });

        console.log("[Appointment] Submitted to Google Form");
    } catch (err) {
        console.error("[Appointment] Google Form submission failed:", err);
        // Non-blocking — don't throw, just log
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, datetime, message } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: 'Name, email, and phone are required fields' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const appointment = new Appointment({
            name,
            email,
            phone,
            datetime: datetime || null,
            message: message || null,
            status: 'pending'
        });

        await Promise.all([
            appointment.save(),
            submitToGoogleForm({ name, email, phone, datetime, message }),
        ]);

        console.log("[Appointment] Saved to MongoDB:", appointment._id);

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

        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err: any) => err.message);
            return NextResponse.json(
                { success: false, message: 'Validation failed', errors: validationErrors },
                { status: 400 }
            );
        }

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

export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();

        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');
        const phone = searchParams.get('phone');
        const status = searchParams.get('status');
        const limit = parseInt(searchParams.get('limit') || '50');
        const page = parseInt(searchParams.get('page') || '1');

        const filter: any = {};
        if (email) filter.email = email;
        if (phone) filter.phone = phone;
        if (status) filter.status = status;

        const skip = (page - 1) * limit;

        const appointments = await Appointment.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

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