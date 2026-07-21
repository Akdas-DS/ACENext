'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function submitReview(
  _prevState: { success: boolean; error: string | null },
  formData: FormData
): Promise<{ success: boolean; error: string | null }> {
  try {
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const role = formData.get('role') as string;
    const content = formData.get('content') as string;
    const rating = parseInt(formData.get('rating') as string) || 5;

    if (!name || !content) {
      return { success: false, error: 'Name and review content are required.' };
    }

    if (content.length < 10) {
      return { success: false, error: 'Please write at least 10 characters.' };
    }

    await prisma.review.create({
      data: { name, company: company || '', role: role || '', content, rating },
    });

    revalidatePath('/');
    return { success: true, error: null };
  } catch {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}

export async function getReviews() {
  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
  });
  return reviews;
}
