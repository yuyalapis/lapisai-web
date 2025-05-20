import React from 'react';
import {useParams} from "react-router-dom"
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react'

import { Line } from "react-chartjs-2"


function UsedCardDetail() {
  const {cardname} = useParams()
  const [price_data, set_price_data] = useState({
    "detail":{
      "saved_at": "2025-05-10",
      "price": 1500,
      "title": "loading...",
      "category": "loading...",
      "region": "card"
    },
    "keywords": "keyword",
    "results":[
      {
        "saved_at": "2025-05-10",
        "price": 1500,
        "title": "loading...",
        "category": "loading...",
        "url": "https://lapisai.com",
        "region": "card"
      }
    ]
  })

  const [series_data, set_series_data] = useState({"data":[15000,20000,20000], "labels":["Fri, 16 May 2025 00:00:00 GMT","Mon, 19 May 2025 00:00:00 GMT","Wed, 21 May 2025 00:00:00 GMT"]})

  const graphData = {
    labels: series_data.labels,
    datasets: [
      {
        label: cardname+" 中古価格推移",
        data: series_data.data,
        borderColor: "rgb(75, 192, 192)",
      }
    ],
  };

  const options: {} = {
    maintainAspectRatio: false,
  };

  const divStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
    margin: "10px",
    width: "500px",
  };
  
  useEffect(() => {
    document.title = cardname + " カード買取中古価格推移分析ツール - Lapis AI"
    const url_used_price = "https://query-backend-used.vercel.app/query-used-price-card-detail?cardname=" + cardname
    fetch(url_used_price).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then(
      (json_response) => {
        console.log(json_response)
        set_price_data(json_response)
      }
    )
  }, [])

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
                href="https://lapisai.com/query-used-price-card"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                カード買取中古価格分析
              </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 mt-12 lg:mx-8 bg-zinc-100 ">
        <div className="mx-auto max-w-2xl pt-12 sm:pt-12 lg:pt-18">
          <div className="w-full place-items-center">
            <img className="object-cover object-center w-full rounded-lg" src="/img_top_cover_used.jpg" alt="Lapis I prototype image" />
          </div>
          
          <div className="text-center">
            <h1 className="text-balance text-xl pt-8 font-semibold tracking-tight text-gray-900 sm:text-xl">
              カード買取中古価格分析ツール<br />
              Query - 時系列分析 developed by Lapis AI by 株式会社Rozen
            </h1>
          

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              {cardname} の中古価格時系列分析 - Time Series Analysis
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              Time Series Analysis of Used Price (中古価格時系列分析) とは、中古価格の推移を表す分析です。<br />
              通常、中古価格は下落し0円になりますが、希少なアイテムでは中古価格が0円にならず、安定する現象が起きます。<br />
              これらのアイテムの特徴を見極めることで、長期的に価値がある商品を発掘したり、自身でプロダクトをつくる際に長期的に価値が出るように設計・構築したりできるようになります。
              
            </p>
            
            <a 
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="https://affiliate.suruga-ya.jp/modules/af/af_jump.php?user_id=5095&amp;goods_url=https%3A%2F%2Fwww.suruga-ya.jp%2Fman%2Fkaitori%2Fkaitoritop.html" rel="nofollow">【駿河屋】最新作から昔懐かしのアイテムまでなんでも買い取ります！</a>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              カード中古買取価格
            </h3>
                <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
                  <span className="px-3 py-1 bg-emerald-800 text-white rounded-full text-xs" >{(price_data?.detail["price"]).toLocaleString()}{"円"}</span>
                  {" "}
                  {price_data?.detail['title']}
                </p>

            <div className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg" style={divStyle}>
              <Line
                height={300}
                width={300}
                data={graphData}
                options={options}
                id="chart-key"
              />
            </div>
            
            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              関連するカード - カード中古買取価格 {price_data?.keywords}
            </h3>
            {price_data?.results.map(item => (

                <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
                  <span className="px-3 py-1 bg-emerald-800 text-white rounded-full text-xs" >{item["price"].toLocaleString()}{"円"}</span>
                  {" "}
                  <a target="_blank" href={item['url']} className="-m-1.5 p-1.5 text-cyan-800">
                    {item['title']}
                  </a>
                </p>

            ))}

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              アイテム別中古価格推移の3分類
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              中古価格の時系列で見た時の数いの仕方は次の3つのパターンに分類できます。
              <br />1. 時間とともに価格が下落していき、いずれ0円になる
              <br />2. ある程度のところで価格の下落が止まり、一定の価格で取引されるようになる
              <br />3. 時間とともに価値が上がっていき、価格が上昇する
              
            </p>

            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              この3つのパターンのうち、1. 時間とともに価格が下落していき、いずれ0円になるというパターンが大半で、実際流通しているカードのうち、値段がつくカードを調べたところ、わずか24%のカードのみ値段がつくという結果になりました。
              <br />流通されて名前が通っているアイテムに絞ってもこのパーセンテージの少なさとなっており、
              基本的にほとんどのアイテムは、時間とともに価値が減少し、価格は0円になるということが示されているかと思います。
            </p>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              それに対して、2. ある程度のところで価格の下落が止まり、一定の価格で取引されるようになる や 3. 時間とともに価値が上がっていき、価格が上昇する アイテムは、それ自体に価値があることが多いです。
              例えば価格上位にきているアイテムに浮世絵をあしらったものがあります。
              絵自体に価値があったり、文章で言えば技術書であったり、そういったアイテムは価値が0になることなく少なくとも一定の価格を維持するというパターンが見られます。
            </p>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              3. 時間とともに価値が上がっていき、価格が上昇する アイテムを多くの人が求めていると思います。
              <br />実際、アンティークのティーカップや書籍などのいわゆる価値が上がりそうなアイテムであっても、買った時の価格を上回る値がつくというのは非常に稀です。
              やはり経年変化により価格は下落するという方向にどうしてもなりがちです。
              この時間とともに価値が上昇するというある意味ロマンを追いかけるならば、おそらく経年変化をほぼ感じさせないようなもの、
              例えば希少なガジェット（電子機器類）やカードになるのかもしれません。
              
            </p>
            
            <div className="text-left">
              <p className="mt-8 text-pretty text-base font-semibold text-gray-700 sm:text-lg/8">
              
                [今日の開発日記] <br />
                2025-05-18: プロジェクト始動 - さぶや<br /><br />
                2025-05-19: サイトをとりあえず動くようにしました。<br />最近価格が上がったり下がったりしたカードがランキング形式で一覧できるようになっています。- さぶや<br />
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
                更新日: 2025/05/19
              </a>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default UsedCardDetail;
