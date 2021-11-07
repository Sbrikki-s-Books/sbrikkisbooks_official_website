import React from 'react'
import Type from '../../atoms/type'

const Hero = () =>{
    return (
        <div className={styles.hero}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2><Type /></h2>
            <p>"We'll be here soon"</p>
        </div>
    )
}

export default Hero
