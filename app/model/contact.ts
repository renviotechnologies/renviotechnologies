import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  phone: string;
  email: string;
  service: string;
  message?: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name:    { type: String, required: true, trim: true },
    phone:   { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    service: { type: String, required: true },
    message: { type: String, trim: true, default: '' },
  },
  { timestamps: true }   // adds createdAt + updatedAt automatically
);

// Prevent model re-compilation in dev (Next.js hot reload)
export const Contact = models.Contact || model<IContact>('Contact', ContactSchema);