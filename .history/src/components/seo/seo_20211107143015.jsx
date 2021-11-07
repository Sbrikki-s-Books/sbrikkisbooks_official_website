import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content="sbrikki, books, sbrikkis, book, club, libro" />
        </Helmet>
    )
}

export default Seo
