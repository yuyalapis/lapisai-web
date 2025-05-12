import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'

function Sitemap() {
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
      {score_data?.results.map(item => (
                <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
                  {item['url_to']}
                </p>
              ))}
    </div>
  );
}
export default Sitemap;
