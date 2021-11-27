import React, { useEffect } from 'react'
import KingHero from '../../components/kingHero/kingHero'

import * as styles from './king.module.scss'

function King(props) {

    

    useEffect(()=>{
         props.startBlocked();
    }, [props.startBlocked()])

    return (
        <div className={styles.kingPage}>
            <button 
                className={props.isBlocking? styles.buttonBlocked : styles.buttonUnblocked} 
                onClick={props.toggleIsBlocking}
            >
                {
                props.isBlocking?
                    "Click to allow exit"
                :
                    "Click to block exit"
                }
            </button>
            <KingHero />
        </div>
    )
}

export default King
