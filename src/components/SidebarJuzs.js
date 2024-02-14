import Link from 'next/link';
import React from 'react'

const SidebarJuzs = async ({ data }) => {
	const juzs = await data;
	return (
		<div className=''>
			<div>
				<h1 className='text-center bg-third py-2'>All Juzs</h1>
				<input className='w-[100%] mx-auto  px-1 py-2 outline-none text-center border-third border-b-2' type="text" name="juz" id="juz" placeholder={`Enter Juzs`} />
			</div>
			<div>

				<div className='flex flex-col px-3 py-2 h-[55rem] overflow-scroll'>
					{
						juzs.juzs.map((juz) => (
							<Link href={`juz/${juz.id}`} className='hover:bg-gray-100 px-4 py-2 cursor-pointer' key={juz.id}>Juz {juz.id}</Link>
						))
					}
					
				</div>
			</div>
		</div>
	)
}

export default SidebarJuzs