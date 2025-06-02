import React from 'react';
import {cache} from 'react'
import logo from './logo.svg';
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Home from "./Home"
import Query from "./Query"
import Detail from "./Detail"
import Search from "./Search"
import UsedCard from "./UsedCard"
import UsedCardDetail from "./UsedCardDetail"
import Siteref from "./Siteref"
import SiterefUsedCard from "./SiterefUsedCard"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() + 1
const date = today.getDate()

const cached_fetch = cache(fetch)

async function get_app_authority_score() {
  const url_app_authority_score = "https://query-backend-topaz.vercel.app/app_authority_score?date=" + year + "-" + month + "-" + date 
  const res = await cached_fetch(url_app_authority_score)
  const score_data = await res.json()
  return score_data
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<Query score_data={get_app_authority_score()} />} />
          <Route path="/app/:appname" element={<Detail />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/query-used-price-card" element={<UsedCard />} />
          <Route path="/query-used-price-card-detail/:cardname" element={<UsedCardDetail />} />
          <Route path="/query-used-price-card-detail/:cardname/:cardname_2?" element={<UsedCardDetail />} />
          <Route path="/siteref" element={<Siteref />} />
          <Route path="/siterefusedcard" element={<SiterefUsedCard />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
