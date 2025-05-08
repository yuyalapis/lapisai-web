import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Home from "./Home"
import Query from "./Query"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<Query />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
