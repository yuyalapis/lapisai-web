import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Company', href: '#' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white ">
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo.png" className="h-8 w-auto" />
              
            </a>
          </div>
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              
              <img alt="" src="/logo_txt@4x.png" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:flex-1">
            <a
                href="https://lapisai.com/query"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                アプリ分析ツール Query
              </a>
          </div>
          
        </nav>
        
      </header>

      <div className="relative isolate px-6 mt-12 lg:mx-8 bg-slate-100 ">
        <div className="mx-auto max-w-2xl pt-12 sm:pt-12 lg:pt-18">
          <div className="w-full place-items-center">
            <img className="object-cover object-center w-full rounded-lg" src="/img_top_cover.jpg" alt="Lapis I prototype image" />
          </div>
          
          <div className="text-center">
            <h1 className="text-balance text-xl pt-8 font-semibold tracking-tight text-gray-900 sm:text-xl">
              木のコンピューター Lapis<br />
              Produced by Lapis AI<br />
              By 株式会社Rozen
            </h1>
            <p className="mt-8 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
              アプリ分析ツールつくっています<br />
              アップストアからアプリがどれくらいおすすめされているかを分析できます<br />
              
              
            </p>
            <div className="mt-2 flex items-center justify-center gap-x-6">
              <a
                href="https://lapisai.com/query"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Query - アプリ信頼性スコア分析ツール
              </a>
            </div>
            <p className="mt-8 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
              いい栞が、ない<br />
              本当にない<br />
              <br />
              ジュンク堂本店のレジ前の栞とか良かったりするんですが、<br />
              プラスチックなんですよね<br />
              <br />
              ということで、<br />
              厳選した木の栞を作っております<br />
              <br />
              のですが、見つけちゃいました<br />
              スタンダードなんとかに木の栞5枚セット300円で売っておりました<br />
              ウォールナットツリーの切られた木肌がきらきら輝いておりました<br />
              <br />
              その時思ったのです<br />
              これが見えるトランシーバーだったら<br />
              通信できたら夢のようだと<br />
              木のコンピューター Lapis<br />
              無線通信の技術を回路設計・コンデンサー選びから行い<br />
              プロトタイプ Lapis I が完成しました
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Amazon にて販売予定
              </a>
            </div>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              トランジスターについて
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
              トランジスターというと謎の存在と思われている素子代表なのではないでしょうか<br />
              回路図を見てみると、なにやらダイオードのような部分がありますが、ダイオードで言えばアノードからカソードにしか電流が流れないように、pからnに電流が流れるので、pnp型とnpn型の2つのタイプのトランジスターが存在します<br />
              トランジスターの矢印方向に電流を流すためには0.7V以上の電圧をかけなければならず、0.7V以上の電圧が加わったとき、ベースをパスするように大電流が流れます。増幅の効果があるわけです<br />
              トランジスター Lチカ で調べると、大体の方が2つトランジスターを使っているようです<br />
              これはインバーテット・ダーリントン接続と呼ばれ、2つのトランジスターを使って大きな増幅度を得るために用いられます<br />
              シンプルに実装したいなら1つでもいいはずで、これは電流負帰還回路とよばれているようです<br />
              コンデンサーに流れ込む電流を抵抗値によって調整し、npn型トランジスターに0.7V以上の電位差が生じたとき、ダイオードが光るような回路にすると、チカチカ光るわけです<br />
              
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              栞サイズのケータイ
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
              コンデンサーの集積回路化にしたがって、ケータイはLSIとともに小型化し、タウンページを抱えているようなサイズは過去の写真だけのものになりました<br />
              しかし実際、最近の携帯は年々重くなり、高くなる。もっと軽い栞サイズのスマホが見つからなかったので、製作しております<br />
              ケータイとのちょっと違う関わり方になるといいなと思っております<br />
              
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              白と黒のフィールド
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
              情報の世界って、そもそもどのようなフィールドなのでしょうか？0と1がどのように絡み合っているのでしょうか？<br />
              大学で習った方もいらっしゃるかと思いますが、情報の世界は論理和と論理積を基本にして成り立っている世界です<br />
              記号で表すと、a△b (下の棒はない、aかつb) と a▽b (同じく上の棒がない、aまたはb) の世界を追いかけていくわけです<br />
              なぜ + で書かないのかというと、1+1を考えるとき、1という論理的なバックアップがあるフィールド、代数の世界の体を想定していないからかもしれません<br />
              そのようなフィールド、1+1 が 1 になるフィールドは右ignore演算子・左ignore演算子を考えればよく、pythonでいえば (a, b): return a というだけのことで、これを +. と書くことにします<br />
              積については通常の積を考え、和については 1+0 := hot_+(1, 0) := 1+.0 = 1, 0+1 := hot_+(0, 1) := 0.+1 = 1 となるように、要素によって演算子を選択するための hot関数 を導入すれば、数学としてのフィールドとすることができます<br />
              これは zero ring にはならない、つまり 1=0 の空間にはならないことに注意します<br />
              右ignore演算子やhot関数は私の中の用語なので、初出かと思います<br />
              hot関数は、直積における自然な写像って何で要素分解って定義されているんだという疑問から考えました<br />
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              Intelligentia Exceptio: 機械仕かけの弁明
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
              喫茶店でコーヒーを飲みながら、たしか5年ほど前に、01の世界から知性が宿る、そのようなプログラムが書けないか模索していました<br />
              当時辿り着いたのは、何でもいいから動くコードを書いて見せてというプログラムでした。割りとランダムに走り回って組み合わせてプログラムを書いていくプログラムです<br />
              そこには例外処理、Exception を通じたプログラミング言語との対話がありました<br />
              そして結局、ちょっと待つと、if文とprint文を組み合わせた非自明なコードを書いてきたのです<br />
              ここで機械がプログラミングする時代になると言いたいわけではありません<br />
              人間と機械との役割分担は、Exceptionを機械が担当する、こんなこと普通は考えないですが考えておきましたというランダムに走り回るエージェントとしてのAIという役割は確かにあり、デバッグ要因としてAIが安定して駆り出される日は近いはずです<br />
              こうした一種のバディ感のある連携というか存在の仕方もあるのかなと思っております
              
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              Symbol: GNDed
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
              こうした人間の領域と例外領域という役割分担は、サールの中国語の部屋からの脱出さえも可能にすることでしょう<br />
              役に立った、喜んでいただけた。それが駆動となって、いわゆる強化学習が回れば、シンボルはもはや別のシンボルに依拠しているのではなく、logという時系列的な経験からくるものになり、ますますバディといえる存在へ近づいていくことでしょう<br />
              <br />
              
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              アプリがストアからどれだけおすすめされたかを示す App authority score - アプリ信頼性スコア
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
              アプリがストアからどれだけおすすめされたかをバックリンクのような手法で集計し可視化したのがアプリオーソリティースコアになります<br />
              最大で4.0をとるこの指標を用いてアプリ分析ツール <br />
              <a href="https://lapisai.com/query" className="text-sm font-semibold leading-6 text-indigo-600">
                Query
              </a>
              をつくっています。v1としてとりあえず動くレベルになっています。ランキング形式で一覧できるまでを作りました
              
            </p>
            
            <div className="text-left">
              <p className="mt-8 text-pretty text-base font-semibold text-gray-700 sm:text-lg/8">
              
                [今日の開発日記] <br />
                2025-03-29: プロジェクト始動 - さぶや<br /><br />
                2025-03-30: サイトをとりあえず動くようにしました。<br />このように頻繁にトップが更新できるサイトというのも珍しいのですが、構築まわりで何かございましたら yuya@lapisai.com までご連絡ください。<br />ちなみにReactで動いております。- さぶや<br />
                <br />2025-03-31: 独自ドメインメールを設定しました - さぶや
                <br />2025-03-31: 作っているものを木の栞から木のコンピューターにアップデートしました - さぶや
                <br /><br />2025-04-01: ペーパープロト、欲しいとはじめて言われたので差し上げました。そんな製作過程の写真をトップに配置しました。もしウェブメディアなどの方がご覧になっていた場合、メディアキットとしてお使いください。
                <br /><br />2025-04-05: 以前作っていただいたLapisのロゴにアップデートしました。こちらは柊涼さんに描いていただきました。
                <br /><br />2025-04-12: こちらはデジタルな回路で、タッチパネルでブラウザーを見るなどできるようなキットとして販売予定ですが、アナログ回路もAMラジオやアンプ、無線通信の回路などキットとして面白そうと思っています。
                <br /><br />2025-04-15: トランジスターについてのコラムを追記しました。回路に詳しくなっていきたいです。
                <br /><br />2025-04-16: 情報の世界で基本となる1と0の世界について、白と黒のフィールドというコラムを追記しました
                <br /><br />2025-04-17: Intelligentia Exceptio, Symbol: GNDed というコラムを追記しました
                <br /><br />2025-04-17: lapisai.com/query をとりあえず動くレベルで作りました。ランキング形式でストアからどれだけおすすめされているかわかります
              </p>
            </div>
            
            <div className="my-10 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                株式会社Rozen <span aria-hidden="true">→</span>
                <br />
                東京都豊島区西池袋3丁目29番3号梅本ビル4D coba池袋内
                <br />
                yuya@lapisai.com
              </a>
            </div>

            <div className="py-1 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                更新日: 2025/04/16
              </a>
            </div>
          </div>
        </div>
        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
