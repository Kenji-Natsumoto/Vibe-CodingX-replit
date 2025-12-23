import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import rosinaBg from "@assets/generated_images/female_ai_humanoid_silhouette_cyberpunk_background.png";
import { Radio, FlaskConical, BookOpen, PenTool } from "lucide-react";

export function Home() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="space-y-16">
        <Hero />
        
        {/* Main 4 Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. VibeCoding News (Placeholder) */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 bg-cyber-green/10 rounded">
                <Radio className="w-5 h-5 text-cyber-green" />
              </div>
              <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                {t('section.news')}
              </h2>
            </div>
            
            <div className="border border-white/10 bg-black/40 p-8 rounded-lg min-h-[300px] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,255,0,0.03)_10px,rgba(0,255,0,0.03)_20px)]" />
              <div className="text-center">
                <p className="text-cyber-green font-mono text-sm animate-pulse mb-2">
                  /// SYSTEM INITIALIZING
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">
                  {t('coming.soon')}
                </p>
              </div>
            </div>
          </section>

          {/* 2. Experimental Logs (Latest) */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyber-cyan/10 rounded">
                  <FlaskConical className="w-5 h-5 text-cyber-cyan" />
                </div>
                <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                  {t('section.experiments')}
                </h2>
              </div>
              <Link href="/articles" className="text-xs font-mono text-muted-foreground hover:text-cyber-cyan transition-colors uppercase tracking-wider">
                View All &rarr;
              </Link>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Show only the latest article (first one) */}
              {articles.slice(0, 1).map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          {/* 3. Future Novel (Rosina) */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 bg-cyber-magenta/10 rounded">
                <BookOpen className="w-5 h-5 text-cyber-magenta" />
              </div>
              <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                {t('section.novel')}
              </h2>
            </div>
            
            <Link href="/novel/rosina">
              <div className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-cyber-magenta/50 transition-colors cursor-pointer min-h-[350px] flex flex-col justify-end">
                {/* Background Image */}
                <img 
                  src={rosinaBg} 
                  alt="Rosina Background" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                
                <div className="p-6 relative z-10">
                  <span className="text-xs font-mono text-cyber-magenta mb-2 block tracking-widest border-b border-cyber-magenta/30 pb-2 w-fit">
                    NEW SERIES
                  </span>
                  
                  <h4 className="text-sm font-sans font-bold text-white/90 mb-1">
                    100% AIが描く未来私小説
                  </h4>
                  
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-cyber-cyan transition-colors text-glow">
                    （第1話）<br/>
                    ― ロジーナA｜触覚ログと航行記録 ―
                  </h3>
                  
                  <div className="flex items-center text-xs text-cyber-cyan font-mono uppercase tracking-wider">
                    Read Novel &rarr;
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* 4. Beginner's Note (Placeholder) */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 bg-cyber-purple/10 rounded">
                <PenTool className="w-5 h-5 text-cyber-purple" />
              </div>
              <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                {t('section.beginners')}
              </h2>
            </div>
            
            <div className="border border-white/10 bg-black/40 p-8 rounded-lg min-h-[300px] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(138,43,226,0.03)_10px,rgba(138,43,226,0.03)_20px)]" />
              <div className="text-center">
                <p className="text-cyber-purple font-mono text-sm animate-pulse mb-2">
                  /// CONTENT LOADING
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">
                  {t('coming.soon')}
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}