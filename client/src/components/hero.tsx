import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { articles } from "@/lib/data";

export function Hero() {
  const { t } = useLanguage();
  const latestArticle = articles[0];

  return (
    <section className="relative overflow-hidden rounded-lg border border-cyber-purple/30 bg-card/30 backdrop-blur-sm min-h-[500px] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2676&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen mask-image-gradient" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />

      <div className="relative z-10 p-8 md:p-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-green/50 bg-cyber-green/10 text-cyber-green text-xs font-mono mb-6">
            <Cpu className="w-3 h-3" />
            V.0.1.0 // BETA
          </span>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase leading-tight mb-4 glitch-effect" data-text="THE CODE EVOLUTION">
            THE CODE EVOLUTION
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-8 font-sans">
            {t('hero.subtitle')}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/article/${latestArticle.id}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyber-cyan text-black font-bold font-mono uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all clip-path-polygon">
              {t('hero.cta')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-magenta to-transparent opacity-50" />
    </section>
  );
}