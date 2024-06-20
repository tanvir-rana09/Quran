'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Loading from './Loading';
import fethcQuran from '@/utils/fetchAll';
import Juzs from './Juzs';
import Surahs from './Surahs';

const Quran = () => {
	const [quran, setQuran] = useState(true)

	const juzs = fethcQuran(`juzs`)
	const chapters = fethcQuran(`chapters`)
	return (
		<div className='bg-third/50 max-w-7xl mx-auto'>
			<div className='flex mx-2 md:mx-5 mb-5 pt-5 border-gray-300 border-b'>
				<button onClick={() => setQuran(!quran)} className={`text-xl px-5 py-0.5 hover:bg-third ${quran? 'border-b-2 border-black' : null}`} >Surah</button>
				<button onClick={() => setQuran(!quran)} className={`text-xl px-5 k py-0.5 hover:bg-third ${!quran ? 'border-b-2 border-black' : null}`} >Juz</button>
			</div>

			<div className=''>
				<Suspense fallback={<Loading className={'h-[50vh]'} />} >
					{
						quran  ? <Surahs surahs={chapters}/>:<Juzs juzs ={juzs}/>
					}
					{
						// quran === 'juzs' && <Juzs juzs ={juzs}/>
					}
				</Suspense>
			</div>
		</div>
	)
}

export default Quran

