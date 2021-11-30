import React from 'react'
import * as styles from './spotify.module.scss'
import Separator from '../../atoms/separator/separator'

function Spotify() {
    return (
        <div className={styles.spotify}>
            <h1>Sbrikki's Books Spotify playlist</h1>
            <p>
                The <strong>Sbrikki's Books</strong> Spotify playlist is available here<br/>
                Feel <strong>free</strong> to add songs, during meetings we will <strong>listen</strong> to it
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
            <Separator />
        </div>
    )
}

export default Spotify
