import { Task } from '@/app/types';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Code LifeOS project',
    context: 'Active HTML compiler session for a personal project',
    priority: 'high',
    tabs: [
      {
        id: '1-1',
        title: 'LifeOS Repository - GitHub',
        favicon: '📁',
        insight: 'Main project repository with recent commits on HTML compiler improvements'
      },
      {
        id: '1-2',
        title: 'VS Code Web Editor',
        favicon: '💻',
        insight: 'Active coding session with HTML parser modifications open'
      },
      {
        id: '1-3',
        title: 'HTML Parser Documentation - MDN',
        favicon: '📚',
        insight: 'Reference documentation for HTML parsing APIs you\'re implementing'
      },
      {
        id: '1-4',
        title: 'Stack Overflow: HTML Compiler Best Practices',
        favicon: '💬',
        insight: 'Research on compiler optimization techniques relevant to your current work'
      }
    ]
  },
  {
    id: '2',
    title: 'Book mentorship meeting',
    context: 'Specific Calendly link open for a 15-minute session',
    priority: 'high',
    tabs: [
      {
        id: '2-1',
        title: 'Schedule with Placeholder Name - Calendly',
        favicon: '📅',
        insight: 'Calendly page for booking a mentorship session, currently viewing available slots'
      },
      {
        id: '2-2',
        title: 'Placeholder Name - LinkedIn',
        favicon: '👤',
        insight: 'Mentor\'s profile to review background and expertise before the meeting'
      },
      {
        id: '2-3',
        title: 'Google Calendar',
        favicon: '🗓️',
        insight: 'Checking your availability to find a suitable meeting time'
      }
    ]
  },
  {
    id: '3',
    title: 'Analyze AI design and business trends',
    context: 'Recent tabs researching specific AI reports and articles',
    priority: 'medium',
    tabs: [
      {
        id: '3-1',
        title: 'The Future of AI in Product Design - Product Space',
        favicon: '🎨',
        insight: 'Article analyzing how AI is transforming the product design workflow'
      },
      {
        id: '3-2',
        title: 'AI Business Model Innovation Report 2025',
        favicon: '📊',
        insight: 'Research report on emerging AI-powered business models and revenue strategies'
      },
      {
        id: '3-3',
        title: 'How Transformers and LLMs Work - Medium',
        favicon: '📝',
        insight: 'Technical deep-dive into transformer architecture relevant to understanding AI trends'
      },
      {
        id: '3-4',
        title: 'OpenAI Tokenizer Playground',
        favicon: '🔧',
        insight: 'Hands-on tool for understanding how AI models process text, supporting your research'
      }
    ]
  },
  {
    id: '4',
    title: 'Plan weekend trip',
    context: 'Looking at travel options and activities for a short getaway',
    priority: 'low',
    tabs: [
      {
        id: '4-1',
        title: 'Weekend Getaway Ideas Near You - TripAdvisor',
        favicon: '✈️',
        insight: 'Browsing nearby destinations for a quick weekend escape'
      },
      {
        id: '4-2',
        title: 'Airbnb - Mountain Cabins',
        favicon: '🏠',
        insight: 'Exploring cozy cabin rentals for a relaxing weekend retreat'
      },
      {
        id: '4-3',
        title: 'Best Hiking Trails - AllTrails',
        favicon: '🥾',
        insight: 'Researching scenic hiking spots to visit during your trip'
      },
      {
        id: '4-4',
        title: 'Local Restaurants & Cafes - Yelp',
        favicon: '🍽️',
        insight: 'Finding highly-rated dining options near your destination'
      }
    ]
  },
  {
    id: '5',
    title: 'Research Product Ideas',
    context: 'Searching for productivity app ideas and analyzing market trends',
    priority: 'low',
    tabs: [
      {
        id: '5-1',
        title: 'Product Hunt - Top Productivity Tools 2025',
        favicon: '🚀',
        insight: 'Trending productivity tools to identify market gaps and opportunities'
      },
      {
        id: '5-2',
        title: 'Notion vs. Obsidian Comparison',
        favicon: '📋',
        insight: 'Analyzing competing note-taking solutions to understand user preferences'
      },
      {
        id: '5-3',
        title: 'Personal Knowledge Management Systems',
        favicon: '🧠',
        insight: 'Research on PKM trends relevant to building a second brain tool'
      }
    ]
  }
];