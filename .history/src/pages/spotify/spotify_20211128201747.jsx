import React from 'react'
import './spotify.module.scss'

function Spotify() {
    return (
        <div>
            <h1>Sbrikki's Books Spotify playlist</h1>
            <p>
                The <strong>Sbrikki's Books</strong> Spotify playlist is available here<br/>
                Feel free to add songs, during meetings we will listen to it
            </p>
            <iframe 
                src="https://open.spotify.com/embed/playlist/3XWNoTPdXdIRapbK86Y11l" 
                width="100%"
                height="380" 
                frameBorder="0" 
                allowtransparency="true" 
                allow="encrypted-media"
                title="Spotify"
            ></iframe>
        </div>
    )
}

export default Spotify
