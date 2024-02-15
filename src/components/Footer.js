import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '@/Images/quran (3).png'

const Footter = () => {
	const social = [
		FaFacebook,FaInstagram,FaGithub,FaLinkedin,FaSquareXTwitter
	]
	return (
		<div className=' bg-third text-black mt-20 pt-10'>
			<Link href='/' className='flex items-center w-full justify-center'>
					<div className='md:w-10 w-6'>
						<Image className='w-full h-full object-cover' src={logo} alt='logo' quality={100} />
					</div>
					<h1 className='font-cinzel font-semibold tracking-wider md:text-xl'>QURAN.COM</h1>
				</Link>
			<section className="flex flex-wrap 2xl:px-[15%] xl:px-[10%]  justify-between p-5 flex-[5]">
				<div className="flex-[2]">
				<div className="flex items-center gap-2 ">
				</div>
					<p className='mt-3'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque exercitationem libero temporibus
						ut tempore minus, nisi repudiandae repellat aliquam iste quae possimus magnam enim quibusdam earum cumque
						minima consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, laboriosam ducimus et sit placeat debitis architecto quas, a delectus inventore beatae. Sapiente illum tempore ullam quasi eius mollitia, ut est!
					</p>
					<div className="icons mt-5 flex justify-between items-center">
								<div  className=" text-xl duration-200 p-2  rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"><FaFacebook/></div>
								<div  className=" text-xl duration-200 p-2 rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"><FaSquareXTwitter/></div>
								<div  className=" text-xl duration-200 p-2  rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"><FaLinkedin/></div>
								<div  className=" text-xl duration-200 p-2  rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"><FaGithub/></div>
								<div  className=" text-xl duration-200 p-2 rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"><FaInstagram/></div>
					</div>
				</div>
				
				<div >
				<h6 className="text-2xl pl-3">Contact Info</h6>
						<hr className='w-3/6 my-5 mt-2 border-black ml-3 border-y-2 '/>
					<div className=" flex flex-col gap-4">
					<div className="flex gap-4 items-center">
						<i className="fa-solid fa-phone  text-sky-500"></i>
						<div>
							<p>Phone</p>
							<a href="tel:+8801402434727">+8801402434727</a>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<i className="fa-solid fa-envelope text-sky-500"></i>
						<div>
							<p>Email</p>
							<a href="mailto:tanvir.rana.soikat@gmail.com">tanvir.rana.soikat@gmail.com</a>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<i className="fa-solid fa-location-dot text-sky-500"></i>
						<div>
							<p>Address</p>
							<a href="#">Mujibnagor Road,Mujibnagor,Meherpur</a>
						</div>
					</div>
					</div>
				</div>
			</section>
			<section className="copyright text-center bg-gray-900 text-white p-1">
				<div>&copy; 2023 Tanvir - All Rights Reserved.</div>
			</section>
		</div>
	)
}

export default Footter