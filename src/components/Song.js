import React from 'react'

import './Song.css';

function Song({name, letter, video}) {
  return (
    <div className="box">
        <h2 className='title'>{name}</h2>
        <div className='options'>
          <div className='links'>
              <a href={letter} className="links">letra</a>
          </div>
          <div className='links'>
            <a href={video} className="links" target="_blank"  rel="noreferrer">ouvir</a>
            </div>
           
        </div>
       
    </div>
  )
}

export default Song