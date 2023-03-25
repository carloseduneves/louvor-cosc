import React from 'react'
import './Song.css';

function Song({name, letter, video}) {
  return (
    <div className="box">
        <h2 className='title'>{name}</h2>
        <div className='options'>
         
              <a href={letter} className='links'>letra</a>
         
               <a href={video} className='links'>ouvir</a>
           
        </div>
       
    </div>
  )
}

export default Song