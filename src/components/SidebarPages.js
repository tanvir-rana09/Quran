import React from 'react'

const SidebarPages = () => {
	const pages = []
	for (let i = 1; i <= 604; i++) {
		pages.push(i)
	}
  return (
	<div className=''>
			<div>
				<h1 className='text-center bg-third py-2'>All Pages</h1>
				<input className='w-[100%] mx-auto  px-1 py-2 outline-none text-center border-third border-b-2' type="text" name="juz" id="juz" placeholder={`Enter Page Number`} />
			</div>
			<div className='h-[55rem] overflow-scroll'>

				<div className='flex flex-col px-3 py-2'>
					{
						pages.map((page) => (
							<p className='hover:bg-gray-100 px-4 py-2 cursor-pointer' key={page}>Page {page}</p>
						))
					}
					
				</div>
			</div>
		</div>
  )
}

export default SidebarPages