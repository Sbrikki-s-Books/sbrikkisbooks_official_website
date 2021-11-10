import React, { useState } from 'react'
import * as styles from './kingHero.module.scss'
import ChoosePlayers from '../choosePlayers/choosePlayers';

const KingHero = () => {

    const [start, setStart] = useState(false);
    const [numPlayers, setNumPlayers] = useState(5);
    const [players, setPlayers] = useState([]);
    const [rounds, setRounds] = useState(0);
    const [removeCards, setRemoveCards] = useState(0);
    const deck = 40;
    let playersTmp = [];

    const decreasePlayers = () => {
        if(numPlayers > 0){
            setNumPlayers(numPlayers-1)
        }
        if(numPlayers <= 0){
            alert("Mbare ocaca menu un cristiano nun si po fari");
        }
    }

    const increasePlayers = () => {
        if(numPlayers < 10){
            setNumPlayers(numPlayers+1)
        }
        if(numPlayers >= 10){
            alert("Mbare quantu spacchiu siti");
        }
    }

    const getPlayers = () => {
        for(let i = 0; i < numPlayers; i++ ){
            let name = document.getElementById("player"+i);
            playersTmp.push(
                {
                    id: i,
                    name: name.value,
                }
            );
        }
        setPlayers(playersTmp);
        setStart(true);
        setRounds((int)(deck/numPlayers));
        setRemoveCards(deck % numPlayers);
    }

    return (
        <div className={styles.kingHero} id="/king">
            <h1>Let's play King</h1>

            {
                start ?
                    null
                :
                <ChoosePlayers 
                    decreasePlayers={decreasePlayers}
                    increasePlayers={increasePlayers}
                    numPlayers={numPlayers}
                    getPlayers={getPlayers}
                />
            }

            {
                removeCards > 0 ? 
                    <h3>You have to remove ${removeCards} cards from the deck</h3>
                :
                    null
            }

        </div>
    )
}

export default KingHero
