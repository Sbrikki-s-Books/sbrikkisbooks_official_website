import React, { useState } from 'react'
import * as styles from './layout.module.scss'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'

const Layout = ({children, isScrollable = true, isBlocking}) => {
    const [isScrollable, setIsScrollable] = useState(true)
    
    return (
        <>
            <NavBar isBlocking={isBlocking} />
            <div className={isScrollable? styles.layoutScrollable : styles.layoutNotScrollable} >
                {children}
            </div>
            <Footer />
        </>
        
    )
}

export default Layout
