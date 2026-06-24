import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Contact } from '@/model/contact';

const GOOGLE_FORM_URL = process.env.RENVIOWEBCONTACT!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Name, phone, email, and service are required.' },
        { status: 400 }
      );
    }

    await connectDB();

    const googleFormBody = new URLSearchParams({
      "entry.971758953":  name,
      "entry.821754666":  phone,
      "entry.1405179804": email,
      "entry.1225849477": service,
      "entry.28955212":   message || "",
    });

    const [contact] = await Promise.all([
      Contact.create({ name, phone, email, service, message }),
      fetch(GOOGLE_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: googleFormBody.toString(),
      }),
    ]);

    console.log("[Contact] Saved to MongoDB:", contact._id);
    console.log("[Contact] Submitted to Google Form");

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