'use client';

import { useActionState } from 'react';
import { loginAction } from './actions';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, {
    error: null,
  });

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background glow for spatial depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bronze/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-ivory tracking-widest uppercase">
              ACENEXT
            </h1>
            <p className="text-stone mt-3 text-sm">
              Secure Portal Authentication
            </p>
          </div>

          {state.error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
              {state.error}
            </div>
          )}

          <form action={formAction} className="space-y-6">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-stone ml-1">
                Work Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-bronze/50 focus:bg-white/[0.05] transition-all duration-300"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-sm font-medium text-stone">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-bronze hover:text-ivory transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <input
                name="password"
                type="password"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-bronze/50 focus:bg-white/[0.05] transition-all duration-300"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 rounded-xl mt-8 font-semibold bg-bronze text-background hover:bg-sand transition-all shadow-[0_0_20px_rgba(139,115,85,0.3)] hover:shadow-[0_0_30px_rgba(139,115,85,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? 'Authenticating...' : 'Authenticate'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-stone text-xs text-center mb-3">Demo Credentials</p>
            <div className="grid grid-cols-1 gap-2 text-xs text-stone/70">
              <div className="flex justify-between px-3 py-1.5 rounded-lg bg-white/[0.02]">
                <span>Admin</span>
                <span className="text-ivory/50">admin@acenext.com / admin123</span>
              </div>
              <div className="flex justify-between px-3 py-1.5 rounded-lg bg-white/[0.02]">
                <span>Employee</span>
                <span className="text-ivory/50">employee@acenext.com / employee123</span>
              </div>
              <div className="flex justify-between px-3 py-1.5 rounded-lg bg-white/[0.02]">
                <span>Client</span>
                <span className="text-ivory/50">client@example.com / client123</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-stone/50 text-xs mt-8">
          Protected by enterprise-grade encryption.
        </p>
      </div>
    </div>
  );
}
