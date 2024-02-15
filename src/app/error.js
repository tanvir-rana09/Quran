'use client'

import Link from "next/link"

const error = () => {
  return (
	<div className='bg-third '>
    <p>Something! went Wrong</p>
    <Link href='/' className='bg-white px-5 py-2 font-semibold shadow-sm rounded-md'>Back</Link>
  </div>
  )
}

export default error