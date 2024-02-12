import React, { Suspense } from 'react'
import fetchQuranCom from '@/utils/fetchByQuran'
import Link from 'next/link'
import logo from '../Images/quran (3).png'
import Image from 'next/image'
import Loading from './Loading'

const Aside = async ({ id }) => {
	const surah = await fetchQuranCom(`surah/${id}/ar.alafasy`)
	const bangla = await fetchQuranCom(`surah/${id}/bn.bengali`)
	const { data } = surah

	return (
		<div className=''>
			<div className='flex justify-between items-center w-full fixed shadow bg-white z-20'>
				<Link href='/' className='flex items-center'>
					<div className='md:w-10 w-6'>
						<Image className='w-full h-full object-cover' src={logo} alt='logo' quality={100} />
					</div>
					<h1 className='font-cinzel font-semibold tracking-wider md:text-xl'>QURAN.COM</h1>
				</Link>
				<p className='z-30'><span className='text-xl font-semibold'>{data.englishName}</span>-{data.englishNameTranslation}</p>
			</div>
			<div className='pl-[18rem]'>
				<h1 className='text-center text-4xl font-semibold  pt-14'>{data.name}</h1>
				<div>
					<div className='flex justify-center gap-2'>
						<p>Revelation - {data.revelationType}</p>
						|
						<p>Ayah - {data.numberOfAyahs}</p>

					</div>
					<p className=' capitalize text-center'>Identifier - {data?.edition?.identifier}</p>
				</div>
			</div>
			<div className='flex flex-col ml-[18rem] '>
				<Suspense fallback={<Loading />}>
					{
						data?.ayahs?.map((ayah) => (
							<Suspense key={ayah.number} fallback={<Loading />}>
								<div
									className='border-b'>
									<p id={`ayah${ayah.number}`} className='font-lateef text-2xl m-1 my-10 text-center leading-loose' >{ayah.text}</p>
									{/* <audio src={ayah.audio} controls height={100} width={200}>hi</audio> */}
								</div>
							</Suspense>
						))
					}
				</Suspense>
			</div>
		</div>
	)
}

export default Aside