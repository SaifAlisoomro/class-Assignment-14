import Link from 'next/link'
import React from 'react'


function Button() {
  return (
    <div className='w-9/12 h-52 mx-auto'>
    <Link href={"/"}>  <button className='px-3 py-2 rounded-md bg-blue-600 font-sans font-bold text-white'>Click Back</button></Link>
    </div>
  )
}

export default Button
