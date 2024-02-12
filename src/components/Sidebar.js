"use client"
import React, { Suspense, useState } from 'react'
import fethcQuran from '@/utils/fetchAll'
import SidebarSurahs from './SidebarSurahs'
import SidebarJuzs from './SidebarJuzs'
import Loading from './Loading'
import SidebarPages from './SidebarPages'

const Sidebar = ({ id }) => {
  const [category, setCategory] = useState('chapters')
  const apiData = fethcQuran(category)

  return (
   <div className='w-full '>
     <div className='w-full border-r border-third pt-10'>
      <div className='flex bg-third justify-evenly px-4 py-2'>
        <button className={`${category === 'chapters' ? 'bg-white shadow-md' : 'hover:bg-gray-200'}  rounded-full duration-300 px-5 py-1.5 `} onClick={() => setCategory('chapters')}>Surah</button>
        <button className={`${category === 'juzs' ? 'bg-white rounded-full shadow-md' : ' hover:bg-gray-200'} rounded-full duration-300 px-6 py-1.5 `} onClick={() => setCategory('juzs')}>Juz</button>
        <button className={`${category === 'pages' ? 'bg-white rounded-full shadow-md' : ' hover:bg-gray-200'} rounded-full duration-300 px-5 py-1.5 `} onClick={() => setCategory('pages')}>Page</button>
      </div>
      {
        category === 'chapters' &&
        <Suspense fallback={<Loading />}>
          <SidebarSurahs id={id} data={apiData} category={category} />
        </Suspense>
      }
      {
        category === 'juzs' &&
        <Suspense fallback={<Loading />}>
          <SidebarJuzs data={apiData} category={category} />
        </Suspense>
      }
      {
        category === 'pages' &&
        <Suspense fallback={<Loading />}>
          <SidebarPages />
        </Suspense>
      }

    </div>
   </div>
  )
}

export default Sidebar