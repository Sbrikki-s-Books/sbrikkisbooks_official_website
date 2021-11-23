import React, { useState, useEffect } from 'react'
import * as styles from './page404.module.scss'
import gigi from "../../assets/gigi.webp"

const Page404 = () => {

    const [random, setRandom] = useState(0);

    const array = [
        "Le domeniche d'Agosto quanta neve che cadrà",
        "Il mio petto da cuscino per la vita ti farà",
        "Miele, sei bella da morire, mi hai fatto innamorare",
        "Quanti amori nascono così!",
    ];

    useEffect(() => {
        const min = 0;
        const max = array.length;
        const rand = min + Math.random() * (max - min);
        setRandom(random + rand);
    }, [array])

    return (
        <div className={styles.page404}>
            <img src={gigi} alt="Gigi" />
            <div className={styles.text}>
                <h1>404</h1>
                <h3>Sorry mbare, I can't find the page you asked</h3>
            </div>
        </div>
    )
}

export default Page404
