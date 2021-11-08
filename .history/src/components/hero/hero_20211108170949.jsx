import React from 'react'
import BookAnimation from '../../atoms/bookAnimation/bookAnimation'
import Text from '../../atoms/text/text'
import * as styles from './hero.module.scss'

const Hero = () =>{
    return (
        <div className={styles.hero}>
            <Text />
            <BookAnimation />
        </div>
    )
}

export default Hero
