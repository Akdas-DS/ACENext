'use server';

import { auth } from '@/auth';
import { getProjectComments } from '@/lib/queries';
import { RoleType } from '@/types/enums';

export async function fetchCommentsAction(projectId: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  // Uses the centralized query wrapper which applies visibility restrictions based on role
  const comments = await getProjectComments(projectId, session.user.role as any);
  return comments;
}
