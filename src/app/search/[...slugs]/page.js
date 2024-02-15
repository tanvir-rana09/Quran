import React from 'react'
import fetchQuran from '@/utils/fetchAll'
import Card from '@/components/Card'
const page = async({params}) => {
const query = params.slugs[0].replace('-', ' ')
const {chapters} = await fetchQuran('chapters')
  return (
	<div>
    <div className='text-xl px-5 py-3 bg-third text-center'>Your Search Surah</div>
    <div className='grid grid-cols-1 gap-3 p-5'>
    {
      chapters.filter(chapter=>(
        chapter.name_simple.toLowerCase().includes(query)
      )).map((data) => (
        <Card key={data.id} name={data.name_simple} id={data.id} arabic={data.name_arabic} ayahs={data.verses_count} newName={data.translated_name.name} place={data.revelation_place}/>
      ))
    }
    </div>
  </div>
  )
}

export default page