import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for TypeScript
export interface IAppointment extends Document {
    name: string;
    email: string;
    phone: string;
    datetime?: string;
    message?: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}

// Mongoose Schema
const AppointmentSchema = new Schema<IAppointment>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters'],
            maxlength: [100, 'Name cannot exceed 100 characters']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true,
            minlength: [10, 'Phone number must be at least 10 digits'],
            maxlength: [15, 'Phone number cannot exceed 15 digits']
        },
        datetime: {
            type: String,
            trim: true,
            default: null
        },
        message: {
            type: String,
            trim: true,
            maxlength: [500, 'Message cannot exceed 500 characters'],
            default: null
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled', 'completed'],
            default: 'pending'
        }
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt
    }
);

// Create indexes for better query performance
AppointmentSchema.index({ email: 1 });
AppointmentSchema.index({ phone: 1 });
AppointmentSchema.index({ status: 1 });
AppointmentSchema.index({ createdAt: -1 });

// Export the model
const Appointment: Model<IAppointment> = mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);

export default Appointment;