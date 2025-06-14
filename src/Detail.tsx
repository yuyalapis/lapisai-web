import {useParams} from "react-router-dom"
import {cache} from 'react'

import React from 'react';
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react'

function Detail() {
  const {appname} = useParams()
  const [is_use_effect_called, set_called] = useState(0)
  const [search_term, set_search_term] = useState("")
  const initial_h1 = appname+" 関連アプリ情報ロード中です"
  const [score_data, set_score_data] = useState({
    "results":[
      {
        "app_authority_score":0.22580644,
        "title":initial_h1,
        "url_from":"https://apps.apple.com/jp/app/voa-learning-english/id1590950337?l=en-US"
      },
      {
        "app_authority_score":0.06451613,
        "title":"loading...",
        "url_from":"https://apps.apple.com/jp/app/buzl-voice/id907738125?l=en-US"
      }
    ],
    "searched":{
      "title":initial_h1,
      "description": "loading...",
      "url":"https://apps.apple.com/jp/app/learn-italian-with-flashcards/id1513029876?l=en-US"
    }
  })

  useEffect(() => {
    document.title = appname+" 関連アプリと比較してスコア分析する - iPhoneアプリ競合分析・行動分析・信頼性スコア分析によるデータ分析ツール(無料) Query - Lapis AI"
    
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()
    const cached_fetch = cache(fetch)
    
    const url_app_detail = "https://query-backend-topaz.vercel.app/app_detail?appname="+appname+"&date="+year+"-"+month+"-"+date
    
    cached_fetch(url_app_detail).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then(
      (json_response) => {
        console.log(json_response)
        set_score_data(json_response)
      }
    )
  }, [])

  return (
    <div className="bg-white ">
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
              {score_data["searched"]["title"]}の関連アプリと比較して分析する<br />
              App authority score - アプリ信頼性スコア分析ツール<br />
              Query - developed by Lapis AI by 株式会社Rozen
            </h1>

            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              {decodeURIComponent(score_data["searched"]["description"])}
              
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              App Authority Score - アプリ信頼性スコアによる関連アプリとの比較
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              App authority score (アプリ信頼性スコア) とは、ストアからどれだけおすすめされたかを表す指標です。<br />
              関連するアプリの間でおすすめされている度合いがどれくらい異なるかを一覧できます。<br />
              数値は 0.0 から最大で 4.0 をとり、毎日変動します。
              
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
               App Store によると、こちらのアプリからオススメされました
            </h3>

            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              こちらのデータはユーザーの行動分析の可視化のなかでも、タッチポイント分析にあたります。<br />
              関連するどのアプリからユーザーが流入しているかが一覧できます。
              
            </p>
            
              {score_data?.results.map(item => (
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
                  <a target="_blank" href={item['url_from']} className="-m-1.5 p-1.5 text-cyan-800">
                  {!(item['title'].includes("ã") || item['title'].includes("â")) && item['title']}
                  {(item['title'].includes("ã") || item['title'].includes("â")) && decodeURIComponent(item['url_from'].split("/")[5])}
                  </a>
                </p>
              ))}

            <div className="text-left">
              <p className="mt-8 text-pretty text-base font-semibold text-gray-700 sm:text-lg/8">
              
                [今日の開発日記] <br />
                2025-05-03: プロジェクト始動 - さぶや<br /><br />
                2025-05-05: サイトをとりあえず動くようにしました。<br />各アプリの信頼性スコアがランキング形式で一覧できるようになっています。- さぶや<br />
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
      <div className="fixed z-50 w-full h-16 bottom-4">

                <form className="max-w-md mx-auto">   
                    <div className="relative flex items-right">
                        <input type="search" id="default-search" value={search_term} onChange={(e) => {set_search_term(e.target.value)}} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-blue-800 rounded-xl bg-gray-50 focus:ring-blue-900 focus:border-blue-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="キーワードでアプリを検索" required />
                        <button type="submit" onClick={(e) => { e.preventDefault(); window.location.href = "https://lapisai.com/search/" + search_term}} className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                        </button>
                    </div>
                </form>
    
      </div>

    </div>
  );
}

export default Detail;
