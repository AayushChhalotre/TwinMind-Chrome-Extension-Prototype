import { Menu, Search } from 'lucide-react';

export function SidebarHeader() {
  return (
    <div className="flex-shrink-0 border-b border-zinc-800 bg-[#1a1a1a]">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Menu className="w-5 h-5 text-zinc-500" />
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <span className="text-white font-medium text-sm">TwinMind</span>
          </div>
        </div>
        
        <button className="text-zinc-400 hover:text-zinc-300 transition-colors text-xs flex items-center gap-1">
          View Memories
          <Search className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Greeting Section */}
      <div className="px-4 py-6">
        <h1 className="text-white text-xl mb-1">Hi Aayush,</h1>
        <p className="text-zinc-400 text-sm">Your tabs are organized into tasks</p>
      </div>
    </div>
  );
}
