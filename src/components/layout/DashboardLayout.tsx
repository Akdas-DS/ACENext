import Link from 'next/link';
import { ReactNode } from 'react';
import { LogOut } from 'lucide-react';
import NotificationDropdown from '@/components/notifications/NotificationDropdown';

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

export default function DashboardLayout({
  children,
  role,
  navItems,
  userName,
}: {
  children: ReactNode;
  role: 'ADMIN' | 'EMPLOYEE' | 'CLIENT';
  navItems: SidebarItem[];
  userName: string;
}) {
  return (
    <div className="flex h-screen bg-background text-[#FAFAF8] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#23212C] border-r border-white/5 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <span className="font-bold text-xl tracking-wider text-[#F1FEC8]">ACENEXT</span>
          <span className="ml-2 text-xs uppercase tracking-widest text-stone-400 border border-white/10 px-2 py-0.5 rounded-full">{role}</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-white/5">
          <form action="/api/auth/signout" method="POST">
            <button type="submit" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors w-full">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-8 bg-[#23212C]/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-10">
          <h2 className="text-sm font-medium text-stone-300">Welcome back, <span className="text-white">{userName}</span></h2>
          <div className="flex items-center gap-4">
            <NotificationDropdown />
            <div className="w-8 h-8 rounded-full bg-[#2D4A3E] border border-white/10 flex items-center justify-center text-sm font-bold text-[#F1FEC8]">
              {userName.charAt(0)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
