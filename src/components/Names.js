import Link from 'next/link'
import React from 'react'

const Names =async  ({ data, id,search }) => {
	const names = await data
	return (
		<div className='h-[55rem] overflow-scroll pb-32'>
			{
				names?.chapters?.filter((name)=>(
					name.name_simple.toLowerCase().includes(search)
				)).map(name => (
					<Link href={`/${name.id}`}
					className={`flex gap-2 px-3 py-2  ${parseInt(id) == name.id ? 'bg-third font-semibold' : 'hover:bg-gray-100'}`}
					key={name.id}>
						<p>{name.id}</p>
						<p >{name.name_simple}</p>
					</Link>
				))
			}
		</div>
	)
}

export default Names