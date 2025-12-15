import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';

const data = [
  { subject: 'Visual Context', A: 90, B: 80, fullMark: 100 },
  { subject: 'Speed', A: 100, B: 90, fullMark: 100 },
  { subject: 'Accuracy', A: 90, B: 80, fullMark: 100 },
  { subject: 'UX/UI', A: 90, B: 80, fullMark: 100 },
  { subject: 'Step Ease', A: 85, B: 90, fullMark: 100 },
  { subject: 'Vibe', A: 90, B: 80, fullMark: 100 },
];

export function BenchmarkChart() {
  return (
    <div className="w-full h-[400px] bg-black/20 border border-white/10 rounded-lg p-4">
      <h4 className="text-center font-mono text-sm text-muted-foreground mb-4">Performance Matrix</h4>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#E0E6FF', fontSize: 12, fontFamily: 'Orbitron' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Replit Agent 3"
            dataKey="A"
            stroke="#00F0FF"
            strokeWidth={3}
            fill="#00F0FF"
            fillOpacity={0.3}
          />
          <Radar
            name="Manus 1.5"
            dataKey="B"
            stroke="#FF0080"
            strokeWidth={3}
            fill="#FF0080"
            fillOpacity={0.3}
          />
          <Legend wrapperStyle={{ fontFamily: 'Orbitron', fontSize: '14px' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0A0E27', borderColor: '#9D00FF', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}