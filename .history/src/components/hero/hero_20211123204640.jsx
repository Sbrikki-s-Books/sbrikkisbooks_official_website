import React from 'react'
import BookAnimation from '../../atoms/bookAnimation/bookAnimation'
import Text from '../../atoms/text/text'
import * as styles from './hero.module.scss'

const Hero = () =>{
    function handleKeyPress(e) {
        console.log(e)
    }
    return (
        <div className={styles.hero} id="/" onKeyPress={(e) => handleKeyPress(e)}>
            <Text />
            <BookAnimation />
        </div>
    )
}

export default Hero
