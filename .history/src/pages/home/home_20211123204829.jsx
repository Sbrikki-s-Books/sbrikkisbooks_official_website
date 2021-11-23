import React, { useState } from 'react';
import './home.module.scss';
import Hero from '../../components/hero/hero';
import Separator from '../../atoms/separator/separator'
import Page404 from '../page404/page404';

const Gigi = () => {

    function handleKeyPress(e) {
        console.log(e)
        if(e.key === 'g'){
            props.setShowGigi(!showGigi);
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
    const [showGigi, setShowGigi] = useState(false);

    return (
        <>
            <Hero />
            <Separator />
            <Gigi showGigi={showGigi} setShowGigi={setShowGigi} />
        </>
    )
}

export default Home
