import Image from 'next/image'
import React from 'react'
import img from '../public/me.jpg'

const Ex = () => {
  return (
    <div>
      <h1>Image Try</h1>
      <Image src={img} alt="" height="300" width="200" placeholder='blur' />
    </div>
  )
}

export default Ex