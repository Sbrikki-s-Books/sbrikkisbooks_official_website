import React, { useEffect } from 'react'
import KingHero from '../../components/kingHero/kingHero'

import * as styles from './king.module.scss'

function King(props) {

    useEffect(()=>{
        props.setIsBlocking(true);
    }, [props, []])

    return (
        <div className={styles.kingPage}>
            <button 
                className={props.isBlocking? styles.buttonBlocked : styles.buttonUnblocked} 
                onClick={props.toggleIsBlocking}
            >
                {
                props.isBlocking?
                    "Exit is NOT allowed"
                :
                    "Exit is allowed"
                }
            </button>
            <KingHero />
        </div>
    )
}

export default King
