'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function submitContactInquiry(
  _prevState: { success: boolean; error: string | null },
  formData: FormData
): Promise<{ success: boolean; error: string | null }> {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      return { success: false, error: 'All fields are required.' };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    // Store the inquiry in the database
    await prisma.contactInquiry.create({
      data: { name, email, message },
    });

    // TODO: Add email notification via Resend/SendGrid/Supabase
    // When you have an email API key, uncomment and configure:
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     from: 'noreply@acenext.com',
    //     to: 'acenext@gmail.com',
    //     subject: `New Inquiry from ${name}`,
    //     html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    //   }),
    // });

    return { success: true, error: null };
  } catch {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
