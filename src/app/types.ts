export interface Tab {
  id: string;
  title: string;
  favicon: string;
  insight: string;
  url?: string;
}

export interface Task {
  id: string;
  title: string;
  context: string;
  priority: 'high' | 'medium' | 'low';
  tabs: Tab[];
}
