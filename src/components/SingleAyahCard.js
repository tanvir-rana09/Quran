
import Audio from './Audio';
const SingleAyahCard = ({ ayah, page, juz, ruku, text, linkContent, audio,index }) => {
	return (
		<div className='py-2 px-3 xl:px-[10%] 2xl:px-[15%] scroll-my-44'>
			<div className='flex justify-center gap-5'>
				<div className='flex justify-center gap-5 items-center'>
				<p className='bg-third px-4 py-1 rounded-full shadow'>Juz - {juz}</p>
				<p className='bg-third px-4 py-1 rounded-full shadow'>Ayah - {ayah}</p>
				<p className='bg-third px-4 py-1 rounded-full shadow'>Ruku - {ruku}</p>
				</div >
				<Audio audio={audio}/>
			</div>
			<p id={`ayah${ayah}`} className='font-lateef text-3xl pt-2 text-center leading-loose' >{text}</p>
			
			<p id={`ayah${ayah}`} className='mb-2 text-sm text-center leading-relaxed font-tiro' >{linkContent}</p>
			<p className='px-4 py-1 text-center'>Page - {page}</p>
			<hr className='w-[80%] mx-auto' />
		</div>
	)
}

export default SingleAyahCard