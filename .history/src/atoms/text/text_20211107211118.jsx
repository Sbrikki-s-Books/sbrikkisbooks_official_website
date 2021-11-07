import React from 'react'
import Type from '../../atoms/type/type'
import * as styles from './text.module.scss'

const title = "Welcome to Sbrikki's Books";
const subtitle = "Join us in this Book Club for nights full of reading";

function Text() {
    return (
        <div className={styles.text}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2><Type /></h2>
        </div>
    )
}

export default Text
