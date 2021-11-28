import React, { useEffect, useRef } from 'react'
import KingHero from '../../components/kingHero/kingHero'

import * as styles from './king.module.scss'

function King(props) {
    let blocked = useRef(false);
    let action = useRef(props.startBlocked());

    useEffect(()=>{
         if(!blocked.current) {
            action.current;
            blocked.current = true;
        }
    }, [])
    

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
