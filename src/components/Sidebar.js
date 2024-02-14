"use client"
import React, { Suspense, useState } from 'react'
import fethcQuran from '@/utils/fetchAll'
import SidebarSurahs from './SidebarSurahs'
import SidebarJuzs from './SidebarJuzs'
import Loading from './Loading'
import SidebarPages from './SidebarPages'
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useRouter } from 'next/navigation';

const Sidebar = ({ id = null }) => {
  const [category, setCategory] = useState('chapters')
  const apiData = fethcQuran(category)
  const [sidebar, setSidebar] = useState(true)
  const router = useRouter()

  const chapters = () => {
    setCategory('chapters')
    router.push(`${id}`)
  }
  const juzs = () => {
    setCategory('juzs')
    // router.push(`/juz/1`)
  }
  const pages = () => {
    setCategory('pages')
    // router.push(`/page/1`)
  }
  return (
    <div className={` bg-white top-0 left-0 h-screen overflow-hidden transition ease-in-out duration-500 flex items-start mt-14 pt-2`}>
      <div className={`h-full border-r border-third w-[18rem] ${sidebar ? 'block' : 'hidden'}`} >
        <div className='flex bg-third justify-evenly py-3'>
          <button className={`${category === 'chapters' ? 'bg-white shadow-md' : 'hover:bg-gray-200'}  rounded-full duration-300 px-5 py-1.5 `} onClick={chapters}>Surah</button>
          <button className={`${category === 'juzs' ? 'bg-white rounded-full shadow-md' : ' hover:bg-gray-200'} rounded-full duration-300 px-6 py-1.5 `} onClick={juzs}>Juz</button>
          <button className={`${category === 'pages' ? 'bg-white rounded-full shadow-md' : ' hover:bg-gray-200'} rounded-full duration-300 px-5 py-1.5 `} onClick={pages}>Page</button>
          <button className={`bg-white rounded-full shadow-md hover:bg-gray-200'} rounded-full duration-300 p-2.5 `} onClick={() => setSidebar(false)}>{<RxCross1 />}</button>

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
      <button onClick={() => setSidebar(!sidebar)} className={`px-6 py-2 mt-20 fixed bg-third my-5 text-3xl shadow-md rounded-r-full ${sidebar ? 'hidden ' : 'block'}`}><HiOutlineBars3BottomLeft /></button>
    </div>
  )
}

export default Sidebar