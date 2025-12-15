import React from 'react';
import { Link, useLocation } from "wouter";
import { useLanguage } from '@/lib/i18n';
import { Terminal, Zap, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground overflow-x-hidden">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

      <header className="sticky top-0 z-40 w-full border-b border-cyber-purple/30 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1 bg-cyber-cyan/10 border border-cyber-cyan/50 rounded-sm group-hover:bg-cyber-cyan/20 transition-colors">
              <Zap className="w-6 h-6 text-cyber-cyan" />
            </div>
            <span className="font-display font-bold text-2xl tracking-widest text-white group-hover:text-cyber-cyan transition-colors">
              VIBE<span className="text-cyber-magenta">CODING</span><span className="text-cyber-cyan">X</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest">
            <Link href="/" className={cn("hover:text-cyber-cyan transition-colors uppercase", location === '/' && "text-cyber-cyan text-glow")}>
              {t('nav.home')}
            </Link>
            <Link href="/article/replit-vs-manus" className={cn("hover:text-cyber-cyan transition-colors uppercase", location.includes('article') && "text-cyber-cyan text-glow")}>
              {t('nav.articles')}
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-cyber-magenta transition-colors group"
            >
              <Globe className="w-4 h-4 group-hover:animate-spin" />
              <span className="uppercase">{language === 'en' ? 'JP' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile toggle only */}
          <button 
             onClick={toggleLanguage}
             className="md:hidden p-2 border border-cyber-purple/50 rounded-sm hover:bg-cyber-purple/20 text-xs font-mono"
          >
            {language.toUpperCase()}
          </button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 relative">
        {children}
      </main>

      <footer className="border-t border-cyber-purple/30 bg-black/50 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-70">
            <Terminal className="w-5 h-5 text-cyber-green" />
            <span className="font-mono text-xs text-cyber-green">SYSTEM STATUS: ONLINE</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground text-center md:text-right">
            © 2025 VIBECODINGX. {t('footer.rights')} <br/>
            <span className="text-[10px] opacity-50">DESIGNED FOR THE REPLIT GENERATION</span>
          </p>
        </div>
      </footer>
    </div>
  );
}