'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Loading from './Loading';
import fethcQuran from '@/utils/fetchAll';
import Juzs from './Juzs';
import Surahs from './Surahs';

const Quran = () => {
	const [quran, setQuran] = useState('chapters')

	const juzs = fethcQuran(`juzs`)
	const chapters = fethcQuran(`chapters`)
	return (
		<div className='bg-third/50'>
			<div className='flex mx-2 md:mx-5 2xl:mx-[15%] mb-5 pt-5 border-gray-300 border-b'>
				<button onClick={() => setQuran('chapters')} className={`text-xl px-5 py-0.5 hover:bg-third ${quran === 'chapters' ? 'border-b-2 border-black' : null}`} >Surah</button>
				<button onClick={() => setQuran('juzs')} className={`text-xl px-5 k py-0.5 hover:bg-third ${quran === 'juzs' ? 'border-b-2 border-black' : null}`} >Juz</button>
			</div>

			<div className=''>
				<Suspense fallback={<Loading className={'h-[50vh]'} />} >
					{
						quran === 'chapters' && <Surahs surahs={chapters}/>
					}
					{
						quran === 'juzs' && <Juzs juzs ={juzs}/>
					}
				</Suspense>
			</div>
		</div>
	)
}

export default Quran

