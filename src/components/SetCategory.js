'use client'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { setCategory } from '@/lib/CategorySlice'

const SetCategory = () => {
	const dispatch = useDispatch()
	const { category } = useSelector(state => state.category)
	console.log(category);
	return (
		<div className='flex mx-2 md:mx-5 2xl:mx-[15%] mb-5 pt-5 border-gray-300 border-b'>
			<button onClick={() => dispatch(setCategory(true))} className={`text-xl px-5 py-0.5 hover:bg-third ${category ? 'border-b-2 border-black' : null}`} >Surah</button>
			<button onClick={() => dispatch(setCategory(false))} className={`text-xl px-5 k py-0.5 hover:bg-third ${category ? null : 'border-b-2 border-black'}`} >Juz</button>
		</div>
	)
}

export default SetCategory