import React from 'react'
import * as styles from './hamburger.module.scss'

function Hamburger(props) {
    return (
        <div className={styles.hamburger} onClick={props.onClick}>
            <div className={props.navBarOpen ? styles.crossLine1 : styles.hamLine1}></div>
            <div className={props.navBarOpen ? styles.crossLine2 : styles.hamLine2}></div>
            <div className={props.navBarOpen ? styles.crossLine3 : styles.hamLine3}></div>
        </div>
        
    )
}

export default Hamburger
