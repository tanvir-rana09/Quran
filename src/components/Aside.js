import React, { Suspense } from 'react'
import fetchQuranCom from '@/utils/fetchByQuran'
import Link from 'next/link'
import logo from '../Images/quran (3).png'
import Image from 'next/image'
import Loading from './Loading'
import fetchQuran from '@/utils/fetchAll'
import SingleAyahCard from './SingleAyahCard'
import Allaudio from '@/components/Allaudio'

const Aside = async ({ id }) => {
	const banglaAyah = []
	const surah = await fetchQuranCom(`surah/${id}/ar.alafasy`)
	const bangla = await fetchQuranCom(`surah/${id}/bn.bengali`)
	const audio = await fetchQuran(`chapter_recitations/${id}/${id}`)
	const {audio_file} =audio
	const { data } = surah

	bangla?.data?.ayahs?.map((ayah) => {
		banglaAyah.push(ayah.text)
	})
	return (
		<div className='w-full'>
			<div className='flex py-3 px-2 gap-5 justify-between items-center w-full fixed shadow bg-white z-20 scroll-smooth snap-normal snap-center h-16 inset-0'>
				<Link href='/' className='flex items-center'>
					<div className='md:w-10 w-6'>
						<Image className='w-full h-full object-cover' src={logo} alt='logo' quality={100} />
					</div>
					<h1 className='font-cinzel font-semibold tracking-wider md:text-xl'>QURAN.COM</h1>
				</Link>
				<div className='flex items-center sm:gap-2'>
				<div className=''><Allaudio audio={audio_file.audio_url}/></div>
				<p className='z-30'><span className='font-semibold '>{data.englishName}</span>-{data.englishNameTranslation}</p>
				</div>
			</div>
			<div className='pt-32 flex flex-col  items-center'>
				<div className='flex items-center '><h1 className='text-center text-4xl font-semibold'>{data.name}</h1>
				</div>
				<div>
					<div className='flex justify-center gap-2'>
						<p>Revelation - {data.revelationType}</p>
						|
						<p>Ayah - {data.numberOfAyahs}</p>

					</div>
					<p className=' capitalize text-center mb-10'>Identifier - {data?.edition?.identifier}</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<Suspense fallback={<Loading />}>
					{
						data?.ayahs?.map((ayah, index) => {
							const linkContent = banglaAyah[index]
							return <Suspense key={ayah.number} fallback={<Loading />}>
								<SingleAyahCard ayah={ayah.numberInSurah} page={ayah.page} juz={ayah.juz} ruku={ayah.ruku} text={ayah.text} linkContent={linkContent} audio={ayah.audio} index={index}/>
							</Suspense>
						})
					}
				</Suspense>
			</div>
		</div>
	)
}

export default Aside