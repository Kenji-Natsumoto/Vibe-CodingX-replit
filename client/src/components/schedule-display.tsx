import { useLanguage } from "@/lib/i18n";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScheduleDisplay() {
  const { t } = useLanguage();

  return (
    <div className="border border-cyber-purple/30 bg-black/40 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <Clock className="w-5 h-5 text-cyber-magenta" />
        <h3 className="font-mono text-lg tracking-widest text-cyber-magenta">{t('schedule.title')}</h3>
      </div>

      <div className="flex items-center justify-center p-6 border border-cyber-cyan bg-cyber-cyan/10 shadow-[0_0_15px_rgba(0,240,255,0.3)] rounded transition-all duration-300 group hover:bg-cyber-cyan/20">
        <div className="text-center">
          <span className="block text-xs font-mono text-cyber-cyan mb-2 tracking-widest uppercase">Weekly Drop</span>
          <span className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-cyber-cyan transition-colors">
            EVERY WEDNESDAY
          </span>
        </div>
      </div>
    </div>
  );
}