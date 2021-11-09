import React from 'react'
import * as styles from './hamburger.module.scss'
import hamburger from '../../assets/hamburger.svg'

function Hamburger(props) {
    return (
        <div className={styles.flip}>
            <img    
                src={hamburger}
                className={styles.hamburger}
                alt="Open"
                onClick={props.onclick}
            />
        </div>
        
    )
}

export default Hamburger
