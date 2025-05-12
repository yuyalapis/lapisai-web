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
  
  return (
    <div className="bg-white">
      {sitemap_instance.toString()}
    </div>
  );
}
export default Sitemap;
