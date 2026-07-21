import DashboardLayout from '@/components/layout/DashboardLayout';
import { LayoutDashboard, Briefcase, FileText, Settings, MessageSquare } from 'lucide-react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const clientNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/client' },
  { icon: Briefcase, label: 'My Projects', href: '/client/projects' },
  { icon: MessageSquare, label: 'Messages', href: '/client/messages' },
  { icon: FileText, label: 'Files', href: '/client/files' },
  { icon: Settings, label: 'Settings', href: '/client/settings' },
];

export default async function ClientLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  if (!session || (session.user.role !== 'CLIENT' && session.user.role !== 'ADMIN')) {
    redirect('/login');
  }

  return (
    <DashboardLayout
      role="CLIENT"
      userName={session.user.name || 'Client User'}
      navItems={clientNavItems}
    >
      {children}
    </DashboardLayout>
  );
}
