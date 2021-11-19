import React from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={ Home } />
        </Router>
    )
}

export default App
