import React from 'react'
import * as styles from './hamburger.module.scss'
import hamburger from '../../assets/hamburger.svg'

function Hamburger(props) {
    return (
        <div className={styles.hamburger}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
    )
}

export default Hamburger
