'use client'
import { useRouter } from 'next/navigation'
import React,{useState} from 'react'

const Input = () => {
	const [inp,setInp]=useState('')
	const router = useRouter()
	const handle=()=>{
		router.push(`/search/${inp.replace(' ','-')}`)
	}
	return (
		<div className='flex items-center w-full justify-between overflow-hidden  bg-white'>
			<input
				className='bg-transparent outline-none w-full md:pl-7 pl-1 py-1 md:py-3'
				type="text" value={inp} onChange={(e)=>setInp(e.target.value.toLowerCase())} placeholder='Search...' requird />
				<button onClick={handle} className='bg-[#2CA4AB] md:px-7 px-2 py-1 md:py-3 text-white'>Search</button>
		</div>
	)
}

export default Input