import React from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Spotify from './pages/spotify/spotify'
import NavBar from './components/navBar/navBar'

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" exact component={ Home } />
                <Route path="/spotify" component={ Spotify } />
            </Routes>
        </Router>
    )
}

export default App
