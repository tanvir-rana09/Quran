"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'


const Card = ({
	name, id, newName, arabic, ayahs, place
}) => {
	const [color, setColor] = useState(false)

	return (
		<Link href={`/${id}`}>
			<div onMouseOver={() => setColor(true)} onMouseOut={() => setColor(false)} className='flex justify-between items-center p-3 border  bg-white rounded-sm shadow-sm cursor-pointer hover:scale-[1.02] duration-300 hover:border-five'>
				<div className='flex items-center gap-3'>
					<div className='relative'>
						<div className={`m-1 p-5 rounded-md rotate-[45deg] aspect-square duration-300 ${color ? 'bg-five text-white' : 'bg-third text-black'}`}>
						</div>
						<p className={`absolute top-0 left-0 flex items-center justify-center w-full h-full font-semibold ${color ? ' text-white' : 'text-black'}`}>{id}</p>
					</div>
					<div>
						<div className=' font-semibold text-lg capitalize'>{name} - {place}</div>
						<div className={`-mt-1 text-sm ${color ? ' text-five' : ' text-gray-400'}`}>{newName}</div>
					</div>
				</div>
				<div>
					<p className='font-amiri text-lg text-right'>{arabic}</p>
					<p className={`-mt-1 text-sm ${color ? ' text-five' : ' text-gray-400'}`}>{ayahs} Ayahs</p>
				</div>
			</div>
		</Link>
	)
}

export default Card