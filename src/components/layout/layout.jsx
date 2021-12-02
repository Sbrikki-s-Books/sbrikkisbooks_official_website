import React from 'react'
import * as styles from './layout.module.scss'

function Layout({children, isScrollable}) {
    return (
        <div className={isScrollable? styles.layoutScrollable : styles.layoutNotScrollable} >
            {children}
        </div>
    )
}

export default Layout
