import { Sparkles } from 'lucide-react';

export function SidebarFooter() {
  return (
    <div className="flex-shrink-0 border-t border-zinc-800 bg-[#1a1a1a] px-4 py-4">
      <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-orange-900/20">
        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span className="text-sm font-medium">Tidy my tabs into tasks</span>
      </button>
      
      <p className="text-zinc-500 text-xs text-center mt-3">
        TwinMind auto-organizes your browsing context
      </p>
    </div>
  );
}
