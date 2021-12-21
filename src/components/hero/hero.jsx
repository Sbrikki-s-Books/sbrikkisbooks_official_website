import React from 'react'
import ImageHome from '../../atoms/imageHome/imageHome'
import Text from '../../atoms/text/text'
import * as styles from './hero.module.scss'

const Hero = () =>{
    return (
        <div className={styles.hero} id="/">
            <Text />
            <ImageHome />
        </div>
    )
}

export default Hero
