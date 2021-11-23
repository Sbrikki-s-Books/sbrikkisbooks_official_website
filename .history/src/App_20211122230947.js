import React, { useState } from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route, Prompt } from 'react-router-dom'
import Spotify from './pages/spotify/spotify'
import NavBar from './components/navBar/navBar'
import KingHero from './pages/kingHero/kingHero'
import Stats from './pages/stats/stats'
import Seo from './components/seo/seo'

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
                <Route path="/sbrikkisbooks_official_website" children={<BlockingForm />} />
                <Route exact path="/sbrikkisbooks_official_website" element={ <Home /> } />
                <Route path="/sbrikkisbooks_official_website/spotify" element={ <Spotify /> } />
                <Route path="/sbrikkisbooks_official_website/stats" element={ <Stats /> } />
                <Route path="/sbrikkisbooks_official_website/king" element={ <KingHero /> } />
            </Routes>
            </div>
        </Router>
    )
}

function BlockingForm() {
    const isBlocking = true;

    return (
        <form
        onSubmit={event => {
            event.preventDefault();
            event.target.reset();
            setIsBlocking(false);
        }}
        >
        <Prompt
            when={isBlocking}
            message={location =>
            `Are you sure you want to go to ${location.pathname}`
            }
        />

        <p>
            Blocking?{" "}
            {isBlocking ? "Yes, click a link or the back button" : "Nope"}
        </p>

        <p>
            <button>Submit to stop blocking</button>
        </p>
        </form>
    );
}

export default App
