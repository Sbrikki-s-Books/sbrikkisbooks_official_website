import React from 'react';
import * as styles from './home.module.scss';
import Type from '../../atoms/type/type';

const title = "Welcome to Sbrikki's Books";
const subtitle = "Join us in this Book Club for nights full of reading";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>"We'll be here soon"</p>
        </div>
    )
}

export default Home
