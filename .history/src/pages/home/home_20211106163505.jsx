import React from 'react';
import * as styles from './home.module.scss';
import Type from '../../atoms/type/type';
import { Helmet } from 'react-helmet';

const title = "Welcome to Sbrikki's Books";
const subtitle = "Join us in this Book Club for nights full of reading";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Sbrikki's Books</title>
                <meta name="description" content="Sbrikki's Books - Book Club" />
                <meta name="keywords" content="sbrikki, book, club, libro, books" />
            </Helmet>
            <div className={styles.home}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h2><Type /></h2>
                <p>"We'll be here soon"</p>
            </div>
        </>
    )
}

export default Home
