import React from 'react'

function Song({name, letter, video}) {
  return (
    <div className="box">
        <h2>{name}</h2>
        <div>
            <a href={letter} className="links">letra/cifra</a> <a href={video} className="links">ouvir</a>
        </div>
    </div>
  )
}

export default Song