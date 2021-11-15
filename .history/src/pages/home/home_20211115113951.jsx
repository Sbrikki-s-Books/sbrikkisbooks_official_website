import React, { useState } from 'react';
import './home.module.scss';
import NavBar from '../../components/navBar/navBar';
import Seo from '../../components/seo/seo';
import Hero from '../../components/hero/hero';
import KingHero from '../../components/kingHero/kingHero';
import Separator from '../../atoms/separator/separator'
const Home = () => {

    const [heroVisible, setHeroVisible] = useState(true);
    const [kingVisible, setKingVisible] = useState(false);
    const [spotifyVisible, setSpotifyVisible] = useState(false);

    const viewKing = () => {
        setHeroVisible(false);
        setKingVisible(true);
        setSpotifyVisible(false);
    }

    const viewHero = () => {
        setHeroVisible(true);
        setKingVisible(false);
        setSpotifyVisible(false);
    }

    const viewSpotify = () => {
        setHeroVisible(false);
        setKingVisible(false);
        setSpotifyVisible(true);
    }

    return (
        <>
            <Seo 
                title="Sbrikki's Books" 
                description="Sbrikki's Books - Book Club"
                keywords="sbrikki, books, sbrikkis, book, club, libro"
            />
            <NavBar viewHero={viewHero} viewKing={viewKing} viewSpotify={viewSpotify} />
            { heroVisible ? <Hero /> : null }
            { kingVisible ? <KingHero /> : null }
            <Separator />
            
        </>
    )
}

export default Home
