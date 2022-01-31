import React from 'react'
import * as styles from './layout.module.scss'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'

const Layout = ({children, isBlocking}) => {

    return (
        <div id="top">
            <NavBar isBlocking={isBlocking} />
            <div className={styles.layout} >
                {children}
            </div>
            <Footer />
        </div>
        
    )
}

export default Layout
