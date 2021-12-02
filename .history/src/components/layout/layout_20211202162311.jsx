import React from 'react'
import * as styles from './layout.module.scss'

function Layout({children, isScrollable}) {
    return (
        <div className={styles.layout} >
            {children}
        </div>
    )
}

export default Layout
