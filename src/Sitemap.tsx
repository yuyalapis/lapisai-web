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

  useEffect(() => {
    document.title = "sitemap"
    const url_sitemap = "https://query-backend-topaz.vercel.app/sitemap"
    fetch(url_sitemap).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then(
      (json_response) => {
        console.log(json_response)
        set_url_data(json_response)
      }
    )
  }, [])
  
  return (
    <div className="bg-white">
      {url_data?.results.map(item => (
                <p className="mt-2 text-left text-pretty text-base font-semibold text-gray-700 sm:text-lg">
                  {"<url>"} {item['url']} {"</url>"}
                </p>
              ))}
    </div>
  );
}
export default Sitemap;
