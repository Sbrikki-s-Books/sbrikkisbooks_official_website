import React from 'react'
import * as styles from './layout.module.scss'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'

function Layout({children, isScrollable}) {
    return (
        <>
            <NavBar />
            <div className={isScrollable? styles.layoutScrollable : styles.layoutNotScrollable} >
                {children}
            </div>
            <Footer />
        </>
        
    )
}

export default Layout
