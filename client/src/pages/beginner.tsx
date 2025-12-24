import { Layout } from "@/components/layout";
import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
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
