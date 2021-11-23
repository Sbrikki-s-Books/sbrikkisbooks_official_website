import React from 'react'
import * as styles from './page404.module.scss'

const Page404 = () => {
    return (
        <div className={styles.page404}>
            <img src="../../assets/gigi.webp" alt="Gigi" />
            <Image
                src={require('../../assets/gigi.png')}
                webp={require('../../assets/gigi.webp')}
            />
            {
                isWebpSupported()
                ? <img src="../../assets/gigi.webp" alt="Gigi"/>
                : <img src="../../assets/gigi.png" alt="Gigi"/>
            }
        </div>
    )
}

export default Page404
