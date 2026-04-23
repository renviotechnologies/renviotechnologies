import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Contact } from '@/model/contact';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    // Basic validation
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Name, phone, email, and service are required.' },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({ name, phone, email, service, message });

    return NextResponse.json(
      { success: true, id: contact._id },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('[contact API error]', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}