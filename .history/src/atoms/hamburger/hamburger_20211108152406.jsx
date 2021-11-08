import React from 'react'
import * as styles from './hamburger.module.scss'
import hamburger from '../../assets/hamburger.svg'

function Hamburger(props) {
    return (
        <img    
            src={hamburger}
            className={styles.hamburger}
            onClick={props.action}
        />
    )
}

export default Hamburger
