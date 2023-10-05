import React from 'react'
import Image from 'next/image'

function Stakead() {
  return (
    <div>
        <img
          src="stake50.gif"
          width={350}
          height={200}
          alt="stake.com"
          onError={(e) => console.error('Error loading image', e)}
        />
    </div>
  )
}

export default Stakead