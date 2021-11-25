import React from 'react'
import Type from '../../atoms/type/type'
import * as styles from './text.module.scss'

const title = "Welcome to Sbrikki's Books";
const subtitle = "Join us in this Book Club for nights full of reading";

const Text = () => {
    return (
        <div className={styles.text}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h3><Type /></h3>
        </div>
    )
}

export default Text
