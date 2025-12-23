import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export function ArticlesPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-cyber-cyan font-mono text-xs uppercase tracking-widest transition-colors w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t('back.to.base')}
          </Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wide uppercase">
            {t('nav.articles')}
          </h1>
          <p className="text-muted-foreground font-mono text-sm max-w-2xl">
            /ARCHIVE/EXPERIMENTAL_LOGS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
}