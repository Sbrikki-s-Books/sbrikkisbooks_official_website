import React from 'react'
import Type from '../../atoms/type/type'
import * as styles from './hero.module.scss'

const title = "Welcome to Sbrikki's Books";
const subtitle = "Join us in this Book Club for nights full of reading";

const Hero = () =>{
    return (
        <div className={styles.hero}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2><Type /></h2>
            <p>"We'll be here soon"</p>
        </div>
    )
}

export default Hero
