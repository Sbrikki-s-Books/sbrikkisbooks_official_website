import React, { useState, useEffect } from 'react'
import * as styles from './kingHero.module.scss'
import ChoosePlayers from '../../components/choosePlayers/choosePlayers';
import Play from '../../components/play/play';

const KingHero = () => {

    const [start, setStart] = useState(false);
    const [numPlayers, setNumPlayers] = useState(5);
    const [players, setPlayers] = useState([]);
    const [rounds, setRounds] = useState(0);
    const [removeCards, setRemoveCards] = useState(0);
    const deck = 40;
    let playersTmp = [];

    window.onbeforeunload(() => {
        alert("Are you sure mbare ?")
    })


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
        let check = true;
        for(let i = 0; i < numPlayers; i++ ){
            let name = document.getElementById("player"+i).value;
            if(name === "") check = false;
        }
        
        if(check){
            for(let i = 0; i < numPlayers; i++ ){
                let name = document.getElementById("player"+i);
                playersTmp.push(
                    {
                        id: i,
                        key: i,
                        name: name.value,
                    }
                );
            }
            setPlayers(playersTmp);
            setStart(true);
            setRounds(parseInt(deck/numPlayers));
            setRemoveCards(deck % numPlayers);
        }
        
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
                    <h3>You have to remove {removeCards} {removeCards === 1 ? "card" : "cards" } from the deck</h3>
                :
                    null
            }

            {
                rounds > 0 ? 
                    <h3>We are going to play {rounds} {rounds === 1 ? "round" : "rounds" }</h3>
                :
                    <h3>Insert names to start</h3>
            }

            {
                start ?
                    <div className={styles.play}>
                        <Play players={players} rounds={rounds} />
                    </div> 
                :
                    null
            }

        </div>
    )
}

export default KingHero
