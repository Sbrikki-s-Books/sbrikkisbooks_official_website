import React from 'react'
import * as styles from './stats.module.scss'

const Stats = () => {
    return (
        <div className={styles.tmp}>
            <h1>We'll be here soon</h1>
            <p>Sbrikki's Books SEO score</p>
            <a className={styles.link} href="https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fmike-cheek.github.io%2Fsbrikkisbooks_official_website%2F&crawltype=1">
                CLICK HERE TO SEE OUR SCORE
            </a>
        </div>
    )
}

export default Stats
