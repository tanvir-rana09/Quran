'use client'
import React, { useRef, useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";

const Allaudio = ({ audio }) => {
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
			<button className='flex items-center gap-2 rounded-md hover:bg-gray-100 p-2 font-semibold' onClick={handleAudio}>
				
				{
					btn ? <div className='flex items-center gap-2'><FaCirclePlay size={18} /></div> : <div className='flex items-center gap-2'><FaCirclePause size={25} /></div>
				}
			</button>
		</div>
	)
}

export default Allaudio