import {useParams} from "react-router-dom"

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function Detail() {
  const [is_use_effect_called, set_called] = useState(0)
  const [score_data, set_score_data] = useState({
    "results":[
      {
        "app_authority_score":0.22580644,
        "title":"VOA%20Learning%20English%E2%80%AA.%E2%80%AC",
        "url_from":"https://apps.apple.com/jp/app/voa-learning-english/id1590950337?l=en-US"
      },
      {
        "app_authority_score":0.06451613,
        "title":"BUZL%20Voice",
        "url_from":"https://apps.apple.com/jp/app/buzl-voice/id907738125?l=en-US"
      }
    ],
    "searched":{
      "title":"アプリ情報ロード中です",
      "url":"https://apps.apple.com/jp/app/learn-italian-with-flashcards/id1513029876?l=en-US"
    }
  })

  useEffect(() => {
    set_called(1)
    console.log("useEffect called App.tsx")
    const {appname} = useParams()
    document.title = "Query - アプリ信頼性スコア分析ツール developed by Lapis AI by 株式会社Rozen"
    const url_app_authority_score = "https://query-backend-topaz.vercel.app/app_authority_score"
    fetch(url_app_authority_score).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then(
      (json_response) => {
        console.log(json_response)
        set_score_data(json_response)
        document.title = score_data["searched"]["title"] + "の関連アプリと比較してスコア分析する - アプリ信頼性スコア分析ツール - Lapis AI"
      }
    )
  }, [])

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
            
          </div>
          
        </nav>
        
      </header>

      <div className="relative isolate px-6 mt-12 lg:mx-8 bg-slate-100 ">
        <div className="mx-auto max-w-2xl pt-12 sm:pt-12 lg:pt-18">
          <div className="w-full place-items-center">
            <img className="object-cover object-center w-full rounded-lg" src="/img_top_cover_query.jpg" alt="Lapis I prototype image" />
          </div>
          
          <div className="text-center">
            <h1 className="text-balance text-xl pt-8 font-semibold tracking-tight text-gray-900 sm:text-xl">
              {score_data["searched"]["title"]}の関連アプリと比較してスコア分析する
              App authority score - アプリ信頼性スコア分析ツール<br />
              Query - developed by Lapis AI by 株式会社Rozen
            </h1>
          

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              App authority score - アプリ信頼性スコアによる関連アプリとの比較
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              App authority score (アプリ信頼性スコア) とは、ストアからどれだけおすすめされたかを表す指標です。<br />
              関連するアプリの間でおすすめされている度合いがどれくらい異なるかを一覧できます。<br />
              数値は 0.0 から最大で 4.0 をとり、毎日変動します。
              
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              App Authority Score による関連アプリの比較一覧
            </h3>
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
                  {item['title']}

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
    </div>
  );
}

export default Detail;
