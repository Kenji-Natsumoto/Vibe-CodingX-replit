import { Layout } from "@/components/layout";
import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import { ArrowLeft, Share2, Bookmark, ExternalLink, Zap, Brain, Terminal } from "lucide-react";
import infographicImage from "@/assets/beginner_note_infographic.png";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function BeginnerPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto pb-20">
        {/* Navigation */}
        <div className="mb-8 flex justify-between items-end border-b border-white/10 pb-4">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-cyber-purple font-mono text-xs uppercase tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t('back.to.base')}
          </Link>
          <div className="flex gap-4">
             <span className="text-xs font-mono text-cyber-purple">{t('section.beginners')}</span>
          </div>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="bg-black/30 border border-cyber-purple/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(138,43,226,0.1)]"
        >
          <img 
            src={infographicImage} 
            alt="Vibe Coding Infographic" 
            className="w-full h-auto"
          />
        </motion.div>

        {/* Additional Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-12 mt-16"
        >
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-cyber-purple glow-text-purple text-center mb-8">
              # 今すぐバイブコーディングを始めるには？
            </h2>

            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                <Terminal className="w-5 h-5 text-cyber-cyan" />
                おすすめプラットフォーム
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a 
                  href="https://replit.com/~" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-black/40 border border-cyber-cyan/30 rounded hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-cyber-cyan" />
                    <span className="font-bold text-white group-hover:text-cyber-cyan transition-colors">Replit Agent 3</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyber-cyan" />
                </a>

                <a 
                  href="https://manus.im/app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-black/40 border border-cyber-magenta/30 rounded hover:bg-cyber-magenta/10 hover:border-cyber-magenta transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-cyber-magenta" />
                    <span className="font-bold text-white group-hover:text-cyber-magenta transition-colors">Manus 1.6</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyber-magenta" />
                </a>
              </div>

              <div className="text-gray-300 text-sm leading-relaxed mb-8 space-y-2">
                <p>上記のどちらかを開いてGoogleアカウントで新規登録。</p>
                <p>以下のプロンプトを打つ。</p>
                <p>作業終わり（質問が返ってきたら答える）。</p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-muted-foreground">プロンプト：</div>
                <div className="bg-black/80 border border-white/20 rounded p-4 font-mono text-cyber-green text-sm md:text-base shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                  〇〇を創りたい。完璧じゃなくていいから、まず形にして
                </div>
              </div>
            </div>

            <div className="text-center py-8">
              <h3 className="text-xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-magenta animate-pulse">
                Have a great VibeCoding life!
              </h3>
            </div>
          </section>
        </motion.div>

        {/* Footer Actions */}
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
           <Link href="/" className="text-sm font-mono text-muted-foreground hover:text-white transition-colors">
             &larr; {t('back.to.base')}
           </Link>
           <div className="flex gap-4">
             <button className="p-2 bg-white/5 rounded-full hover:bg-cyber-purple/20 hover:text-cyber-purple transition-colors">
               <Share2 className="w-4 h-4" />
             </button>
             <button className="p-2 bg-white/5 rounded-full hover:bg-cyber-purple/20 hover:text-cyber-purple transition-colors">
               <Bookmark className="w-4 h-4" />
             </button>
           </div>
        </div>
      </div>
    </Layout>
  );
}
