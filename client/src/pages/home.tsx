import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { ScheduleDisplay } from "@/components/schedule-display";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function Home() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="space-y-16">
        <Hero />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
                {t('article.latest')}
              </h2>
              <div className="h-2 w-20 bg-cyber-magenta animate-pulse" />
            </div>

            <div className="grid gap-8">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
              {/* Duplicate for demo layout balance if needed, but keeping it real for now */}
            </div>
          </div>

          <div className="space-y-8">
            <ScheduleDisplay />
            
            <div className="border border-white/10 bg-card/50 p-6 rounded-lg">
              <h3 className="text-lg font-mono text-cyber-green mb-4 border-b border-cyber-green/30 pb-2">
                TRENDING TAGS
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#VibeCoding', '#AI', '#Replit', '#Manus', '#FutureTech', '#Cyberpunk'].map(tag => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground hover:text-cyber-cyan cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter placeholder */}
            <div className="border border-cyber-purple/30 bg-cyber-purple/5 p-6 rounded-lg text-center">
              <h3 className="text-lg font-display text-white mb-2">JOIN THE NETWORK</h3>
              <p className="text-xs text-muted-foreground mb-4">Get updates every Wednesday.</p>
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="w-full bg-black/50 border border-white/20 p-2 text-sm font-mono text-white mb-2 focus:border-cyber-cyan outline-none"
              />
              <button className="w-full bg-cyber-purple text-white font-mono text-xs uppercase py-2 hover:bg-cyber-purple/80 transition-colors">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}