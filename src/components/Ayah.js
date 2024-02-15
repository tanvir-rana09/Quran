import fethcQuran from '@/utils/fetchAll'
import Link from 'next/link';
import React from 'react'

const Ayah = async ({ id, ayat }) => {
	const ayahs = await fethcQuran(`chapters/${id}`)
	const { chapter } = await ayahs
	const lengths = chapter?.verses_count
	const arr = []
	for (let i = 1; i <= lengths; i++) {
		arr.push(i)
	}
	console.log(ayat)
	return (
		<div className='flex flex-col h-[55rem] overflow-scroll pb-32'>
			{
				arr?.filter((ayah) => (
					ayah.toString().includes(ayat)
				)).map((ayah, index) => (
					<Link href={`#ayah${index}`} className={`flex gap-2 px-2.5 py-1.5 hover:bg-gray-100`} key={ayah}>{ayah}</Link>
				))
			}
		</div>
	)
}

export default Ayah