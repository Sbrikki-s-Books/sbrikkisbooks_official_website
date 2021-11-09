import React from 'react'
import PlayersList from '../../atoms/playersList/playersList'


function ChoosePlayers(props) {
    return (
        <>
            <div className={styles.players}>
                <h2>How many players?</h2>
                <div className={styles.countPlayers}>
                    <button onClick={props.decreasePlayers}>
                        <p>-</p>
                    </button>
                    <p>{props.numPlayers}</p>
                    <button onClick={props.increasePlayers}>
                        <p>+</p>
                    </button>
                </div>

            </div>
            { props.start ?
                null
                :
                <form>
                    <PlayersList numPlayers={props.numPlayers} onClick={props.getPlayers}/>
                </form>
            }
        </>
    )
}

export default ChoosePlayers
