import { Link } from "wouter";
import { Article } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

export function ArticleCard({ article }: { article: Article }) {
  const { language, t } = useLanguage();

  return (
    <Link href={`/article/${article.id}`} className="group relative block overflow-hidden rounded-lg border border-white/10 bg-card hover:border-cyber-cyan/50 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title[language]} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-cyber-magenta px-2 py-1 border border-cyber-magenta/30 rounded bg-cyber-magenta/10">
            {article.category}
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {article.date}
          </span>
        </div>

        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-cyber-cyan transition-colors line-clamp-2">
          {article.title[language]}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 font-sans">
          {article.excerpt[language]}
        </p>

        <div className="flex items-center text-cyber-cyan text-sm font-mono uppercase tracking-widest gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
          {t('read.more')} <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}