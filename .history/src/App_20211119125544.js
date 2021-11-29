import React from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Spotify from './pages/spotify/spotify'
import NavBar from './components/navBar/navBar'

const App = () => {
    return (
        <Router>
            <Seo 
                title="Sbrikki's Books" 
                description="Sbrikki's Books - Book Club"
                keywords="sbrikki, books, sbrikkis, book, club, libro"
            />
            <NavBar />
            <Routes>
                <Route exact path="/" component={ Home } />
                <Route path="/spotify" component={ Spotify } />
            </Routes>
        </Router>
    )
}

export default App