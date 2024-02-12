import React from 'react'
import Surah from './Surah';

const Juzs = async ({ juzs }) => {
	const data = await juzs;
	return (
		<div className='bg-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start  gap-5 px-5 grid-flow-dense'>
			{data.juzs.map((data) => (
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
			))}
		</div>
	)
}

export default Juzs