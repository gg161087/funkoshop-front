import React from 'react'

import { Header } from '../../components/Header/index.jsx';
import { Hero } from '../../components/Hero/index.jsx';
import { Main } from '../../components/Main/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

import './Home.css';

export const Home = () => {
    
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}