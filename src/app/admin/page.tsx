export default async function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#FAFAF8] tracking-tight">Admin Dashboard</h1>
        <p className="text-stone-400 mt-1">Manage platform settings, users, and oversee all projects.</p>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Clients', value: '124' },
          { label: 'Active Projects', value: '42' },
          { label: 'System Health', value: '99.9%' },
          { label: 'Open Issues', value: '3' }
        ].map((metric, i) => (
          <div key={i} className="bg-[#23212C] border border-white/5 rounded-xl p-6">
            <h3 className="text-sm font-medium text-stone-400">{metric.label}</h3>
            <p className="text-3xl font-bold text-[#F1FEC8] mt-2">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#23212C] border border-white/5 rounded-xl p-6 h-96 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Platform Activity</h3>
          <div className="flex-1 border border-dashed border-white/10 rounded-lg flex items-center justify-center">
            <span className="text-stone-500 text-sm">Chart Placeholder</span>
          </div>
        </div>
        <div className="bg-[#23212C] border border-white/5 rounded-xl p-6 h-96 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Audit Logs</h3>
          <div className="flex-1 space-y-4 overflow-y-auto pr-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-3 text-sm">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                <div>
                  <p className="text-stone-300">User logged in</p>
                  <p className="text-stone-500 text-xs">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
