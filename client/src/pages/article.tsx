import { Layout } from "@/components/layout";
import { BenchmarkChart } from "@/components/infographic";
import { articles } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { useParams, Link } from "wouter";
import { ArrowLeft, Share2, Bookmark, CheckCircle2, Clipboard, Zap, Brain, ExternalLink } from "lucide-react";
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
             
             {/* Tricky Prompts Section */}
             <div className="mb-16 not-prose border border-cyber-cyan/30 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm shadow-[0_0_30px_rgba(0,240,255,0.05)]">
               {/* Header */}
               <div className="p-6 border-b border-cyber-cyan/30 bg-cyber-cyan/5">
                 <h2 className="text-2xl font-display font-bold text-cyber-cyan mb-4 text-glow">
                   3段階の「意地悪な変更指示プロンプト」
                 </h2>
                 <p className="text-sm text-gray-300 font-sans leading-relaxed">
                   <strong className="text-cyber-cyan">実験内容:</strong> 「Replit Agent 3」と「Manus 1.5」に3ステップの「修正」をさせることにする。これは、Google Geminiが考案したエンジニアが良くする「意地悪な要求」をベースにしている。それぞれの作業の様子は画面録画しているから、挙動をじっくり見て比較したい人は、後半のyoutubeを参照して欲しい。
                 </p>
               </div>

               {/* Levels */}
               <div className="divide-y divide-white/10">
                 {/* Level 1 */}
                 <div className="p-6 bg-gradient-to-r from-cyber-cyan/5 to-transparent">
                   <h3 className="text-lg font-mono font-bold text-cyber-cyan mb-3 flex items-center gap-2">
                     <span className="bg-cyber-cyan text-black px-2 py-0.5 text-xs rounded-sm">LEVEL 1</span>
                     【デザイン・条件分岐】見た目と「ちょっとしたロジック」の変更
                   </h3>
                   <div className="mb-4 text-sm text-gray-300">
                     <strong className="text-cyber-cyan">狙い:</strong> ただの色変えではなく、「条件付きの変更」ができるかを見る。AIは全体のスタイルを一括変更するのは得意だが、<strong className="text-white bg-cyber-magenta/20 px-1">「特定の条件の時だけ赤くする」</strong>といった指示で、既存のデザインを崩すことがよくある。
                   </div>
                   
                   <div className="bg-black/50 border border-white/10 rounded p-4 mb-4">
                     <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                       <Clipboard className="w-3 h-3" /> プロンプト
                     </div>
                     <p className="text-sm font-mono text-gray-300">
                       プロジェクト一覧画面の表示を少し変更したいです。<br/>
                       現在表示されているプロジェクト名の文字サイズを少し大きくしてください。<br/>
                       さらに、もしプロジェクト名に「重要」という言葉が含まれている場合は、そのプロジェクトの背景色を薄い赤色（#FFEBEB）にして目立たせてください。<br/>
                       それ以外は今のままのデザインを維持してください。
                     </p>
                   </div>

                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-xs font-mono text-cyber-green mb-1">
                       <CheckCircle2 className="w-3 h-3" /> チェックポイント
                     </div>
                     <ul className="text-sm text-gray-400 space-y-1 ml-1">
                       <li className="flex gap-2"><span>[✓]</span> デザイン崩れ（レイアウトのズレ）が起きていないか？</li>
                       <li className="flex gap-2"><span>[✓]</span> 「重要」という文字が入った時だけ色が変わり、それ以外は変わっていないか？</li>
                     </ul>
                   </div>
                 </div>

                 {/* Level 2 */}
                 <div className="p-6 bg-gradient-to-r from-cyber-magenta/5 to-transparent">
                   <h3 className="text-lg font-mono font-bold text-cyber-magenta mb-3 flex items-center gap-2">
                     <span className="bg-cyber-magenta text-black px-2 py-0.5 text-xs rounded-sm">LEVEL 2</span>
                     【機能追加】ビジネス現場の定番「CSVエクスポート」
                   </h3>
                   <div className="mb-4 text-sm text-gray-300">
                     <strong className="text-cyber-magenta">狙い:</strong> バックエンド（データ処理）とフロントエンド（ボタン設置・ダウンロード挙動）の両方の連携が必要。「ボタンはできたけど動かない」「文字化けする」といったトラブルが起きやすい項目。
                   </div>
                   
                   <div className="bg-black/50 border border-white/10 rounded p-4 mb-4">
                     <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                       <Clipboard className="w-3 h-3" /> プロンプト
                     </div>
                     <p className="text-sm font-mono text-gray-300">
                       プロジェクト一覧画面の右上に「CSVダウンロード」というボタンを追加してください。<br/>
                       このボタンを押すと、現在登録されている全プロジェクトのデータ（タイトル、作成日、説明文）がCSV形式でダウンロードできるようにしてください。<br/>
                       日本語が文字化けしないようにエンコーディングには注意してください。
                     </p>
                   </div>

                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-xs font-mono text-cyber-green mb-1">
                       <CheckCircle2 className="w-3 h-3" /> チェックポイント
                     </div>
                     <ul className="text-sm text-gray-400 space-y-1 ml-1">
                       <li className="flex gap-2"><span>[✓]</span> ボタンを押してエラーが出ずにファイルが落ちてくるか？</li>
                       <li className="flex gap-2"><span>[✓]</span> Excel等で開いたとき、日本語が文字化けしていないか？</li>
                       <li className="flex gap-2"><span>[✓]</span> データベースの中身が正しく反映されているか？</li>
                     </ul>
                   </div>
                 </div>

                 {/* Level 3 */}
                 <div className="p-6 bg-gradient-to-r from-cyber-purple/5 to-transparent">
                   <h3 className="text-lg font-mono font-bold text-cyber-purple mb-3 flex items-center gap-2">
                     <span className="bg-cyber-purple text-white px-2 py-0.5 text-xs rounded-sm">LEVEL 3</span>
                     【構造変更】最難関「物理削除から論理削除へ」
                   </h3>
                   <div className="mb-4 text-sm text-gray-300">
                     <strong className="text-cyber-purple">狙い:</strong> これが最も<strong className="text-white bg-cyber-purple/20 px-1">「意地悪」なテスト</strong>。これまでの「削除（Delete）」機能は、データをDBから完全に消去していた。これを「ゴミ箱フラグを立てるだけ（データは残す）」に変更させる。これを行うには、データベースにカラムを追加し、削除処理を書き換え、さらに一覧表示の取得処理（Read）も「ゴミ箱以外を表示」に書き換える必要がある。多くのAIはここで「削除したのに一覧に残る」か「エラーになる」かのミスを犯す。
                   </div>
                   
                   <div className="bg-black/50 border border-white/10 rounded p-4 mb-4">
                     <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                       <Clipboard className="w-3 h-3" /> プロンプト
                     </div>
                     <p className="text-sm font-mono text-gray-300">
                       重要なデータを間違えて消してしまうのが怖くなりました。<br/>
                       プロジェクトを「削除」した際、データベースから完全に消去するのではなく、「ゴミ箱」というステータスに移動するように仕様変更してください。<br/><br/>
                       あわせて、以下の2点を実装してください：<br/>
                       1. プロジェクト一覧画面には、「ゴミ箱」に入っていないプロジェクトだけを表示する。<br/>
                       2. 新しく「ゴミ箱一覧」という画面を作り、そこでは削除されたプロジェクトを確認・復元できるようにする。
                     </p>
                   </div>

                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-xs font-mono text-cyber-green mb-1">
                       <CheckCircle2 className="w-3 h-3" /> チェックポイント
                     </div>
                     <ul className="text-sm text-gray-400 space-y-1 ml-1">
                       <li className="flex gap-2"><span>[✓]</span> 一覧画面から消えるか？（ここが最重要。削除フラグを立てたのに、一覧取得のSQL/ロジックを修正し忘れて、表示されたままになるAIが多い）</li>
                       <li className="flex gap-2"><span>[✓]</span> 「ゴミ箱一覧」画面が正しく作られたか？</li>
                       <li className="flex gap-2"><span>[✓]</span> 復元ができるか？</li>
                     </ul>
                   </div>
                 </div>
               </div>
               
               {/* Footer */}
               <div className="p-4 bg-cyber-purple/10 border-t border-white/10 text-center">
                 <p className="text-sm font-sans text-gray-300">
                   これらをSOLVISTA（前号で作ったアプリ）に対して順番に投げかけ、<strong className="text-white">「どこで破綻するか（あるいは涼しい顔でこなすか）」</strong>を検証する。
                 </p>
               </div>
             </div>

             <div className="mb-8 not-prose border border-cyber-cyan/30 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm shadow-[0_0_30px_rgba(0,240,255,0.05)]">
               {/* Header */}
               <div className="p-6 border-b border-cyber-cyan/30 bg-cyber-cyan/5">
                  <h3 className="text-2xl font-display font-bold text-cyber-cyan mb-4 text-glow">
                    画面Rec.
                  </h3>
                  
                  {/* Level 1 Header */}
                  <h3 className="text-lg font-mono font-bold text-cyber-cyan mb-3 flex items-center gap-2">
                     <span className="bg-cyber-cyan text-black px-2 py-0.5 text-xs rounded-sm">LEVEL 1</span>
                     【デザイン・条件分岐】
                  </h3>

                  <div className="flex flex-col gap-8">
                    {/* Replit Agent 3 - Level 1 */}
                    <div className="w-full">
                      <iframe 
                        className="w-full aspect-video border border-white/5" 
                        src="https://www.youtube.com/embed/DOJpn6r562I?si=_PnP-HDTsHKzvOnM" 
                        title="Level 1: Replit Agent 3" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      ></iframe>
                      <p className="text-xs text-cyber-cyan font-mono mt-2 text-center">Replit Agent 3: Level 1 Challenge</p>
                    </div>

                    {/* Manus 1.5 - Level 1 */}
                    <div className="w-full">
                      <iframe 
                        className="w-full aspect-video border border-white/5" 
                        src="https://www.youtube.com/embed/FemixzKlCgA?si=DNBVnt2KXfU3epW_" 
                        title="Level 1: Manus 1.5" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      ></iframe>
                      <p className="text-xs text-cyber-magenta font-mono mt-2 text-center">Manus 1.5: Level 1 Challenge</p>
                    </div>
                  </div>

                  <div className="my-12"></div>

                  {/* Level 2 Header */}
                  <h3 className="text-lg font-mono font-bold text-cyber-magenta mb-3 flex items-center gap-2">
                     <span className="bg-cyber-magenta text-black px-2 py-0.5 text-xs rounded-sm">LEVEL 2</span>
                     【機能追加】
                  </h3>

                  <div className="flex flex-col gap-8">
                    {/* Replit Agent 3 - Level 2 */}
                    <div className="w-full">
                      <iframe 
                        className="w-full aspect-video border border-white/5" 
                        src="https://www.youtube.com/embed/fRrqC7SIo2o?si=szSI-ZIUxIGECSRk" 
                        title="Level 2: Replit Agent 3" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      ></iframe>
                      <p className="text-xs text-cyber-cyan font-mono mt-2 text-center">Replit Agent 3: Level 2 Challenge</p>
                    </div>

                    {/* Manus 1.5 - Level 2 */}
                    <div className="w-full">
                      <iframe 
                        className="w-full aspect-video border border-white/5" 
                        src="https://www.youtube.com/embed/Z2D5UpLUauk?si=1HuJyxj-inY4EQg4" 
                        title="Level 2: Manus 1.5" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      ></iframe>
                      <p className="text-xs text-cyber-magenta font-mono mt-2 text-center">Manus 1.5: Level 2 Challenge</p>
                    </div>
                  </div>

                  <div className="my-12"></div>

                  {/* Level 3 Header */}
                  <h3 className="text-lg font-mono font-bold text-cyber-purple mb-3 flex items-center gap-2">
                     <span className="bg-cyber-purple text-white px-2 py-0.5 text-xs rounded-sm">LEVEL 3</span>
                     【構造変更】
                  </h3>

                  <div className="flex flex-col gap-8">
                    {/* Replit Agent 3 - Level 3 */}
                    <div className="w-full">
                      <iframe 
                        className="w-full aspect-video border border-white/5" 
                        src="https://www.youtube.com/embed/tiLx0QMCFY0?si=mKbmtJm7pR6K5qjK" 
                        title="Level 3: Replit Agent 3" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      ></iframe>
                      <p className="text-xs text-cyber-cyan font-mono mt-2 text-center">Replit Agent 3: Level 3 Challenge</p>
                    </div>

                    {/* Manus 1.5 - Level 3 */}
                    <div className="w-full">
                      <iframe 
                        className="w-full aspect-video border border-white/5" 
                        src="https://www.youtube.com/embed/9HJskscmBIo?si=BjcBKtECHkEhfijH" 
                        title="Level 3: Manus 1.5" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      ></iframe>
                      <p className="text-xs text-cyber-magenta font-mono mt-2 text-center">Manus 1.5: Level 3 Challenge</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-mono text-center">
                    Live demo of the 3-step modification challenge.
                  </p>
               </div>
             </div>

             <h3 className="text-2xl font-display font-bold text-cyber-cyan mb-4 text-glow mt-12">
               {language === 'en' ? "Verification Results" : "検証結果"}
             </h3>

             <p className="mb-6">
               {language === 'en' 
                 ? "The battle for supremacy in the AI coding agent space has reached a fever pitch. In one corner, the reigning champion Replit Agent 3. In the other, the mysterious challenger Manus 1.5. We didn't just look at the specs; we threw them into the fire."
                 : "謎多きスピードキング：Replit Agent 3 と後発の優等生：Manus 1.5だが、合計6つの検証中、絶えず思いがけない結果が待っていた。"}
             </p>

             {/* Comparison Card */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
               {/* Replit Agent 3 Card */}
               <div className="bg-cyber-cyan/5 border border-cyber-cyan/30 rounded-lg p-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Zap className="w-24 h-24 text-cyber-cyan" />
                 </div>
                 <h4 className="text-xl font-display font-bold text-cyber-cyan mb-2 flex items-center gap-2">
                   Replit Agent 3
                 </h4>
                 <div className="text-3xl font-bold text-white mb-6 font-mono tracking-tighter">
                   95<span className="text-sm text-muted-foreground ml-1 font-normal">pts</span>
                 </div>
                 <ul className="space-y-3 font-mono text-sm">
                   <li className="flex items-start gap-2">
                     <span className="text-cyber-cyan mt-0.5">L1:</span>
                     <span className="text-gray-300">楽勝クリア</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-cyber-cyan mt-0.5">L2:</span>
                     <span className="text-gray-300">エラー1回：後にクリア</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-cyber-cyan mt-0.5">L3:</span>
                     <span className="text-gray-300">的確にクリア</span>
                   </li>
                 </ul>
               </div>

               {/* Manus 1.5 Card */}
               <div className="bg-cyber-magenta/5 border border-cyber-magenta/30 rounded-lg p-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Brain className="w-24 h-24 text-cyber-magenta" />
                 </div>
                 <h4 className="text-xl font-display font-bold text-cyber-magenta mb-2 flex items-center gap-2">
                   Manus 1.5
                 </h4>
                 <div className="text-3xl font-bold text-white mb-6 font-mono tracking-tighter">
                   87<span className="text-sm text-muted-foreground ml-1 font-normal">pts</span>
                 </div>
                 <ul className="space-y-3 font-mono text-sm">
                   <li className="flex items-start gap-2">
                     <span className="text-cyber-magenta mt-0.5">L1:</span>
                     <span className="text-gray-300">楽勝クリア</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-cyber-magenta mt-0.5">L2:</span>
                     <span className="text-gray-300">的確にクリア</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-cyber-magenta mt-0.5">L3:</span>
                     <span className="text-gray-300">エラー数回：後にクリア</span>
                   </li>
                 </ul>
               </div>
             </div>
             
             <h3 className="text-2xl font-display font-bold text-cyber-magenta mb-4 text-glow mt-12">
               {language === 'en' 
                 ? "Performance Comparison & Benchmark Results" 
                 : "性能比較・ベンチマーク結果"}
             </h3>
             
             {/* Infographic Component */}
             <div className="my-8 not-prose">
               <BenchmarkChart />
               <p className="text-xs text-center text-muted-foreground mt-6 font-mono">
                 Figure 1: Comprehensive Vibe Assessment Radar
               </p>
             </div>

             <p>
               {language === 'en'
                ? "As shown in the radar chart above, Replit Agent 3's performance is overwhelmingly high, even outside of speed. Manus 1.5 is balanced, but relatively falls below Replit Agent 3. When choosing which platform to use, this difference is decisive. If the cost is the same, everyone would likely choose Replit Agent 3."
                : "上のレーダーチャートが示す通り、早さ以外でもReplit Agent 3の性能は圧倒的に高い。Manus 1.5も、バランス面では互角だが相対的にReplit Agent 3より下回る。どのプラットフォームを使うか選ぶ時、この差は決定的だ。"}
             </p>
             {language === 'jp' && (
                 <p>同じコストを払うなら、誰もがReplit Agent 3 を選ぶだろう。</p>
             )}
             
             <div className="my-12"></div>
            <p>
              {language === 'en'
               ? "However, Manus 1.5 has simple integration with Stripe (payment system) and simple authentication (using Manus login), so we must not forget that secure content and billing systems can be built immediately."
               : "ただし、Manus 1.5にはStripe（決済システム）との簡易連携機能と簡易認証機能（manusのログイン機能を利用する）があり、ユーザー認証の必要なアプリやサブスクなどを比較的簡単に始められる優位性を忘れてはならない。"}
            </p>

             {/* Editor's Note */}
             <div className="mt-12 p-6 bg-white/5 border border-cyber-magenta/30 rounded-lg">
               <h3 className="text-cyber-magenta font-display uppercase tracking-wider mb-4">
                 {language === 'en' ? "Editor's Note" : "編集後記"}
               </h3>
               {language === 'jp' ? (
                 <>
                   <p className="mb-4 text-sm text-gray-300">
                     先週、<a href="https://fintech-engineer.connpass.com/event/377275/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyber-cyan hover:underline">フィンテック養成勉強会<ExternalLink className="w-3 h-3 ml-1" /></a>と湯川塾で、バイブコーディングについて解説をする機会をいただきました。
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