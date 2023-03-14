import React from 'react'

import music from '../assets/music.png';
import './Song.css';

const Music = music;
function Song({name, letter, video}) {
  return (
    <div className="box">
        <h2 className='title'>{name}</h2>
        <div className='options'>
          <button className='links'>
            <img src="" alt="Cifra" />
              <a href={letter} >letra</a>
          </button>
          <button className='links'
          >
            
           
            <a href={video}  target="_blank"  rel="noreferrer">
            <img src={Music} alt="Música"/>ouvir</a>
            </button>
           
        </div>
       
    </div>
  )
}

export default Song