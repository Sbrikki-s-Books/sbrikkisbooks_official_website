import React, { useState } from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Spotify from './pages/spotify/spotify'
import NavBar from './components/navBar/navBar'
import King from './pages/king/king'
import Stats from './pages/stats/stats'
import Seo from './components/seo/seo'
import Page404 from './pages/page404/page404'
import Blocking from './atoms/blocking'
import Footer from './components/footer/footer'
import Layout from './components/layout/layout'

const App = () => {

    const [isBlocking, setIsBlocking] = useState(false);
    const [isScrollable, setIsScrollable] = useState(true);

    const changeBlocking = () => {
        setIsBlocking(!isBlocking);
    }

    const startBlocked = () => {
        setIsBlocking(true);
    }

    const setScrolling = () => {
        setIsScrollable(true);
    }

    const setNotScrolling = () => {
        setIsScrollable(false);
    }
    
    return (
        <Router>
            <Seo
                title="Sbrikki's Books - A Book Club for Everyone" 
                description="Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink."
                keywords="sbrikki, books, sbrikki's books, book, club, libro"
            />
            <NavBar isBlocking={isBlocking} setScrolling={setScrolling} setNotScrolling={setNotScrolling}/>
            <Blocking isBlocking={isBlocking} setIsBlocking={setIsBlocking} />
            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route exact path="/sbrikkisbooks" element={ <Home /> } />
                    <Route exact path="/sbrikkisbooks/spotify" element={ <Spotify /> } />
                    <Route exact path="/sbrikkisbooks/stats" element={ <Stats /> } />
                    <Route exact path="/sbrikkisbooks/king" element={ <King isBlocking={isBlocking} toggleIsBlocking={changeBlocking} startBlocked={startBlocked} /> } />
                    <Route exact path="/sbrikkisbooks/404" element={ <Page404 /> } />
                    <Route path="*" element={ <Page404 /> } />
                </Routes>
            </Layout>
            <Footer setScrolling={setScrolling} setNotScrolling={setNotScrolling}/>
        </Router>
    )
}

export default App
