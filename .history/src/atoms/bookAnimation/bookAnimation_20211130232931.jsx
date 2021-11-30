import React from 'react'
import bookLoading from '../../assets/book-paging.gif'
import * as styles from './bookAnimation.module.scss'

function BookAnimation() {
    return (<>
        <img
            src={bookLoading}
            alt="Sbrikki's Books Reading..."
            className={styles.gif}
        />
        <div className="tenor-gif-embed" data-postid="15796161" data-share-method="host" data-aspect-ratio="0.840625" data-width="100%"><a href="https://tenor.com/view/reading-read-leyendo-book-libro-gif-15796161">Reading Leyendo Sticker</a>from <a href="https://tenor.com/search/reading-stickers">Reading Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </>)
}

export default BookAnimation
