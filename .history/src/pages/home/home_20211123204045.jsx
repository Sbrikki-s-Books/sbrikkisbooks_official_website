import React, { useState } from 'react';
import './home.module.scss';
import Hero from '../../components/hero/hero';
import Separator from '../../atoms/separator/separator'
import Page404 from '../page404/page404';

const Gigi = () => {
    const [showGigi, setShowGigi] = useState(false);

    function handleKeyPress(e) {
        console.log(e)
        if(e.key === 'g'){
            setShowGigi(!showGigi);
        }
    }
    return (
        <div>
            <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
            {
                showGigi ?
                    <Page404 />
                :
                    null
            }
        </div>
    )
}

const Home = () => {

    return (
        <>
            <Hero />
            <Separator />
            <Gigi />
        </>
    )
}

export default Home
