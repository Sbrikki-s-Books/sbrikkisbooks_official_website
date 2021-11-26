import React from 'react'
import * as styles from './stats.module.scss'

const Stats = () => {
    return (
        <div className={styles.tmp}>
            <h1>We'll be here soon</h1>
            <p>Sbrikki's Books SEO score</p>
            <a href="https://freetools.seobility.net/en/seocheck/mike-cheek.github.io"><img src="https://freetools.seobility.net/widget/widget.png?url=mike-cheek.github.io" alt="Seobility Score für mike-cheek.github.io"></a>
        </div>
    )
}

export default Stats
