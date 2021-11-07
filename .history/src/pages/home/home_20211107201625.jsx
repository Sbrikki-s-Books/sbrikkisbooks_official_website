import React from 'react';
import * as styles from './home.module.scss';
import NavBar from '../../components/navBar/navBar';
import Seo from '../../components/seo/seo';
import Hero from '../../components/hero/hero';
import BookAnimation from '../../atoms/bookAnimation/bookAnimation';

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
            <BookAnimation />
        </>
    )
}

export default Home
