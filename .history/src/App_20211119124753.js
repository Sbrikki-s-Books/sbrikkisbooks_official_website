import React from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Spotify from './pages/spotify/spotify'
import NavBar from './components/navBar/navBar'

const App = () => {
    return (
        <Router>
            <NavBar />
            <Route exact path="/" component={ Home } />
            <Route path="/spotify" component={ Spotify } />

        </Router>
    )
}

export default App
