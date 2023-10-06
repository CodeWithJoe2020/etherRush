import React from 'react'
import Image from 'next/image'

function Stakead() {
  return (
    <div>
        <Image
          src="/stake50.gif"
          width={320}
          height={50}
          alt="stake.com"
          onError={(e) => console.error('Error loading image', e)}
        />
    </div>
  )
}

export default Stakead