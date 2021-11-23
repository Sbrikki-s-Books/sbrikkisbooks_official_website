import React from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Spotify from './pages/spotify/spotify'
import NavBar from './components/navBar/navBar'
import King from './pages/king/king'
import Stats from './pages/stats/stats'
import Seo from './components/seo/seo'
import Page404 from './pages/page404/page404'

const App = () => {
    return (
        <Router>
            <Seo
                title="Sbrikki's Books" 
                description="Sbrikki's Books - Book Club"
                keywords="sbrikki, books, sbrikkis, book, club, libro"
            />
            <NavBar />
            <div>
            <Routes>
                <Route exact path="/sbrikkisbooks_official_website" element={ <Home /> } />
                <Route path="/sbrikkisbooks_official_website/spotify" element={ <Spotify /> } />
                <Route path="/sbrikkisbooks_official_website/stats" element={ <Stats /> } />
                <Route path="/sbrikkisbooks_official_website/king" element={ <King /> } />
                <Route path="*" element={ <Page404 /> } />
            </Routes>
            </div>
        </Router>
    )
}

export default App
