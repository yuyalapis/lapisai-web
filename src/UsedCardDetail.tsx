import React from 'react';
import {useParams} from "react-router-dom"
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react'

import cat_0 from "./images/cat_0.png"
import cat_7_flash from "./images/cat_7_flash.png"

function UsedCardDetail() {
  let {cardname, cardname_2} = useParams()
  const [cat_state, set_cat_state] = useState(cat_0)
  const url_cat_clicked = "https://query-backend-used.vercel.app/stats/cat?region=card"
  
  const [price_data, set_price_data] = useState({
    "detail":{
      "saved_at": "2025-05-10",
      "price": 1500,
      "title": "loading...",
      "category": "loading...",
      "region": "card",
      "img_src": "https://www.suruga-ya.jp/database/photo.php?shinaban=107006014001&size=m"
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
  const [data_base64, set_data_base64] = useState(
    {"data_src":"/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAHgAoADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKA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"}
  )

  useEffect(() => {
    document.title = cardname + " カード買取中古価格推移分析ツール - Lapis AI"

    let url_used_price = ""
    if (cardname_2) {
      url_used_price = "https://query-backend-used.vercel.app/query-used-price-card-detail?cardname=" + cardname + "/" + cardname_2
    } else {
      url_used_price = "https://query-backend-used.vercel.app/query-used-price-card-detail?cardname=" + cardname
    }
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

    let url_used_price_img = ""
    if (cardname_2) {
      url_used_price_img = "https://query-backend-used.vercel.app/query-used-price-card-detail-line-chart-img?cardname=" + cardname + "/" + cardname_2
    } else {
      url_used_price_img = "https://query-backend-used.vercel.app/query-used-price-card-detail-line-chart-img?cardname=" + cardname
    }
    fetch(url_used_price_img).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then(
      (json_response) => {
        console.log(json_response)
        set_data_base64(json_response)
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
            <img src={cat_state} className="w-20 h-20" id="cat" onClick={() => {set_cat_state(cat_7_flash); fetch(url_cat_clicked).then((response) => {console.log(response)}); setTimeout(() => {set_cat_state(cat_0)}, 1500)}} />
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
              {cardname + "/"} {cardname_2 && cardname_2} カード買取中古価格分析ツール<br />
              Query - 時系列分析 developed by Lapis AI by 株式会社Rozen
            </h1>
          

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
               中古価格時系列分析とは - Time Series Analysis
            </h3>
            <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">

              Time Series Analysis of Used Price (中古価格時系列分析) とは、中古価格の推移を表す分析です。<br />
              通常、中古価格は下落し0円になりますが、希少なアイテムでは中古価格が0円にならず、安定する現象が起きます。<br />
              これらのアイテムの特徴を見極めることで、長期的に価値がある商品を発掘したり、自身でプロダクトをつくる際に長期的に価値が出るように設計・構築したりできるようになります。
              
            </p>

            <p className="mt-2 text-pretty text-base font-semibold text-gray-700 sm:text-lg">
            <a 
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="https://affiliate.suruga-ya.jp/modules/af/af_jump.php?user_id=5095&amp;goods_url=https%3A%2F%2Fwww.suruga-ya.jp%2Fman%2Fkaitori%2Fkaitoritop.html" rel="nofollow">【駿河屋】最新作から昔懐かしのアイテムまでなんでも買い取ります！</a>
            </p>

            <h3 className="mt-8 text-left text-pretty text-xl font-semibold text-gray-900 sm:text-lg">
              カード中古買取価格
            </h3>

                <p className="mt-2 my-4 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
                  {" "}
                  <span className="px-3 py-1 bg-emerald-800 text-white rounded-full text-xs" >{(price_data?.detail["price"]).toLocaleString()}{"円"}</span>
                  {" "}
                  {price_data?.detail['title']}
                </p>
              <div className="items-center w-full place-items-center">
                <img src={price_data?.detail["img_src"]} className="text-center items-center " />
              </div>
            <div className="mt-8 text-pretty text-xl font-semibold text-gray-900 sm:text-lg items-center w-full place-items-center">
              <img src={"data:imgage/png;base64,"+data_base64["data_src"]} className="object-cover object-center w-full rounded-lg" />
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
                2025-05-21: アクセスが来すぎたためDBのData Transfer に課金せざるを得なくなりました - さぶや<br /><br />
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
                更新日: 2025/05/21
              </a>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default UsedCardDetail;
