import React from 'react'
import * as styles from './page404.module.scss'

const Page404 = () => {
    return (
        <div className={styles.page404}>
            <picture>
                <source srcset="../../assets/gigi.webp" type="image/webp" />
                <img src="../../assets/gigi.png" alt="logo" />
            </picture>+
        </div>
    )
}

export default Page404
