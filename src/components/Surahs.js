import React from 'react'
import Card from './Card'

const QuranGrid = async ({ surahs }) => {
	const datas = await surahs;
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:px-5 px-2 '>
				{
					datas?.chapters.map((data) => (
						<Card key={data.id} name={data.name_simple} id={data.id} arabic={data.name_arabic} ayahs={data.verses_count} newName={data.translated_name.name} place={data.revelation_place}/>
					))
				}
			</div>
		</div>
	)
}

export default QuranGrid