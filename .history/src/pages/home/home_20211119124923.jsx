import React, { useState } from 'react';
import './home.module.scss';
import NavBar from '../../components/navBar/navBar';
import Seo from '../../components/seo/seo';
import Hero from '../../components/hero/hero';
import KingHero from '../../components/kingHero/kingHero';
import Separator from '../../atoms/separator/separator'
import Stats from '../../components/stats/stats';

const Home = () => {

    const [heroVisible, setHeroVisible] = useState(true);
    const [kingVisible, setKingVisible] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);

    const viewKing = () => {
        setHeroVisible(false);
        setKingVisible(true);
        setStatsVisible(false);
    }

    const viewHero = () => {
        setHeroVisible(true);
        setKingVisible(false);
        setStatsVisible(false);
    }

    const viewSpotify = () => {
    }

    const viewStats = () => {
        setHeroVisible(false);
        setKingVisible(false);
        setStatsVisible(true);
    }

    return (
        <>
            <Seo 
                title="Sbrikki's Books" 
                description="Sbrikki's Books - Book Club"
                keywords="sbrikki, books, sbrikkis, book, club, libro"
            />
            <NavBar viewHero={viewHero} viewKing={viewKing} viewSpotify={viewSpotify} viewStats={viewStats} />
            { heroVisible ? <Hero /> : null }
            { kingVisible ? <KingHero /> : null }
            { spotifyVisible ? <Spotify /> : null }
            { statsVisible ? <Stats /> : null }
            <Separator />
            
        </>
    )
}

export default Home
