import React from 'react';
import {cache} from 'react'
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react'

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() + 1
const date = today.getDate()

const cached_fetch = cache(fetch)

interface ScoreDataResult {
      app_authority_score: number;
      score: number;
      title: string;
      url_to: string;
    }
interface ScoreData {
  results: ScoreDataResult[];
}

function Query(score_data: any) {
  // const [is_use_effect_called, set_called] = useState(0)
  // let score_data = {
  //   "results":[
  //     {
  //       "app_authority_score":4.0,
  //       "score":15,
  //       "title": "App authority score",
  //       "url_to":"https://apps.apple.com/jp/app/loading.../id1664391616US"
  //     },
  //     {
  //       "app_authority_score":4.0,
  //       "score":15,"title":"アプリ信頼性スコア",
  //       "url_to":"https://apps.apple.com/jp/app/ロード中です/id1244142051?l=en-US"
  //     }
  //   ]
  // }

  document.title = "Query - アプリ信頼性スコア分析ツール developed by Lapis AI by 株式会社Rozen"

  // useEffect(() => {
  //   cached_fetch(url_app_authority_score).then(
  //     (response) => {
  //       console.log(response)
  //       return response.json()
  //     }
  //   ).then(
  //     (json_response) => {
  //       console.log(json_response)
  //       set_score_data(json_response)
  //     }
  //   )
  // }, [])

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <nav aria-label="Global" className="flex items-center p-0 lg:px-8">
          
          <div className="flex flex-1 justify-center mr-auto">
            <a target="_blank" href="https://lapisai.com/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo.png" className="h-8 w-auto" />
            </a>
          </div>
          
          <div className="mx-4">
            <a target="_blank" href="https://lapisai.com/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo_txt@4x.png" className="h-8 w-auto" />
            </a>
          </div>

          <div className="flex flex-1 justify-center ml-auto">
            <a
                href="https://lapisai.com/query"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                アプリ分析
              </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 mt-12 lg:mx-8 bg-zinc-100 ">
        <div className="mx-auto max-w-2xl pt-12 sm:pt-12 lg:pt-18">
          <div className="w-full place-items-center">
            <img className="object-cover object-center w-full rounded-lg" src="/img_top_cover_query.jpg" alt="Lapis I prototype image" />
          </div>
          
          <div className="text-center">
            <h1 className="text-balance text-xl pt-8 font-semibold tracking-tight text-gray-900 sm:text-xl">
              App authority score - アプリ信頼性スコア分析ツール<br />
              Query - developed by Lapis AI by 株式会社Rozen
            </h1>
          

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              A2 Score - App authority score - アプリ信頼性スコアとは
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              A2 Score - App authority score (アプリ信頼性スコア) とは、ストアからどれだけおすすめされたかを表す指標です。<br />
              アプリがおすすめする他のアプリの数は限られているので、webのバックリンクに似た仕組みでアプリの信頼性を計ることができます。<br />
              性質のよい空間で考えることになるので、データ数にたいしてロバスト、つまりあまり変化しないなど、指標として安定しているわけです。<br />
              0.0 から最大で 4.0 をとります。
              
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              App Authority Score Realtime Ranking <br /> アプリオーソリティースコア リアルタイムランキング
            </h3>
              {score_data?.results.map(item:any => (
                <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
                  {item['app_authority_score'] >= 3.0　&&
                    <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-xs" >{item['app_authority_score'].toFixed(1) }</span>
                  }
                  {(item['app_authority_score'] >= 2.0 && item['app_authority_score'] < 3.0) &&
                    <span className="px-3 py-1 bg-indigo-300 text-white rounded-full text-xs" >{item['app_authority_score'].toFixed(1)}</span>
                  }
                  {item['app_authority_score'] < 2.0 &&
                    <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs" >{item['app_authority_score'].toFixed(1) }</span>
                  }
                  {" "}
                  <a target="_blank" href={item['url_to']} className="-m-1.5 p-1.5 text-cyan-800">
                    {item['title']}
                  </a>
                </p>
              ))}
            
            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              アプリの信頼性の3分類
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              アプリの信頼性を表すスコアは次の3つに分類できます。
              <br />1. そもそも動くのかどうか、functional なレベル
              <br />2. 機能はちゃんとつくられているのかどうか
              <br />3. アニメーションなどの細部にわたるデザイン
              
            </p>

            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              このうち、1. そもそも動くのかどうかについてが信頼性という言葉から定義しようとする際、主眼になるかと思います。
              <br />アプリがクラッシュしているかどうかは、App Developer Console から見れるのですが、筆者がゲームを作った際もクラッシュ率が0.0%でしたので、
              クラッシュしないアプリをつくるtipsを2点ほど共有させていただきたいと思います。
            </p>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              1. 軽いフレームワークを使う技術選定をする。特にゲームエンジンを搭載しているフレームワークなどはよく落ちます。
              そもそもデフォルトで重いので、fpsを出すのに苦労します。ゲーム機器とは違って、
              高スペックなスマートフォンの人もいれば、骨董品レベルのものを未だに使い続けている人もいるわけです。
              <br />最近はiOSのバージョンが古い人、つまり昔のiPhoneを使い続けているためアップデートできない人は、インストールがそもそもできないようになっています。
              <br />クラッシュしないためにCPUを積んだ最新機種のみ対応という流れは、それでいいのかという気がします。
              <br />例えばゲームエンジンを使わなくとも簡単なゲームはsprite機能を実装することでつくれますし、軽いフレームワークの選定というのは割と重要な気がしています。
            </p>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              2. 不要なモジュールやプラグインがたまっていて重くなっている。
              <br />このパターンは開発全般であるあるかと思います。
              アプリの場合はモジュールを読み込みすぎると、相性の問題でビルドが通らなかったり、クラッシュしたりします。
              いわゆるリファクタを定期的にして、不要なモジュールを削除する必要があります。
              
            </p>

            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              相性の問題でクラッシュする問題の解決策として言われていたのは、そもそも import を慎重にやる。一つづつしかモジュールは追加しないという戦略でした。
              <br />リファクタと言われても工数は現実的に取れなかったりするので、最初から一つづつ import して相性の問題が起きたらすぐに revert できるようにするのがよいのかなと思います。
              
            </p>
            
            <div className="text-left">
              <p className="mt-8 text-pretty text-base font-semibold text-gray-700 sm:text-lg/8">
              
                [今日の開発日記] <br />
                2025-05-03: プロジェクト始動 - さぶや<br /><br />
                2025-05-05: サイトをとりあえず動くようにしました。<br />各アプリの信頼性スコアがランキング形式で一覧できるようになっています。- さぶや<br />
                2025-05-10: コラムを追加しました。
                <br />
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
                更新日: 2025/05/05
              </a>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Query;
