import { ChevronDown, ChevronRight, MessageSquare, X } from 'lucide-react';
import { TabItem } from '@/app/components/TabItem';
import { Task } from '@/app/types';

interface TaskCardProps {
  task: Task;
  isExpanded: boolean;
  onToggle: () => void;
  onClose?: () => void;
}

export function TaskCard({ task, isExpanded, onToggle, onClose }: TaskCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-orange-400';
      case 'low':
        return 'text-emerald-400';
      default:
        return 'text-zinc-400';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'Needs to be completed today';
      case 'medium':
        return 'Can be replied to within a week';
      case 'low':
        return 'Low priority';
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#242424] border border-zinc-700/50 rounded-lg overflow-hidden hover:border-zinc-600/50 transition-colors">
      {/* Task Header - Clickable */}
      <div className="w-full px-4 py-3 flex items-start gap-3 relative">
        <MessageSquare className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
        
        {/* Close Button - Outside clickable area */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-0.5 hover:bg-zinc-700/50 rounded transition-colors group/close z-10"
            title="Close task and tabs"
          >
            <X className="w-3.5 h-3.5 text-zinc-500 group-hover/close:text-red-400" />
          </button>
        )}
        
        <div 
          onClick={onToggle}
          className="flex-1 min-w-0 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="flex items-start justify-between gap-2 mb-1 pr-8">
            <h3 className="text-white text-sm font-medium leading-snug">
              {task.title}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-zinc-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              )}
            </div>
          </div>
          
          <p className="text-zinc-400 text-xs leading-relaxed mb-2">
            {task.context}
          </p>

          {/* Priority Badge */}
          <div className={`text-xs ${getPriorityColor(task.priority)} flex items-center gap-1`}>
            <div className={`w-1.5 h-1.5 rounded-full ${
              task.priority === 'high' ? 'bg-red-400' :
              task.priority === 'medium' ? 'bg-orange-400' :
              'bg-emerald-400'
            }`} />
            {getPriorityLabel(task.priority)}
          </div>
          
          {/* Tab Favicons Preview (when collapsed) */}
          {!isExpanded && (
            <div className="flex items-center gap-1.5 mt-3">
              {task.tabs.slice(0, 4).map((tab, index) => (
                <div 
                  key={index}
                  className="w-5 h-5 rounded bg-zinc-700/50 border border-zinc-600/30 flex items-center justify-center flex-shrink-0"
                  title={tab.title}
                >
                  <span className="text-[10px]">{tab.favicon}</span>
                </div>
              ))}
              {task.tabs.length > 4 && (
                <span className="text-zinc-500 text-xs ml-0.5">
                  +{task.tabs.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Tab List */}
      {isExpanded && (
        <div className="border-t border-zinc-700/50 bg-[#1f1f1f]">
          <div className="px-4 py-2">
            <p className="text-zinc-500 text-xs mb-2">Related tabs ({task.tabs.length})</p>
            <div className="space-y-1.5">
              {task.tabs.map((tab) => (
                <TabItem key={tab.id} tab={tab} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}