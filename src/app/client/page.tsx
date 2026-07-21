import ProjectTimeline, { TimelineEvent } from '@/components/projects/ProjectTimeline';

const sampleEvents: TimelineEvent[] = [
  {
    id: '1',
    type: 'MILESTONE',
    title: 'Design Mockups Approved',
    description: 'The frontend designs have been finalized and signed off by the client.',
    date: new Date().toISOString(),
    actor: 'Client',
  },
  {
    id: '2',
    type: 'FILE_UPLOAD',
    title: 'Architecture Diagram Uploaded',
    description: 'Added backend_arch_v2.pdf to project files.',
    date: new Date(Date.now() - 86400000).toISOString(),
    actor: 'System Architect',
  },
  {
    id: '3',
    type: 'COMMENT',
    title: 'Feedback provided on Sprint 1',
    description: 'Everything looks good, but please adjust the padding on the data table.',
    date: new Date(Date.now() - 172800000).toISOString(),
    actor: 'Client',
  },
];

export default async function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#FAFAF8] tracking-tight">Client Dashboard</h1>
        <p className="text-stone-400 mt-1">Track your project progress and communicate with our team.</p>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Active Projects', value: '1' },
          { label: 'Unread Messages', value: '3' },
          { label: 'Recent Files', value: '5' }
        ].map((metric, i) => (
          <div key={i} className="bg-[#23212C] border border-white/5 rounded-xl p-6">
            <h3 className="text-sm font-medium text-stone-400">{metric.label}</h3>
            <p className="text-3xl font-bold text-[#F1FEC8] mt-2">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#23212C] border border-white/5 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Project Timeline</h3>
        <ProjectTimeline events={sampleEvents} />
      </div>
    </div>
  );
}
