import { X, Plus } from 'lucide-react';
import { Task } from '@/app/types';

interface BrowserTab {
  id: string;
  title: string;
  favicon: string;
  isActive?: boolean;
  isTwinMindHome?: boolean;
}

interface BrowserTabsProps {
  tasks: Task[];
  closedTaskIds: string[];
  onCloseTab: (tabId: string) => void;
  activeTabId: string;
  onTabClick: (tabId: string) => void;
}

export function BrowserTabs({ tasks, closedTaskIds, onCloseTab, activeTabId, onTabClick }: BrowserTabsProps) {
  // Generate tabs from active tasks
  const activeTasks = tasks.filter(task => !closedTaskIds.includes(task.id));
  const openTabs: BrowserTab[] = [
    { 
      id: 'twinmind-home', 
      title: 'TwinMind - Manage Tasks', 
      favicon: '🧠',
      isTwinMindHome: true
    },
    ...activeTasks.flatMap(task => 
      task.tabs.map(tab => ({
        id: tab.id,
        title: tab.title,
        favicon: tab.favicon,
      }))
    )
  ];

  return (
    <div className="bg-[#1f1f1f] border-b border-zinc-700/50 flex items-center">
      {/* Tab Bar */}
      <div className="flex-1 flex items-center overflow-hidden">
        {openTabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
            className={`group flex items-center gap-1.5 px-2.5 py-2 border-r border-zinc-700/30 min-w-0 flex-1 max-w-[140px] cursor-pointer ${
              activeTabId === tab.id
                ? 'bg-[#2a2a2a]'
                : 'bg-[#1a1a1a] hover:bg-[#232323]'
            } transition-colors`}
          >
            <span className="text-[10px] flex-shrink-0">{tab.favicon}</span>
            <span className="text-zinc-300 text-[11px] truncate flex-1">
              {tab.title}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (!tab.isTwinMindHome) {
                  onCloseTab(tab.id);
                }
              }}
              className={`transition-opacity flex-shrink-0 ${
                tab.isTwinMindHome 
                  ? 'opacity-0' 
                  : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              <X className="w-2.5 h-2.5 text-zinc-500 hover:text-zinc-300" />
            </button>
          </div>
        ))}
        <button className="px-2.5 py-2 text-zinc-500 hover:text-zinc-300 flex-shrink-0">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}