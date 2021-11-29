import React from 'react'
import * as styles from './hamburger.module.scss'
import hamburger from '../../assets/hamburger.svg'

function Hamburger(props) {
    return (
        <button onClick={props.onclick}>
            <div className={styles.hamburger}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
        </div>
        </button>
        
        
    )
}

export default Hamburger
