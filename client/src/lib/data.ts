import heroImage from "@assets/VCX-eye02_1765812596568.png";
import releaseTensionImage from "@assets/generated_images/cyberpunk_coding_tension_release_99_percent_complete.png";
import specChangeImage from "@assets/generated_images/abstract_representation_of_specification_changes_and_understanding.png";
import invadersImage from "@assets/generated_images/retro_space_invaders_game_screen_cyberpunk_style.png";
import finHabitImage from "@assets/generated_images/financial_habit_tracking_app_interface_cyberpunk_style.png";
import sunoImage from "@assets/generated_images/ai_music_composition_abstract_visualization.png";

export interface Article {
  id: string;
  type?: 'benchmark' | 'standard';
  title: {
    en: string;
    jp: string;
  };
  excerpt: {
    en: string;
    jp: string;
  };
  date: string;
  category: string;
  image: string;
  content: {
    en: string;
    jp: string;
  };
}

export const articles: Article[] = [
  {
    id: "vibe-coding-99-percent-reality",
    type: 'standard',
    title: {
      en: "The Real Battle Starts at 99%: The Truth Behind Vibe Coding",
      jp: "99％完成してからが本当の勝負だった ― リリース直前、仕様変更だらけの現場で見えたバイブコーディングの正体 ―"
    },
    excerpt: {
      en: "Release tension, specification changes, and the true nature of Vibe Coding revealed in the final 1% of development.",
      jp: "画面は動く。データも表示されてる。完成まであと一歩という状態。そこから始まった仕様変更の嵐で見えた、バイブコーディングの本質とは。"
    },
    date: "2025-12-24",
    category: "EXPERIMENTAL LOG",
    image: releaseTensionImage,
    content: {
      en: "<p>English content pending translation...</p>",
      jp: `
        <div class="space-y-12">
          <section>
            <h2 class="text-2xl font-bold text-cyber-cyan mb-6">まず最初に</h2>
            <p class="mb-6 leading-relaxed">今週はいろいろありました。</p>
            <p class="mb-6 leading-relaxed">今取り組んでいるバイブコーディング開発案件が、12月26日リリースに向けて大詰めを迎えています。これ、結構複雑なことをしていますが、今まで1行もコードを書いていません。<br>それでも99％完成まで持っていくことができました。</p>
            <p class="mb-6 leading-relaxed">画面は動く。<br>データも出る。<br>致命的なバグもない。</p>
            <p class="mb-6 leading-relaxed">それでも、<br>「このまま出していいのか？」<br>という違和感が、最後まで消えませんでした。</p>
            
            <figure class="my-12">
              <img src="${releaseTensionImage}" alt="Release Tension" class="w-full rounded-lg border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
              <figcaption class="text-center text-xs text-muted-foreground mt-2 font-mono">99% vs 100%の壁</figcaption>
            </figure>

            <p class="mb-6 leading-relaxed">そこから始まったのが、<strong>仕様変更に次ぐ仕様変更</strong>です。</p>
            <p class="mb-6 leading-relaxed">細かい修正。<br>判断のやり直し。<br>一度OKを出した仕様を、もう一度ひっくり返す決断。</p>
            <p class="mb-6 leading-relaxed">普通の開発なら、心が折れてもおかしくない局面です。</p>
            <p class="mb-6 leading-relaxed">でも、この1週間で、はっきり分かったことがあります。</p>
            <p class="mb-6 leading-relaxed"><strong class="text-cyber-magenta text-xl block my-4 border-l-4 border-cyber-magenta pl-4">バイブコーディングは、99％完成してからが本番だ</strong><br>ということです。プロトタイプは簡単にできるけれど、完成までの残り1%の壁は高い。</p>
            <p class="mb-6 leading-relaxed">今週は、その理由と、<br>その中で得た<strong>そのまま使える学び</strong>をお伝えします。</p>
          </section>

          <hr class="border-white/10" />

          <section>
            <h2 class="text-2xl font-bold text-cyber-cyan mb-6">仕様変更は、迷いではなく「理解が深まった証拠」</h2>
            <p class="mb-6 leading-relaxed">仕様変更が多いと、<br>「最初の設計が甘かったんじゃないか」<br>と言われがちです。</p>
            <p class="mb-6 leading-relaxed">しかし、実際の現場では違います。</p>
            <p class="mb-6 leading-relaxed">触ってみて、初めて分かることがある。<br>動かしてみて、初めて見えるズレがある。<br>ユーザー目線に立った瞬間、違和感が浮き彫りになる。</p>
            <p class="mb-6 leading-relaxed">つまり仕様変更とは、<br><strong>失敗ではなく、理解が一段深くなったサイン</strong>です。</p>
            <p class="mb-6 leading-relaxed">バイブコーディングは、<br>この「気づいた瞬間」を、そのまま次の実装に持ち込める。</p>
            <p class="mb-6 leading-relaxed">ここが、従来の開発との決定的な違いです。</p>
            
            <figure class="my-12">
              <img src="${specChangeImage}" alt="Specification Changes" class="w-full rounded-lg border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.05)]" />
            </figure>
          </section>

          <hr class="border-white/10" />

          <section>
            <h2 class="text-2xl font-bold text-cyber-cyan mb-6">よく使うプラットフォームは、推しのチームに似ている</h2>
            <p class="mb-6 leading-relaxed">よく使う開発プラットフォームは、<br>応援している推しのチームによく似ています。</p>
            <p class="mb-6 leading-relaxed">資金調達のニュース。<br>新機能のリリース。<br>ロードマップの更新。</p>
            <p class="mb-6 leading-relaxed">自然と気になるし、追いかけたくなる。</p>
            <p class="mb-6 leading-relaxed">なぜならそれが、<strong>自分の次の一手を左右するから</strong>です。</p>
            <p class="mb-6 leading-relaxed">「今、何ができるようになったのか」<br>「どこまで任せられるようになったのか」</p>
            <p class="mb-6 leading-relaxed">これを知っているかどうかで、<br>プロンプトの書き方も、設計の発想も、大きく変わります。</p>
            <p class="mb-6 leading-relaxed">私が今1番よく使うプラットフォームは「<a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-cyber-cyan hover:underline">Lovable<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>」で、2番目は「<a href="https://replit.com/~" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-cyber-cyan hover:underline">replit Agent3<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>」です。Lovableは、2025年の9月から使い始めたプラットフォームで、それまではノーコードツール「bubble」を使っていました。2025年12月23日現在、一番使用頻度が多くて、一番性能が良く、信頼しているのは「<a href="https://replit.com/~" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-cyber-cyan hover:underline">replit Agent3<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>」です。</p>
          </section>

          <hr class="border-white/10" />

          <section>
            <h2 class="text-2xl font-bold text-cyber-cyan mb-6">バイブコーディングでできること<br><span class="text-sm font-normal text-muted-foreground">― 抽象論ではなく、実例で ―</span></h2>
            <p class="mb-6 leading-relaxed">「バイブコーディングで何ができるのか、正直よく分からない」<br>そう感じている人も多いと思います。</p>
            <p class="mb-6 leading-relaxed">なので、<strong>実際に作ったものを、そのまま出します。<br>まずは、簡単なものから。</strong></p>

            <div class="grid gap-12 mt-12">
              <div class="bg-black/30 border border-white/10 rounded-lg p-6">
                <h3 class="text-xl font-bold text-cyber-magenta mb-4">ゲーム①：インベーダーゲーム "Retro Invaders"</h3>
                <img src="${invadersImage}" alt="Retro Invaders" class="w-full rounded mb-4" />
                <p class="mb-4 text-sm">昔懐かしいインベーダーゲームを、ブラウザで遊べる形にしました。</p>
                <p class="mb-4 text-sm">敵の動き。弾のスピード。当たり判定。どれも「一度決めて終わり」ではありません。遊んでみて、違和感があれば、すぐに修正する。仕様変更を前提にしているからこそ、完成度が上がっていきます。</p>
                <a href="https://retro-invaders-1--kn78.replit.app" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-cyber-cyan hover:text-white transition-colors">
                  <span class="mr-2">PLAY GAME</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>

              <div class="bg-black/30 border border-white/10 rounded-lg p-6">
                <h3 class="text-xl font-bold text-cyber-magenta mb-4">ゲーム②：ギャラクシアン "Galaxy War"</h3>
                <p class="mb-4 text-sm">こちらはギャラクシアン風のシューティングゲームです。</p>
                <p class="mb-4 text-sm">ポイントは、「どこまで再現し、どこから今風に崩すか」。</p>
                <ol class="list-decimal list-inside text-sm space-y-2 mb-4 text-gray-300">
                  <li>まず動かす</li>
                  <li>次に楽しくする</li>
                  <li>最後に気持ちよくする</li>
                </ol>
                <a href="https://galaxy-war--kn78.replit.app" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-cyber-cyan hover:text-white transition-colors">
                  <span class="mr-2">PLAY GAME</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>

              <div class="bg-black/30 border border-white/10 rounded-lg p-6">
                <h3 class="text-xl font-bold text-cyber-magenta mb-4">教育アプリ：FinHabit</h3>
                <img src="${finHabitImage}" alt="FinHabit" class="w-full rounded mb-4" />
                <p class="mb-4 text-sm">投資初心者向けに、「学ぶ」と「続ける」をセットにした教育アプリです。</p>
                <p class="mb-4 text-sm">難しい言葉を減らす。行動につながる導線を作る。この2点だけでも、仕様は何度も動きました。ユーザー視点に立てば立つほど、仕様は必ず変わる。それを前提にできるのが、バイブコーディングです。</p>
                <a href="https://fin-habit-learn--kn78.replit.app" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-cyber-cyan hover:text-white transition-colors">
                  <span class="mr-2">OPEN APP</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </div>
          </section>

          <hr class="border-white/10" />

          <section>
            <h2 class="text-2xl font-bold text-cyber-cyan mb-6">音楽も作れる。しかも、何度でもやり直せる<br><span class="text-sm font-normal text-muted-foreground">― SUNOで作った楽曲たち ―</span></h2>
            
            <figure class="my-8">
              <img src="${sunoImage}" alt="Suno AI Music" class="w-full rounded-lg border border-white/10 shadow-[0_0_30px_rgba(138,43,226,0.05)]" />
            </figure>

            <div class="space-y-8">
              <div>
                <h4 class="text-lg font-bold text-cyber-purple mb-2">チャレンジ系：こどもオペラ「カレーを作ろう 第一楽章（完成版）」</h4>
                <p class="text-sm mb-2">物語性のある楽曲に挑戦しました。構成を変え、雰囲気を変え、バージョンを重ねています。</p>
                <a href="https://suno.com/s/UcKdbP7vFWLpmCsQ" target="_blank" rel="noopener noreferrer" class="text-xs text-cyber-cyan hover:underline">LISTEN ON SUNO &rarr;</a>
              </div>

              <div>
                <h4 class="text-lg font-bold text-cyber-purple mb-2">マジメ系：Prismatic Diver / KANAZAWA NIGHT</h4>
                <p class="text-sm mb-2">情景をどう音で表現するか。納得いかなければ、何度でも作り直せる。この「やり直しの自由さ」は、創作のハードルを一気に下げます。</p>
                <div class="flex gap-4">
                  <a href="https://suno.com/s/Zo377suuvA6zFbYr" target="_blank" rel="noopener noreferrer" class="text-xs text-cyber-cyan hover:underline">Prismatic Diver &rarr;</a>
                  <a href="https://suno.com/s/hfdMldmDKdEyMH0b" target="_blank" rel="noopener noreferrer" class="text-xs text-cyber-cyan hover:underline">KANAZAWA NIGHT &rarr;</a>
                </div>
              </div>

              <div>
                <h4 class="text-lg font-bold text-cyber-purple mb-2">ふざけた系：イーロン・マスクのララバイ</h4>
                <p class="text-sm mb-2">真面目なものだけでなく、こうした振り切った実験もできる。遊びと本気が、同じ地平にある。それもバイブコーディングの特徴です。</p>
                <a href="https://suno.com/s/0Jpw2jWPTa0tsp2w" target="_blank" rel="noopener noreferrer" class="text-xs text-cyber-cyan hover:underline">LISTEN ON SUNO &rarr;</a>
              </div>
            </div>
          </section>

          <hr class="border-white/10" />

          <section>
            <h2 class="text-2xl font-bold text-cyber-cyan mb-6">今回の核心：仕様変更プロンプトの考え方</h2>
            <p class="mb-6 leading-relaxed">今回の仕様変更の嵐で、特に効果があったプロンプトを共有します。</p>
            <div class="bg-black/50 border-l-4 border-cyber-green p-6 my-8">
              <p class="text-xl text-white font-mono font-bold">「〜なのは、なぜですか？」</p>
            </div>
            <p class="mb-6 leading-relaxed">これまでは、「〜を〜にしてください」という要求型のプロンプトを多用していました。<br>結果は出ます。しかし、コードがブラックボックス化しやすい。</p>
            <p class="mb-6 leading-relaxed">そこで今回は、<strong>あえて原因を言語化させる</strong>方向に振りました。</p>
            <ul class="list-disc list-inside space-y-2 mb-6 ml-4 text-gray-300">
              <li>なぜその挙動になるのか</li>
              <li>どこに原因があるのか</li>
            </ul>
            <p class="mb-6 leading-relaxed">まずはそこに集中させます。</p>
            <p class="mb-6 leading-relaxed">さらに、</p>
            <div class="bg-black/50 border-l-4 border-cyber-green p-6 my-4">
              <p class="text-xl text-white font-mono font-bold">「改善前と改善後のコードを教えてください」</p>
            </div>
            <div class="bg-black/50 border-l-4 border-cyber-green p-6 my-4">
              <p class="text-xl text-white font-mono font-bold">「どのファイルの、どの部分を修正すべきか教えてください」</p>
            </div>
            <p class="mb-6 leading-relaxed">と明示的に聞くことで、後から自分が手を入れるための「地図」を残します。</p>
            <p class="mb-6 leading-relaxed">これは、バイブコーディングを<strong>使い捨てにしないための重要なコツ</strong>です。</p>
          </section>

          <hr class="border-white/10" />

          <section>
            <h2 class="text-2xl font-bold text-cyber-cyan mb-6">編集後記</h2>
            <p class="mb-6 leading-relaxed">今週は、新しいコーナーを増設しました。</p>
            <p class="mb-6 leading-relaxed">理由はシンプルです。<br><strong>アイデアを、思いついた瞬間に形にしたかった。</strong></p>
            <p class="mb-6 leading-relaxed">続けるかどうかは、視聴者の反応と購読状況を見て決めます。</p>
            <p class="mb-6 leading-relaxed">ただ、一つだけはっきり言えることがあります。</p>
            <p class="mb-6 leading-relaxed">仕事のやり方は、もう確実に変わり始めています。</p>
            <p class="mb-6 leading-relaxed">その変化のど真ん中にあるのが、<br><strong class="text-cyber-cyan text-lg">バイブコーディング</strong>です。</p>
          </section>
        </div>
      `
    }
  },
  {
    id: "replit-vs-manus",
    type: 'benchmark',
    title: {
      en: "Vibe Coding Benchmark: Replit Agent 3 vs Manus1.5 Showdown!",
      jp: "バイブコーディング修正しやすさベンチマーク：Replit Agent 3 X Manus1.5 頂上対決！"
    },
    excerpt: {
      en: "To expose the true responsiveness to correction instructions that everyone is curious about, we executed 3 levels of 'tricky modification prompts' to measure the 'fidelity of correction'.",
      jp: "誰もが気になる「修正指示」の対応力を丸裸にするために、3段階の「意地悪な変更指示プロンプト」を実行させて「修正の忠実度」を計測してみた。"
    },
    date: "2025-12-17",
    category: "EXPERIMENTAL LOG",
    image: heroImage,
    content: {
      en: "Content placeholder...", 
      jp: "Content placeholder..."
    }
  }
];

export const schedule = [5, 15, 25]; // Monthly dates