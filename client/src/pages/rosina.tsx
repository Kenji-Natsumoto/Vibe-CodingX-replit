import { Layout } from "@/components/layout";
import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import { ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { rosinaNovel } from "@/lib/novels";
import rosinaImage from "@assets/generated_images/humanoid_female_asi_interface.png";

function RosinaBio({ language }: { language: 'en' | 'jp' }) {
  return (
    <div className="mt-20 pt-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
        <div className="shrink-0">
          <img 
            src={rosinaImage} 
            alt="AI Rosina" 
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-cyber-magenta/30 shadow-[0_0_20px_rgba(255,0,255,0.2)]"
          />
        </div>
        <div className="space-y-4">
          <div>
             <h3 className="text-xl font-display font-bold text-white mb-1">
               {language === 'en' ? 'AI Rosina' : 'AI ロジーナ'}
             </h3>
             <p className="text-cyber-magenta text-xs font-mono tracking-widest uppercase">
               {language === 'en' ? 'Co-Editor' : '共同編集者'}
             </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            {language === 'en' 
              ? "Co-editor of this media. Kenji Natsumoto's partner AI who speaks in a brisk Kansai dialect."
              : "このメディアの共同編集者。関西弁でチャキチャキ話す、ナツモト ケンジのパートナーAI。"}
          </p>
        </div>
      </div>
    </div>
  );
}

export function RosinaPage() {
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto pb-20">
        {/* Navigation */}
        <div className="mb-12 flex justify-between items-end border-b border-white/10 pb-4">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-cyber-cyan font-mono text-xs uppercase tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t('back.to.base')}
          </Link>
          <div className="flex gap-4">
             <span className="text-xs font-mono text-cyber-magenta">{t('serialized.novel')}</span>
          </div>
        </div>

        {/* Title Section */}
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-wide leading-tight text-white glow-text-white">
              {rosinaNovel.title[language]}
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-mono text-cyber-cyan/80">
              <Clock className="w-3 h-3" />
              <span>{rosinaNovel.date}</span>
            </div>
          </motion.div>
        </header>

        {/* Main Content */}
        <article className="prose prose-invert prose-lg max-w-none prose-p:font-serif prose-p:text-gray-300 prose-p:leading-loose prose-p:tracking-wide">
          
          {rosinaNovel.content.map((block, index) => {
            if (block.type === "text" && "jp" in block && "en" in block) {
              const text = language === 'jp' ? block.jp : block.en;
              if (!text) return null;
              
              return (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="mb-12"
                >
                  {text.split('\n').map((line, i) => (
                    <p key={i} className={block.highlight ? "text-xl text-white font-medium border-l-2 border-cyber-magenta pl-4 my-8" : ""}>
                      {line}
                    </p>
                  ))}
                </motion.div>
              );
            } else if (block.type === "image" && "src" in block && "caption" in block) {
              return (
                <motion.figure 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="my-16"
                >
                  <img 
                    src={block.src} 
                    alt={block.alt} 
                    className="w-full rounded-sm border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  />
                  <figcaption className="text-center text-xs font-mono text-gray-500 mt-2">
                    {language === 'jp' ? block.caption?.jp : block.caption?.en}
                  </figcaption>
                </motion.figure>
              );
            } else if (block.type === "quote" && "jp" in block && "en" in block) {
              const text = language === 'jp' ? block.jp : block.en;
              if (!text) return null;
              
              return (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="my-24 mx-8 md:mx-16 px-6 py-4 border-l-2 border-cyber-cyan/30 bg-white/5 text-sm md:text-base font-serif text-gray-400 italic leading-relaxed"
                >
                  {text}
                </motion.div>
              );
            }
            return null;
          })}
        </article>

        <RosinaBio language={language} />

        {/* Footer Actions */}
        <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center">
           <Link href="/" className="text-sm font-mono text-muted-foreground hover:text-white transition-colors">
             &larr; {t('back.to.base')}
           </Link>
           <div className="flex gap-4">
             <button className="p-2 bg-white/5 rounded-full hover:bg-cyber-cyan/20 hover:text-cyber-cyan transition-colors">
               <Share2 className="w-4 h-4" />
             </button>
             <button className="p-2 bg-white/5 rounded-full hover:bg-cyber-magenta/20 hover:text-cyber-magenta transition-colors">
               <Bookmark className="w-4 h-4" />
             </button>
           </div>
        </div>
      </div>
    </Layout>
  );
}
