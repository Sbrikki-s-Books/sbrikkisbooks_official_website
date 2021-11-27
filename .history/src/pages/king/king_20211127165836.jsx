import React from 'react'
import KingHero from '../../components/kingHero/kingHero'

import * as styles from './king.module.scss'

function King(props) {

    return (
        <div className={styles.kingPage}>
            <button onClick={props.toggleIsBlocking}>Click me to prevent exit</button>
            <KingHero />
        </div>
    )
}

export default King
