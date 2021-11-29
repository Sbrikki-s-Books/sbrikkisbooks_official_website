import React from 'react'
import * as styles from './hamburger.module.scss'

function Hamburger(props) {
    return (
        <div className={props.navBarOpen ? styles.cross : styles.hamburger} onClick={props.onClick}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
        </div>
        
    )
}

export default Hamburger
