import {Sidebar} from '@/app/Index'
import React from 'react'

const page = ({ params }) => {
  const { id } = params
  return (
    <div><Sidebar id={id}/></div>
  )
}

export default page