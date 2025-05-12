import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'

const hostname = 'https://lapisai.com'

function Sitemap() {
    const [url_data, set_url_data] = useState({
    "results":[
    { url: hostname, changefreq: 'daily', priority: 1 },
    { url: hostname+"/query", changefreq: 'daily', priority: 0.9 }
  ]
  })

  const [score_data, set_score_data] = useState({
    "results":[
      {
        "app_authority_score":4.0,
        "score":15,
        "title": "App authority score",
        "url_to":"https://apps.apple.com/jp/app/loading.../id1664391616US"
      },
      {
        "app_authority_score":4.0,
        "score":15,"title":"アプリ信頼性スコア",
        "url_to":"https://apps.apple.com/jp/app/ロード中です/id1244142051?l=en-US"
      }
    ]
  })
  
  useEffect(() => {
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
      }
    )
  }, [])
  
  return (
    <div className="bg-white">
      {url_data?.results.map(item => (
                <p className="mt-2 text-left text-pretty text-base font-xs text-gray-800 sm:text-lg">
                  {"<url>"+item['url_to']+"</url>"}
                </p>
              ))}
    </div>
  );
}
export default Sitemap;
