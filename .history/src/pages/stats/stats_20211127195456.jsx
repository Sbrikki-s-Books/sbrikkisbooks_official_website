import React from 'react'
import * as styles from './stats.module.scss'
import * as firebase from '../../atoms/firebase'

const Stats = () => {
    return (
        <div className={styles.tmp}>
            <h1>Sbrikki's Books SEO score</h1>
            <a className={styles.link} href="https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fmike-cheek.github.io%2Fsbrikkisbooks_official_website%2F&crawltype=1">
                CLICK HERE TO SEE OUR SCORE
            </a>

        </div>
    )
}

export default Stats
