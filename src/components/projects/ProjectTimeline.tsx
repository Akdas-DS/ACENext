import { FileText, MessageSquare, CheckCircle, RefreshCcw } from 'lucide-react';

export type TimelineEventType = 'COMMENT' | 'FILE_UPLOAD' | 'STATUS_CHANGE' | 'MILESTONE';

export interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  title: string;
  description: string;
  date: string;
  actor?: string; // Who performed the action
}

interface ProjectTimelineProps {
  events: TimelineEvent[];
}

export default function ProjectTimeline({ events }: ProjectTimelineProps) {
  const getIcon = (type: TimelineEventType) => {
    switch (type) {
      case 'COMMENT':
        return <MessageSquare className="w-4 h-4 text-stone-400" />;
      case 'FILE_UPLOAD':
        return <FileText className="w-4 h-4 text-stone-400" />;
      case 'STATUS_CHANGE':
        return <RefreshCcw className="w-4 h-4 text-[#F1FEC8]" />;
      case 'MILESTONE':
        return <CheckCircle className="w-4 h-4 text-[#F1FEC8]" />;
    }
  };

  return (
    <div className="space-y-6">
      {events.length === 0 ? (
        <p className="text-stone-500 text-sm">No recent activity.</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="relative pl-8 border-l-2 border-white/10 last:border-l-transparent">
            {/* Timeline Dot/Icon */}
            <div className="absolute w-6 h-6 rounded-full bg-[#23212C] border border-white/20 -left-[13px] top-0 flex items-center justify-center">
              {getIcon(event.type)}
            </div>

            <div className="pb-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-medium text-white">
                  {event.title}
                  {event.actor && <span className="text-stone-500 font-normal ml-2">by {event.actor}</span>}
                </p>
                <time className="text-xs text-stone-500 flex-shrink-0">
                  {new Date(event.date).toLocaleDateString([], {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </time>
              </div>
              <p className="text-sm text-stone-400 mt-1">{event.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
