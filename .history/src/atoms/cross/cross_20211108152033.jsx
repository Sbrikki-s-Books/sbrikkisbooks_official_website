import React from 'react'
import cross from '../../assets/cross.svg'
import * as styles from './cross.module.scss'

function Cross() {
    return (
        <img src={cross} alt="Close" className={styles.cross} />
    )
}

export default Cross
