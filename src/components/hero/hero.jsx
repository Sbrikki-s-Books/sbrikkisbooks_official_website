import React from 'react'
import BookAnimation from '../../atoms/bookAnimation/bookAnimation'
import Text from '../../atoms/text/text'
import * as styles from './hero.module.scss'

const Hero = () =>{
    return (
        <div className={styles.hero}>
            <Text />
            <BookAnimation width="300px" height="300px" />
        </div>
    )
}

export default Hero
