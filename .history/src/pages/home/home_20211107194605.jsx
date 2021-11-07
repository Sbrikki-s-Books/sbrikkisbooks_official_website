import React from 'react';
import * as styles from './home.module.scss';
import Type from '../../atoms/type/type';
import NavBar from '../../components/navBar/navBar';
import Seo from '../../components/seo/seo';
import Hero from '../../components/hero/hero';

const title = "Welcome to Sbrikki's Books";
const subtitle = "Join us in this Book Club for nights full of reading";

const Home = () => {
    return (
        <>
            <Seo 
                title="Sbrikki's Books" 
                description="Sbrikki's Books - Book Club"
                keywords="sbrikki, books, sbrikkis, book, club, libro"
            />
            <NavBar />
            <Hero />
        </>
    )
}

export default Home
