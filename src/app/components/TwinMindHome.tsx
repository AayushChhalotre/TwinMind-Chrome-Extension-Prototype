import { Brain, Check, X } from 'lucide-react';
import { Task } from '@/app/types';

interface TwinMindHomeProps {
  tasks: Task[];
  closedTaskIds: string[];
  onToggleTask: (taskId: string) => void;
}

export function TwinMindHome({ tasks, closedTaskIds, onToggleTask }: TwinMindHomeProps) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0a4a5c] via-[#1a5f6f] to-[#e8a574] flex flex-col overflow-y-auto">
      {/* Navigation Bar */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/10 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-lg font-semibold">TwinMind</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-white/80 hover:text-white text-sm transition-colors">About</button>
            <button className="text-white/80 hover:text-white text-sm transition-colors">Privacy</button>
            <button className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-full transition-colors">
              Download For Free
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-white/90 text-sm">Manage your browsing workspaces</span>
            </div>
            
            <h1 className="text-5xl font-semibold text-white mb-6 leading-tight">
              Never lose track of your work<br />with organized task spaces
            </h1>
            
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Choose which tasks to keep active and which to close.<br />
              Your second brain for organized browsing.
            </p>
          </div>

          {/* Task Management Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {tasks.map((task) => {
              const isActive = !closedTaskIds.includes(task.id);
              return (
                <div
                  key={task.id}
                  className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 transition-all shadow-lg ${
                    isActive 
                      ? 'shadow-orange-500/10 border border-white/50' 
                      : 'opacity-40 border border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Checkbox/Toggle */}
                    <button
                      onClick={() => onToggleTask(task.id)}
                      className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                        isActive
                          ? 'bg-gradient-to-br from-orange-500 to-orange-600 border-orange-500'
                          : 'bg-white border-zinc-300 hover:border-orange-400'
                      }`}
                    >
                      {isActive && <Check className="w-4 h-4 text-white" />}
                    </button>

                    {/* Task Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-zinc-900 text-base font-semibold">{task.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                          isActive 
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-zinc-200 text-zinc-500'
                        }`}>
                          {isActive ? 'Active' : 'Closed'}
                        </div>
                      </div>
                      
                      <p className="text-zinc-600 text-sm mb-3 line-clamp-2">{task.context}</p>
                      
                      {/* Tab Count */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          {task.tabs.slice(0, 6).map((tab, index) => (
                            <div 
                              key={index}
                              className="w-6 h-6 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center"
                              title={tab.title}
                            >
                              <span className="text-xs">{tab.favicon}</span>
                            </div>
                          ))}
                          <span className="text-zinc-500 text-sm font-medium ml-1">
                            {task.tabs.length} {task.tabs.length === 1 ? 'tab' : 'tabs'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-zinc-900 mb-1">
                  {tasks.filter(t => !closedTaskIds.includes(t.id)).length}/{tasks.length}
                </div>
                <div className="text-zinc-600 text-sm">Active Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zinc-900 mb-1">
                  {tasks
                    .filter(t => !closedTaskIds.includes(t.id))
                    .reduce((sum, task) => sum + task.tabs.length, 0)}
                </div>
                <div className="text-zinc-600 text-sm">Open Tabs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}