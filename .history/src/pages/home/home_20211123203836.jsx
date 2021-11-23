import React, { useState } from 'react';
import './home.module.scss';
import Hero from '../../components/hero/hero';
import Separator from '../../atoms/separator/separator'

const [showGigi, setShowGigi] = useState(false);

const Gigi = () => {
    function handleKeyPress(e) {
        if(e === 'g'){
            setShowGigi(!showGigi)
        }
    }
    return (
        <div>
            <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
        </div>
    )
}

const Home = () => {

    return (
        <>
            <Hero />
            <Separator />
        </>
    )
}

export default Home
