import { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { SidebarHeader } from '@/app/components/SidebarHeader';
import { TaskCard } from '@/app/components/TaskCard';
import { SidebarFooter } from '@/app/components/SidebarFooter';
import { BrowserTabs } from '@/app/components/BrowserTabs';
import { TwinMindHome } from '@/app/components/TwinMindHome';
import { mockTasks } from '@/app/data/mockData';

export default function App() {
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const [closedTaskIds, setClosedTaskIds] = useState<string[]>([]);
  const [activeTabId, setActiveTabId] = useState<string>('twinmind-home');

  const toggleTask = (taskId: string) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  const closeTask = (taskId: string) => {
    setClosedTaskIds([...closedTaskIds, taskId]);
    if (expandedTaskId === taskId) {
      setExpandedTaskId(null);
    }
  };

  const toggleTaskFromHome = (taskId: string) => {
    if (closedTaskIds.includes(taskId)) {
      setClosedTaskIds(closedTaskIds.filter(id => id !== taskId));
    } else {
      setClosedTaskIds([...closedTaskIds, taskId]);
    }
  };

  const closeTab = (tabId: string) => {
    // Find which task this tab belongs to and close that task
    const task = mockTasks.find(t => t.tabs.some(tab => tab.id === tabId));
    if (task && !closedTaskIds.includes(task.id)) {
      closeTask(task.id);
    }
  };

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  const activeTasks = mockTasks.filter(task => !closedTaskIds.includes(task.id));

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-900">
      {/* Mock Browser Window */}
      <div className="h-screen w-full max-w-[1600px] flex bg-[#1a1a1a] shadow-2xl">
        
        <PanelGroup direction="horizontal">
          {/* Main Browser Area */}
          <Panel defaultSize={70} minSize={40}>
            <div className="h-full flex flex-col">
              {/* Browser Tab Bar */}
              <BrowserTabs 
                tasks={mockTasks}
                closedTaskIds={closedTaskIds}
                onCloseTab={closeTab}
                activeTabId={activeTabId}
                onTabClick={handleTabClick}
              />
              
              {/* Main Content Area */}
              <div className="flex-1 bg-zinc-800/20 flex items-center justify-center">
                {activeTabId === 'twinmind-home' ? (
                  <TwinMindHome 
                    tasks={mockTasks}
                    closedTaskIds={closedTaskIds}
                    onToggleTask={toggleTaskFromHome}
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-zinc-600 text-sm mb-2">
                      {activeTasks.reduce((sum, task) => sum + task.tabs.length, 0)} tabs open across {activeTasks.length} {activeTasks.length === 1 ? 'task' : 'tasks'}
                    </div>
                    <div className="text-zinc-500 text-xs">TwinMind is organizing your browsing context →</div>
                  </div>
                )}
              </div>
            </div>
          </Panel>

          {/* Resize Handle */}
          <PanelResizeHandle className="w-1 bg-zinc-700/50 hover:bg-orange-500/50 transition-colors cursor-col-resize relative group">
            <div className="absolute inset-y-0 -left-1 -right-1" />
          </PanelResizeHandle>

          {/* Chrome Extension Sidebar Container */}
          <Panel defaultSize={30} minSize={25} maxSize={50}>
            <div className="h-full bg-[#1a1a1a] flex flex-col shadow-2xl">
              
              {/* Fixed Header */}
              <SidebarHeader />
              
              {/* Scrollable Main Content */}
              <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                <div className="space-y-3 mt-4">
                  {activeTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      isExpanded={expandedTaskId === task.id}
                      onToggle={() => toggleTask(task.id)}
                      onClose={() => closeTask(task.id)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Fixed Footer */}
              <SidebarFooter />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}