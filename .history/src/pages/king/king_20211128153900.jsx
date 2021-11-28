import React, { useEffect, useRef } from 'react'
import KingHero from '../../components/kingHero/kingHero'

import * as styles from './king.module.scss'

function King(props) {
    let blocked = useRef();
    blocked.current = false;

    useEffect(()=>{
         if(!blocked.current) 
         {props.startBlocked();
         blocked.current = true;}
    }, [props])
    

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
