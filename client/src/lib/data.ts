import heroImage from "@assets/VCX-eye02_1765812596568.png";

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
      en: "To expose the true responsiveness to correction instructions that everyone is curious about, we executed 3 levels of 'tricky modification prompts' to measure the 'fidelity of correction'.",
      jp: "誰もが気になる「修正指示」の対応力を丸裸にするために、3段階の「意地悪な変更指示プロンプト」を実行させて「修正の忠実度」を計測してみた。"
    },
    date: "2025-12-17",
    category: "BENCHMARK",
    image: heroImage,
    content: {
      en: "Content placeholder...", 
      jp: "Content placeholder..."
    }
  }
];

export const schedule = [5, 15, 25]; // Monthly dates