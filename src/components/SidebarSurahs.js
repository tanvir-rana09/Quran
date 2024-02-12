'use client'
import React, { Suspense, useState } from 'react'
import Names from './Names'
import Ayah from './Ayah'
import Loading from './Loading'

const SidebarSurahs = ({ id, data, category }) => {
	const [search, setSearch] = useState('')
	const [ayah, setAyah] = useState('')

	return (
		<div className='grid grid-cols-3'>
			<div className=' col-span-2 border-r border-third'>
				<h1 className='text-center bg-third py-2'>All Surah</h1>
				<div className={'w-full flex justify-center'}>
					<input className='w-[100%] mx-auto  px-2 py-2 outline-none text-center border-third border-b-2' value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="surah" id="surah" placeholder='search surah' />
				</div>
				<div>
					<Suspense fallback={<Loading />}>
						<Names data={data} category={category} id={id} />
					</Suspense>
				</div>
			</div>
			<div>
				<h1 className='text-center bg-third py-2'>Ayahs</h1>
				<input className='w-[100%] mx-auto  px-1 py-2 outline-none text-center border-third border-b-2' value={ayah} onChange={(e) => setAyah(e.target.value)} type="text" name="verse" id="verse" placeholder='enter ayah' />
				<div>
					<Suspense fallback={<Loading />}>
						<Ayah id={id} />
					</Suspense>
				</div>
			</div>
		</div>
	)
}

export default SidebarSurahs