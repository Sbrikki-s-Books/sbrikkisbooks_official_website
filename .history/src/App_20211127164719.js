import React, { useState } from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useBlocker } from './atoms/useBlocker'
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
                title="Sbrikki's Books - A Book Club for Everyone" 
                description="Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink."
                keywords="sbrikki, books, sbrikki's books, book, club, libro"
            />
            <NavBar />
            <BlockingForm />
            <div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route exact path="/sbrikkisbooks_official_website" element={ <Home /> } />
                    <Route exact path="/sbrikkisbooks_official_website/spotify" element={ <Spotify /> } />
                    <Route exact path="/sbrikkisbooks_official_website/stats" element={ <Stats /> } />
                    <Route exact path="/sbrikkisbooks_official_website/king" element={ <King /> } />
                    <Route exact path="/sbrikkisbooks_official_website/404" element={ <Page404 /> } />
                    <Route path="*" element={ <Page404 /> } />
                </Routes>
            </div>
        </Router>
    )
}

function BlockingForm() {
    let [isBlocking, setIsBlocking] = useState(false);
  
    useBlocker(
      () => "Hello from usePrompt -- Are you sure you want to leave?",
      isBlocking
    );
    // useBlocker(
    //   () => "Hello from useBlocker -- are you sure you want to leave?",
    //   isBlocking
    // );
  
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          setIsBlocking(false);
        }}
      >
        <p>
          Blocking? {isBlocking ? "Yes, click a link or the back button" : "Nope"}
        </p>
  
        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={event => {
              setIsBlocking(event.target.value.length > 0);
            }}
          />
        </p>
  
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    );
  }

export default App
