import React, { useState } from 'react';
import './home.module.scss';
import NavBar from '../../components/navBar/navBar';
import Seo from '../../components/seo/seo';
import Hero from '../../components/hero/hero';
import KingHero from '../../components/kingHero/kingHero';
import Separator from '../../atoms/separator/separator'
import Stats from '../../components/stats/stats';

const Home = () => {

    return (
        <>
            <Hero />
            <Separator />
        </>
    )
}

export default Home
