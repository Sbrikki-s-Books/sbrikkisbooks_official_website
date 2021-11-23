import React from 'react'
import * as styles from './page404.module.scss'
import gigi from "../../assets/gigi.webp"

const Page404 = () => {
    return (
        <div className={styles.page404}>
            <img src={gigi} alt="Gigi" />
        </div>
    )
}

export default Page404
