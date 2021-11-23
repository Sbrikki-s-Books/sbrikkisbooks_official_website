import React, { useState, useEffect } from 'react'
import * as styles from './page404.module.scss'
import gigi from "../../assets/gigi.webp"

const array = [
    "Le domeniche d'Agosto quanta neve che cadrà",
    "Il mio petto da cuscino per la vita ti farà",
    "Miele, sei bella da morire, mi hai fatto innamorare",
    "Quanti amori nascono così!",
    "Bésame, siente còmo suena el corazon",
    "E quella notte nel fuoco il mio cuore con lei si bruciò",
    "Mai non mollare mai"
];

const Page404 = () => {

    const [random, setRandom] = useState(0);

    useEffect(() => {
        const min = 0;
        const max = array.length;
        const rand = min + Math.random() * (max - min);
        setRandom(r => parseInt(r + rand));
    }, [])

    return (
        <div className={styles.page404}>
            <img src={gigi} alt="Gigi" />
            <div className={styles.text}>
                <h1>404</h1>
                <h1>Sorry mbare, I can't find the page you asked</h1>
                <h2>"{array[random]}"</h2>
            </div>
        </div>
    )
}

export default Page404
