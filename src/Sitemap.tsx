import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'

const sitemap = require('sitemap')
const hostname = 'https://lapisai.com'

function Sitemap() {
  const url_data = [
    { url: hostname, changefreq: 'daily', priority: 1 },
    { url: hostname+"/query", changefreq: 'daily', priority: 0.9 }
  ]
  
  const sitemap_instance = sitemap.createSitemap({hostname, url_data, })
  const sitemap_string = sitemap_instance.toString()
  
  return (
    <div className="bg-white">
      {sitemap_string}
    </div>
  );
}
export default Sitemap;
