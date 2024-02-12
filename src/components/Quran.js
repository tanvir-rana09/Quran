'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Loading from './Loading';
import Card from './Card';
import Surah from './Surah';

const Quran = () => {
	const [data, setData] = useState([])
	const [quran, setQuran] = useState('chapters')

	useEffect(() => {
		const LastTry = async () => {
			const response = await fetch(`https://api.quran.com/api/v4/${quran}`, {
				cache: 'force-cache'
			});
			const results = await response.json()
			setData(results)

		}
		LastTry()
	}, [quran])
	return (
		<div className='bg-third/50'>
			<div className='flex mx-2 md:mx-5 2xl:mx-[15%] mb-5 pt-5 border-gray-300 border-b'>
				<button onClick={() => setQuran('chapters')} className={`text-xl px-5 py-0.5 hover:bg-third ${quran === 'chapters' ? 'border-b-2 border-black' : null}`} >Surah</button>
				<button onClick={() => setQuran('juzs')} className={`text-xl px-5 k py-0.5 hover:bg-third ${quran === 'juzs' ? 'border-b-2 border-black' : null}`} >Juz</button>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:px-5 px-2 '>
				<Suspense fallback={<Loading className={'h-[50vh]'} />} >
					{
						quran === 'chapters' && data?.chapters?.map((data) => (
							<Card key={data.id} name={data.name_simple} id={data.id} arabic={data.name_arabic} ayahs={data.verses_count} newName={data.translated_name.name} place={data.revelation_place} />
						))
					}
					{
						quran === 'juzs' && data?.juzs?.map((data) => (
							<div
								className='bg-third '
								key={data.id}>
								<p className='pl-3 py-0.5'>Juz {data.id}</p>
								<div className='flex flex-col '>
									{Object.keys(data.verse_mapping).map(key => (
										<Surah key={key} id={key} />
									))}
								</div>
							</div>
						))
					}
				</Suspense>
			</div>
		</div>
	)
}

export default Quran

