import Image from 'next/image'
import React from 'react'
import banner from '../Images/quran (1).jpg'
import logo from '../Images/quran (3).png'
import text from '../Images/pngwing.com (2).png'
import Input from '@/components/Input'
const Hero = () => {

	return (
		<div>
			<div className='relative' >
				<div className='flex md:pt-16 pt-10 h-[35rem]'>
					<Image className='w-full h-full object-cover' priority src={banner} alt="The Holy Book" />
				</div>
				<div className='absolute top-0 py-2 md:py-3 shadow-md left-0 flex justify-between items-center w-full bg-third md:px-5 px-1'>
					<div className='md:w-10 w-6 flex items-center '>
						<Image className='w-full h-full object-cover' src={logo} alt='logo' quality={100} />
						<h1 className='font-cinzel font-semibold tracking-wider md:text-xl'>QURAN.COM</h1>
					</div>
					<div className='sm:w-[30rem] md:w-[35rem] lg:w-[40rem]'>
						<Input />
					</div>
				</div>
				<div className='flex absolute top-20 md:left-20 md:top-60 left-0 sm:left-10 sm:top-32 flex-col justify-center items-center text-xl text-five 2xl:px-[15%]'>
					<div className='w-20 '>
						<Image src={text} alt='' />
					</div>
					<h1 className='font-cinzel font-semibold text-sm md:text-lg'>The Holy Quran Made by Tanvir</h1>
					<p className='w-72 text-center text-xs md:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quia nostrum explicabo perspiciatis corporis non quos sint rem, sapiente quis?</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
