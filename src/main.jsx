import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { Header } from './partials/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Main } from './components/Main.jsx';
import { Footer } from './partials/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Header></Header>
        <Hero></Hero>
        <Main></Main>
        <Footer></Footer>
    </>,
)
