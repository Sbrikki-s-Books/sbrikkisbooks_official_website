import React from 'react'
import Type from '../../atoms/type/type'

const title = "Welcome to Sbrikki's Books";
const subtitle = "Join us in this Book Club for nights full of reading";

function Text() {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2><Type /></h2>
            <p>"We'll be here soon"</p>
        </div>
    )
}

export default Text
