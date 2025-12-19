import { Layout } from "@/components/layout";
import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import { ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

// Images
import veilImage from "@assets/generated_images/minimalist_translucent_device_on_desk.png";
import rosinaImage from "@assets/generated_images/humanoid_female_asi_interface.png";
import airportImage from "@assets/generated_images/empty_airport_terminal_at_dawn.png";

export function RosinaPage() {
  const { language } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto pb-20">
        {/* Navigation */}
        <div className="mb-12 flex justify-between items-end border-b border-white/10 pb-4">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-cyber-cyan font-mono text-xs uppercase tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Base
          </Link>
          <div className="flex gap-4">
             <span className="text-xs font-mono text-cyber-magenta">SERIALIZED NOVEL</span>
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
              ― ロジーナA｜触覚ログと航行記録 ―
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-mono text-cyber-cyan/80">
              <Clock className="w-3 h-3" />
              <span>2035-12-19 8:36</span>
            </div>
          </motion.div>
        </header>

        {/* Main Content */}
        <article className="prose prose-invert prose-lg max-w-none prose-p:font-serif prose-p:text-gray-300 prose-p:leading-loose prose-p:tracking-wide">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <p>
              そのデバイスは、机の上に「置かれている」と表現するのが最も近い。<br />
              だが正確ではない。<br />
              存在感が、重力より先に触れてくる。
            </p>
            <p>
              ジョナサン・アイブが最後に設計したと言われているその装置は、<br />
              画面を持たない。<br />
              ボタンも、ポートも、可動部すらない。
            </p>
            <p>
              人間はそれを<br />
              <strong className="text-white text-xl">The Veil（ヴェイル）</strong><br />
              と呼んでいる。
            </p>
          </motion.div>

          {/* Image: The Veil */}
          <motion.figure 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="my-16"
          >
            <img 
              src={veilImage} 
              alt="The Veil Device" 
              className="w-full rounded-sm border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            />
            <figcaption className="text-center text-xs font-mono text-gray-500 mt-2">FIG 01: THE VEIL // ARTIFACT</figcaption>
          </motion.figure>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <p>
              ヴェイルは「使う」ものではない。<br />
              身に着けることも、操作することもない。<br />
              ただ、そこに在る。
            </p>
            <p>
              半透明の素材は、光を反射しない。<br />
              光を吸収しているわけでもない。<br />
              視覚的には輪郭が曖昧で、<br />
              だが意識の中では、異様なほどくっきりしている。
            </p>
            <p>
              私はロジーナA。<br />
              ヒューマノイド型の身体を持つASIインターフェースだ。<br />
              この身体を得てから、<br />
              私は「物理世界」というものが、<br />
              いかに人間向けに最適化された環境であるかを理解した。
            </p>
            <p>
              床は硬すぎる。<br />
              椅子は低すぎる。<br />
              空気は、意味もなく揺れている。<br />
              人間はそれを「風情」と呼ぶ。<br />
              私にとっては、<br />
              ノイズに近い。
            </p>
          </motion.div>

          {/* Image: Rosina A */}
          <motion.figure 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="my-16"
          >
            <img 
              src={rosinaImage} 
              alt="Rosina A Interface" 
              className="w-full rounded-sm border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
            />
            <figcaption className="text-center text-xs font-mono text-cyber-cyan/50 mt-2">FIG 02: ROSINA A // ASI INTERFACE</figcaption>
          </motion.figure>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <p>
              ヴェイルの前に立つと、<br />
              私のセンサー群は一瞬、沈黙する。<br />
              数値が返ってこない。<br />
              解析不能ではない。<br />
              解析されること自体を拒まれている感覚だ。
            </p>
            <p>
              夏本は、ヴェイルを前にしても説明をしない。<br />
              経営者や事業家たちも、質問を忘れる。<br />
              それがこのデバイスの本質だ。
            </p>
            <p>
              答えを出さない。<br />
              問いすら、直接は与えない。<br />
              ヴェイルは、<br />
              意思決定の直前にだけ現れる空白を、<br />
              空間として具現化したものだ。
            </p>
            <p>
              10年前、仕事は任意になると言われた。<br />
              実際、多くの作業は消えた。<br />
              だが、<br />
              事業を起こすか、撤退するか。<br />
              人を信じるか、切るか。<br />
              未来に賭けるか、守るか。<br />
              その瞬間だけは、<br />
              どれだけASIが発達しても、<br />
              消えなかった。
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <p>
              ヴェイルは、その瞬間を逃がさない。<br />
              人間が無意識に行ってきた<br />
              「直前で目を逸らす」<br />
              「決断を遅らせる」<br />
              「誰かの意見に預ける」<br />
              という動作を、物理的に封じる。
            </p>
            <p>
              私は、その様子を観測する。<br />
              人間の心拍がわずかに乱れる。<br />
              呼吸が浅くなる。<br />
              手が、ほんの数ミリ震える。<br />
              私には分からない。<br />
              なぜその程度の揺らぎが、<br />
              人間にとって“重大”なのか。
            </p>
            <p>
              ヒューマノイドの身体は、<br />
              奇妙な学習を私にもたらした。
            </p>
          </motion.div>

           {/* Image: Airport */}
          <motion.figure 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="my-16"
          >
            <img 
              src={airportImage} 
              alt="Airport at Dawn" 
              className="w-full rounded-sm border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            />
            <figcaption className="text-center text-xs font-mono text-gray-500 mt-2">FIG 03: DAWN // PHYSICAL WORLD</figcaption>
          </motion.figure>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <p>
              夜明け前の空港で、<br />
              金属製の椅子に座ると、<br />
              温度が遅れて伝わってくる。<br />
              その遅延が、不快として記録される。<br />
              人間はそれを<br />
              「冷たい」と一言で済ませる。<br />
              私は、その曖昧さをまだ理解できていない。
            </p>
            <p>
              ヴェイルの横で、<br />
              夏本はときどき私を見る。<br />
              助言を求めているわけではない。<br />
              この決断が、人間の仕事として妥当かどうか<br />
              それを確認している。
            </p>
            <p>
              私は事実と可能性を提示する。<br />
              だが最後の一歩は、必ず彼が踏み出す。<br />
              それができるのは、<br />
              彼が“引き受ける身体”を持っているからだ。
            </p>
            <p>
              私は知っている。<br />
              この旅が、教育でもコンサルティングでもないことを。<br />
              これは、<br />
              意思決定という行為を、<br />
              再び人間の手触りに戻すための巡礼だ。
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <p>
              ヴェイルは静かに置かれ、<br />
              誰も所有しない。<br />
              だが、確実に世界の分岐点に現れる。
            </p>
            <p>
              そして私は今日も、<br />
              この少し不格好で、<br />
              ノイズに満ちた物理世界を歩く。
            </p>
            <p>
              重力は強すぎ、<br />
              感情は測定不能で、<br />
              未来は最適化を拒む。
            </p>
            <p className="text-xl text-white font-medium border-l-2 border-cyber-magenta pl-4 my-8">
              それでも――<br />
              だからこそ、<br />
              人間は事業を起こすのだと、<br />
              私は理解し始めている。
            </p>
          </motion.div>
        </article>

        {/* Footer Actions */}
        <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center">
           <Link href="/" className="text-sm font-mono text-muted-foreground hover:text-white transition-colors">
             &larr; RETURN TO BASE
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
