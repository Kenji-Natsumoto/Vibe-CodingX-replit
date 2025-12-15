import { useLanguage } from "@/lib/i18n";
import { schedule } from "@/lib/data";
import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScheduleDisplay() {
  const { t } = useLanguage();
  const today = new Date().getDate();

  // Find next drop date
  const nextDrop = schedule.find(d => d > today) || schedule[0];

  return (
    <div className="border border-cyber-purple/30 bg-black/40 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <Clock className="w-5 h-5 text-cyber-magenta" />
        <h3 className="font-mono text-lg tracking-widest text-cyber-magenta">{t('schedule.title')}</h3>
      </div>

      <div className="flex justify-between items-center gap-2">
        {schedule.map((date) => (
          <div key={date} className="relative flex-1 group">
             {/* Connector line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10" />
            
            <div className={cn(
              "flex flex-col items-center justify-center p-4 border transition-all duration-300",
              date === nextDrop 
                ? "border-cyber-cyan bg-cyber-cyan/10 scale-110 shadow-[0_0_15px_rgba(0,240,255,0.3)] z-10" 
                : "border-white/10 bg-background hover:border-white/30"
            )}>
              <span className="text-xs font-mono text-muted-foreground mb-1">DEC</span>
              <span className={cn(
                "text-2xl font-display font-bold",
                date === nextDrop ? "text-cyber-cyan" : "text-white"
              )}>{date}TH</span>
            </div>
            
            {date === nextDrop && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-[10px] font-mono text-cyber-cyan animate-pulse">
                  {t('schedule.next')}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}