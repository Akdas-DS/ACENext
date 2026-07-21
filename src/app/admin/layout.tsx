import DashboardLayout from '@/components/layout/DashboardLayout';
import { LayoutDashboard, Users, Briefcase, FileText, Settings, Shield } from 'lucide-react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const adminNavItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/admin' },
  { icon: Briefcase, label: 'Projects', href: '/admin/projects' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: FileText, label: 'Audit Logs', href: '/admin/logs' },
  { icon: Shield, label: 'Permissions', href: '/admin/permissions' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/login');
  }

  return (
    <DashboardLayout
      role="ADMIN"
      userName={session.user.name || 'Admin User'}
      navItems={adminNavItems}
    >
      {children}
    </DashboardLayout>
  );
}
