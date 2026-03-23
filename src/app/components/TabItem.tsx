import { ExternalLink } from 'lucide-react';
import { Tab } from '@/app/types';

interface TabItemProps {
  tab: Tab;
}

export function TabItem({ tab }: TabItemProps) {
  return (
    <div className="group flex items-start gap-3 p-2.5 rounded-md hover:bg-zinc-800/50 transition-colors">
      {/* Favicon */}
      <div className="w-5 h-5 rounded bg-zinc-700/50 border border-zinc-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-xs">{tab.favicon}</span>
      </div>
      
      {/* Tab Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-white text-xs font-medium leading-snug truncate">
            {tab.title}
          </h4>
          <ExternalLink className="w-3 h-3 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </div>
        
        {/* TwinMind Insight */}
        <p className="text-zinc-500 text-[11px] leading-relaxed mt-1">
          <span className="text-orange-400/80">TwinMind:</span> {tab.insight}
        </p>
      </div>
    </div>
  );
}
