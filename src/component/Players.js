import React from 'react'
import { Players } from '../share/ListOfPlayer'
import { useState } from 'react'

export default function Player() {
    const [player, setPlayer] = useState([])
    return (
        <div className='container'>
            {Players.map((player) => (

                <div className='card'>
                    <img src={player.img} width="460" height="345" />
                    <h3>{player.name}</h3>
                    <p className='title'>{player.club}</p>
                    <p><button onClick={() => { setPlayer(player) }}>
                        <a href='#popup1' id='openPopUp'>Detail</a>
                    </button></p>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={player.img} />
                    <h2>{player.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {player.info}
                    </div>
                </div>
            </div>
        </div>
    )
}


