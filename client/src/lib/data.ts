export interface Article {
  id: string;
  title: {
    en: string;
    jp: string;
  };
  excerpt: {
    en: string;
    jp: string;
  };
  date: string;
  category: string;
  image: string;
  content: {
    en: string; // HTML or Markdown string for now
    jp: string;
  };
}

export const articles: Article[] = [
  {
    id: "replit-vs-manus",
    title: {
      en: "Vibe Coding Benchmark: Replit Agent 3 vs Manus1.5 Showdown!",
      jp: "バイブコーディング修正しやすさベンチマーク：Replit Agent 3 X Manus1.5 頂上対決！"
    },
    excerpt: {
      en: "We put the two hottest AI coding agents to the test with 3 rigorous modification tasks. Who is the true king of Vibe Coding?",
      jp: "話題のAIコーディングエージェント2強を3つの修正タスクで徹底検証。真のバイブコーディング王者はどっちだ？"
    },
    date: "2025-12-15",
    category: "BENCHMARK",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop", // Cyberpunk placeholder
    content: {
      en: "Content placeholder...", 
      jp: "Content placeholder..."
    }
  }
];

export const schedule = [5, 15, 25]; // Monthly dates