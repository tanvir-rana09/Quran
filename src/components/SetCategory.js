'use client'
import React from 'react'


const SetCategory = ({setQuran, setData,quran}) => {
	return (
		<div className='flex mx-2 md:mx-5 2xl:mx-[15%] mb-5 pt-5 border-gray-300 border-b'>
			<button onClick={() => setQuran('chapters')} className={`text-xl px-5 py-0.5 hover:bg-third ${quran === 'chapters' ? 'border-b-2 border-black' : null}`} >Surah</button>
			<button onClick={() => setQuran('juzs')} className={`text-xl px-5 k py-0.5 hover:bg-third ${quran === 'juzs' ? 'border-b-2 border-black' : null}`} >Juz</button>
		</div>
	)
}

export default SetCategory