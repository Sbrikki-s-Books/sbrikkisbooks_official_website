import React, { useState, useEffect } from 'react'
import * as styles from './page404.module.scss'
import gigi from "../../assets/gigi.webp"

const array = [
    "Le domeniche d'Agosto quanta neve che cadrà",
    "Il mio petto da cuscino per la vita ti farà",
    "Miele, sei bella da morire, mi hai fatto innamorare",
    "Quanti amori nascono così!",
];

const Page404 = () => {

    const [random, setRandom] = useState(0);

    useEffect(() => {
        const min = 0;
        const max = array.length;
        const rand = min + Math.random() * (max - min);
        console.log(rand)
        setRandom(r => r + rand);
    }, [])

    return (
        <div className={styles.page404}>
            <img src={gigi} alt="Gigi" />
            <div className={styles.text}>
                <h1>404</h1>
                <h2>Sorry mbare, I can't find the page you asked</h2>
                <h3>"{array[random]}"</h3>
            </div>
        </div>
    )
}

export default Page404
