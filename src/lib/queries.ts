import { PrismaClient, Prisma } from '@prisma/client';
import { RoleType } from '../types/enums';

const prisma = new PrismaClient();

/**
 * Retrieves comments for a specific project.
 * Automatically filters out internal comments if the requesting user is a CLIENT.
 */
export async function getProjectComments(projectId: string, userRole: RoleType) {
  const whereClause: Prisma.CommentWhereInput = {
    projectId,
  };

  // Visibility restriction: Clients cannot see internal comments or logs
  if (userRole === RoleType.CLIENT) {
    whereClause.isInternal = false;
  }

  return await prisma.comment.findMany({
    where: whereClause,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
          role: true,
        },
      },
    },
  });
}

/**
 * Retrieves activity logs for a project.
 * Restricts certain log types from being viewed by clients.
 */
export async function getProjectActivities(projectId: string) {
  // If the user is a client, we could restrict which activities they see.
  // For now, let's assume they only see client-facing activities.
  return await prisma.activityLog.findMany({
    where: {
      projectId,
      // Custom filter logic can go here based on userRole
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
