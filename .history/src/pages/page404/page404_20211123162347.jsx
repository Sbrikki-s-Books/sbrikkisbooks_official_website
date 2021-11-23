import React from 'react'
import * as styles from './page404.module.scss'
import Image from 'react-image-webp';
import {isWebpSupported} from 'react-image-webp/dist/utils';

const Page404 = () => {
    return (
        <div className={styles.page404}>
            {
                isWebpSupported()
                ? <img src="../../assets/gigi.webp" />
                : <img src="../../assets/gigi.png" />
            }
        </div>
    )
}

export default Page404
