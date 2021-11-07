import React from 'react'
import bookLoading from '../../assets/book-paging.gif'

function BookAnimation(props) {
    return (
        <img 
            src={bookLoading} 
            style={"width:"+props.width+";height:"+props.height+";"}
            alt="Reading..." 
        />
    )
}

export default BookAnimation
