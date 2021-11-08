import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
    )
}

export default Seo
