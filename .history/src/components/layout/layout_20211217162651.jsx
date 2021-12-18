import React, { useState } from 'react'
import * as styles from './layout.module.scss'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'

const Layout = ({children, isBlocking}) => {
    const [isScrollable, setIsScrollable] = useState(true)

    const setScrolling = () => {
        setIsScrollable(true)
    }

    const setNotScrolling = () => {
        setIsScrollable(false)
    }

    return (
        <>
            <NavBar isBlocking={isBlocking} setScrolling={setScrolling} setNotScrolling={setNotScrolling} />
            <div className={isScrollable? styles.layoutScrollable : styles.layoutNotScrollable} >
                {children}
            </div>
            <Footer />
        </>
        
    )
}

export default Layout
