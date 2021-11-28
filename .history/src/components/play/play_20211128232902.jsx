import React, {useEffect} from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {

    useEffect(() => {
        for(let i = 1; i <= props.rounds; i++){
            let calc = 50*i;
            document.getElementById('table'+i).style.left = `-${calc}px`;
        }
    }, [props])

    return(
        <form>
            {props.players.map((player,i) => {
                return(
                    <div key={player.key} id={'table'+i}>
                        <PlayerGame name={player.name} rounds={props.rounds} />
                    </div>
                    
                );
            })}
        </form>
    );
    
}

export default Play
