import { PrismaClient } from '@prisma/client';
import { RoleType } from '../src/types/enums';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Hash the passwords
  const adminPassword = await bcrypt.hash('admin123', 10);
  const employeePassword = await bcrypt.hash('employee123', 10);
  const clientPassword = await bcrypt.hash('client123', 10);

  // Clear existing users just in case
  await prisma.user.deleteMany({});

  // Create Admin User
  const admin = await prisma.user.create({
    data: {
      email: 'admin@acenext.com',
      name: 'Admin User',
      passwordHash: adminPassword,
      role: RoleType.ADMIN,
    },
  });

  // Create Employee User
  const employee = await prisma.user.create({
    data: {
      email: 'employee@acenext.com',
      name: 'Employee User',
      passwordHash: employeePassword,
      role: RoleType.EMPLOYEE,
      employeeProfile: {
        create: {
          department: 'Engineering',
          jobTitle: 'Senior Developer',
        },
      },
    },
  });

  // Create Client User
  const client = await prisma.user.create({
    data: {
      email: 'client@example.com',
      name: 'Client User',
      passwordHash: clientPassword,
      role: RoleType.CLIENT,
      clientProfile: {
        create: {
          companyName: 'Example Corp',
          industry: 'Technology',
        },
      },
    },
  });

  console.log('Database seeded successfully with 3 users (Admin, Employee, Client).');
  console.log('Admin login: admin@acenext.com / admin123');
  console.log('Employee login: employee@acenext.com / employee123');
  console.log('Client login: client@example.com / client123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
