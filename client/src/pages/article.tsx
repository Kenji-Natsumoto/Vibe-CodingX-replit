import { Layout } from "@/components/layout";
import { BenchmarkChart } from "@/components/infographic";
import { articles } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { useParams, Link } from "wouter";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import img3227 from "@assets/IMG_3227_1765813413744.jpg";
import img3226 from "@assets/IMG_3226_1765813425582.JPG";

export function ArticlePage() {
  const { id } = useParams();
  const { language } = useLanguage();
  const article = articles.find(a => a.id === id);

  if (!article) return <div className="text-white">Article not found</div>;

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-cyber-cyan font-mono text-xs uppercase tracking-widest mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Base
          </Link>
          
          <div className="flex gap-4 mb-6">
            <span className="px-2 py-1 bg-cyber-magenta/10 border border-cyber-magenta text-cyber-magenta text-xs font-mono rounded">
              {article.category}
            </span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 text-muted-foreground text-xs font-mono rounded">
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6 text-white">
            {article.title[language]}
          </h1>
          
          <p className="text-xl text-muted-foreground font-sans border-l-4 border-cyber-cyan pl-6 italic">
            {article.excerpt[language]}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10 mb-12 group">
          <img 
            src={article.image} 
            alt={article.title[language]} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Text */}
          <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-cyber-cyan prose-p:font-sans prose-p:text-gray-300">
             <div className="bg-white/5 border border-white/10 p-6 rounded-lg mb-8 not-prose">
               <h3 className="text-lg font-mono text-cyber-green mb-4 uppercase">Video Analysis</h3>
               {/* Placeholder for YouTube Embed */}
               <div className="aspect-video bg-black flex items-center justify-center border border-white/5">
                 <p className="font-mono text-muted-foreground text-xs">[VIDEO SIGNAL LOST - PLACEHOLDER]</p>
               </div>
               <p className="text-xs text-muted-foreground mt-2 font-mono text-center">
                 Live demo of the 3-step modification challenge.
               </p>
             </div>

             <p className="mb-6">
               {language === 'en' 
                 ? "The battle for supremacy in the AI coding agent space has reached a fever pitch. In one corner, the reigning champion Replit Agent 3. In the other, the mysterious challenger Manus 1.5. We didn't just look at the specs; we threw them into the fire."
                 : "AIコーディングエージェントの覇権争いは最高潮に達している。現王者Replit Agent 3に対し、謎多き挑戦者Manus 1.5。スペック比較だけではない、実戦での火花散る戦いを検証した。"}
             </p>
             
             <h2>{language === 'en' ? "The Benchmark" : "ベンチマーク結果"}</h2>
             
             {/* Infographic Component */}
             <div className="my-8 not-prose">
               <BenchmarkChart />
               <p className="text-xs text-center text-muted-foreground mt-6 font-mono">
                 Figure 1: Comprehensive Vibe Assessment Radar
               </p>
             </div>

             <p>
               {language === 'en'
                ? "As clearly demonstrated in the radar chart above, while Manus 1.5 shows raw speed, Replit Agent 3 dominates in 'Vibe' and 'Visual Context'—crucial metrics for the modern vibe coder who needs to see changes instantly."
                : "上のレーダーチャートが示す通り、Manus 1.5は圧倒的なスピードを見せたが、Replit Agent 3は「バイブス」と「視覚的コンテキスト」で圧倒。変更を即座に確認したい現代のバイブコーダーにとって、この差は決定的だ。"}
             </p>
             
             <h3>{language === 'en' ? "Conclusion" : "結論"}</h3>
             <p>
               {language === 'en'
                ? "For pure speed: Manus. For the art of coding: Replit. The choice depends on whether you are a mechanic or an artist."
                : "純粋な速度ならManus。コーディングというアートのためならReplit。君が整備士か、アーティストかによって選択は変わるだろう。"}
             </p>

             {/* Editor's Note */}
             <div className="mt-12 p-6 bg-white/5 border border-cyber-magenta/30 rounded-lg">
               <h3 className="text-cyber-magenta font-display uppercase tracking-wider mb-4">
                 {language === 'en' ? "Editor's Note" : "編集後記"}
               </h3>
               {language === 'jp' ? (
                 <>
                   <p className="mb-4 text-sm text-gray-300">
                     先週、フィンテック養成勉強会と湯川塾で、バイブコーディングについて解説をする機会をいただきました。
                   </p>
                   <p className="mb-4 text-sm text-gray-300">
                     双方とも参加者の約30〜40%の方が「バイブコーディングを聞いたことがある」あるいは「知っている・やったことがある」とお答でした。
                   </p>
                   <p className="mb-4 text-sm text-gray-300">
                     このことが、今回、「テックトレンド情報」から「バイブコーディング」にテーマを絞ろうという決意を後押ししました。PDFから脱皮して専門のメディアにしたかったので、ドメイン名を考えた結果、かの「SpaceX」にあやかって「VibeCodingX」と名付けました。
                   </p>
                   <p className="mb-4 text-sm text-gray-300">
                     この名前で、「バイブコーディング」の可能性がもっと世間に広まって欲しいと願っています。＜NA2KEN＞
                   </p>
                   
                   {/* Editor's Note Images */}
                   <div className="flex flex-col md:flex-row gap-4 my-6">
                     <img src={img3227} alt="Seminar scene 1" className="w-full md:w-1/2 rounded border border-white/10" />
                     <img src={img3226} alt="Seminar scene 2" className="w-full md:w-1/2 rounded border border-white/10" />
                   </div>

                   <p className="text-xs text-muted-foreground mt-6 border-t border-white/10 pt-2">
                     【注釈】「湯川塾」・・・ITジャーナリストである湯川鶴章（ゆかわ つるあき）氏が主宰する少人数制の勉強会です。
                   </p>
                 </>
               ) : (
                 <>
                   <p className="mb-4 text-sm text-gray-300">
                     Last week, I had the opportunity to explain Vibe Coding at a Fintech study group and Yukawa Juku.
                   </p>
                   <p className="mb-4 text-sm text-gray-300">
                     In both sessions, about 30-40% of participants answered that they had "heard of Vibe Coding" or "knew/had tried it."
                   </p>
                   <p className="mb-4 text-sm text-gray-300">
                     This encouraged my decision to narrow the theme from general "Tech Trend Information" to specifically "Vibe Coding." I wanted to evolve from PDFs into a specialized media outlet. After considering domain names, I named it "VibeCodingX," inspired by "SpaceX."
                   </p>
                   <p className="mb-4 text-sm text-gray-300">
                     With this name, I hope the possibilities of "Vibe Coding" will spread further into the world. &lt;NA2KEN&gt;
                   </p>
                   
                   {/* Editor's Note Images */}
                   <div className="flex flex-col md:flex-row gap-4 my-6">
                     <img src={img3227} alt="Seminar scene 1" className="w-full md:w-1/2 rounded border border-white/10" />
                     <img src={img3226} alt="Seminar scene 2" className="w-full md:w-1/2 rounded border border-white/10" />
                   </div>

                   <p className="text-xs text-muted-foreground mt-6 border-t border-white/10 pt-2">
                     [Note] "Yukawa Juku" is a small-group study session hosted by IT journalist Tsuruaki Yukawa.
                   </p>
                 </>
               )}
             </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <div className="bg-cyber-purple/10 border border-cyber-purple/30 p-6 rounded-lg mb-6">
                <h4 className="font-mono text-sm text-cyber-purple mb-4 uppercase tracking-widest">Share Data</h4>
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-black/50 border border-white/20 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-black/50 border border-white/20 hover:border-cyber-magenta hover:text-cyber-magenta transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="border border-white/10 p-6 rounded-lg">
                <h4 className="font-mono text-sm text-white mb-4 uppercase">Related Transmissions</h4>
                <ul className="space-y-4">
                  <li className="text-sm text-muted-foreground hover:text-cyber-cyan cursor-pointer transition-colors">
                    → The Rise of Prompt Engineering
                  </li>
                  <li className="text-sm text-muted-foreground hover:text-cyber-cyan cursor-pointer transition-colors">
                    → 5 Tools for Cyberpunk Designers
                  </li>
                  <li className="text-sm text-muted-foreground hover:text-cyber-cyan cursor-pointer transition-colors">
                     → Is React Dead? (Again)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}