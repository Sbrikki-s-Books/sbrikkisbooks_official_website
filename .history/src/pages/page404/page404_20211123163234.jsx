import React from 'react'
import * as styles from './page404.module.scss'
import gigi from "../../assets/gigi.webp"

const Page404 = () => {
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
