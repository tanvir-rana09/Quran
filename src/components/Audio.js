'use client'
import React, { useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Audio = ({ audio }) => {
	const ref = useRef(null)
	const [btn, setBtn] = useState(true)

	const handleAudio = () => {
		setBtn(!btn)
		if (btn) {
			ref.current.play()
		} else {
			ref.current.pause()
		}
	}
	return (
		<div className=''>
			<audio ref={ref} src={audio} height={100} width={200}  onEnded={()=>setBtn(!btn)}></audio>
			<button className='flex items-center gap-2 rounded-md hover:bg-gray-100 px-4 py-1.5 font-semibold' onClick={handleAudio}>
				
				{
					btn ? <div className='flex items-center gap-2'>Play <FaPlay size={15} /></div> : <div className='flex items-center gap-2'>Pause <FaPause size={15} /></div>
				}
			</button>
		</div>
	)
}

export default Audio