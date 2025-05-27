import React from 'react';
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

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<Query />} />
          <Route path="/app/:appname" element={<Detail />} />
          <Route path="/app/:query" element={<Search />} />
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
