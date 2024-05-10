import {
	FaFacebook,
	FaLinkedinIn,
	FaRegCopyright,
	FaYoutube,
} from 'react-icons/fa';
import worldImg from '../../../public/assets/worldImg.svg';
import line from '../../../public/assets/line.svg';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className='flex items-center flex-col justify-center bg-neon2 p-6 md:p-10'>
			<div className='w-[95%] md:w-[90%] '>
				<div className='w-full relative flex items-start justify-between text-black mb-4'>
					<div className='text-white relative'>
						<h2 className='md:text-[2.25rem]'>
							<span className='text-neon'>crypto</span>world{' '}
						</h2>

						<div className='w-[9rem] h-[4.88625rem] md:w-[31.3125rem] md:h-[17rem] mt-[-2rem] md:mt-[-4rem]'>
							<Image
								src={worldImg}
								alt='worldImg'
								width={0}
								height={0}
								sizes='100%'
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
					</div>

					<div className='flex items-start justify-between gap-2 md:gap-4 text-center'>
						<ul className='text-[0.4375rem] md:text-base'>
							<h4 className='text-[0.5rem] md:text-2xl font-semibold'>
								About us
							</h4>
							<li className='mb-1'>Contact us</li>
							<li className='mb-1'>FAQs</li>
							<li className='mb-1'>Support</li>
							<li className='mb-1'>Terms of Use</li>
							<li className='mb-1'>Register</li>
						</ul>
						<ul className='text-[0.4375rem] md:text-base'>
							<h4 className='text-[0.5rem] md:text-2xl font-semibold'>
								Privacy Policy
							</h4>
							<li className='mb-1'>Affiliates</li>
							<li className='mb-1'>Partners</li>
							<li className='mb-1'>Investors</li>
							<li className='mb-1'>Blog</li>
							<li className='mb-1'>News</li>
						</ul>
						<ul className='text-[0.4375rem] md:text-base'>
							<h4 className='text-[0.5rem] md:text-2xl font-semibold'>
								Help Center
							</h4>
							<li className='mb-1'>Community</li>
							<li className='mb-1'>Partners</li>
							<li className='mb-1'>Support</li>
							<li className='mb-1'>FAQs</li>
							<li className='mb-1'>News</li>
						</ul>
					</div>
				</div>

				<div className='mb-3 '>
					<Image
						src={line}
						alt='line'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>

				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center justify-between gap-1 md:gap-4  text-[0.4375rem] md:text-base'>
						<p className='flex items-center justify-center'>
							<FaRegCopyright />
							2024 <span className='text-neon'>crypto</span>
							world. All rights reserved.
						</p>

						<p>Privacy Policy</p>
						<p>Cookies Policy</p>
					</div>
					<div className='flex items-center justify-center gap-2 md:gap-4 text-[0.625rem] md:text-3xl cursor-pointer'>
						<FaFacebook />
						<AiFillInstagram />
						<FaXTwitter />
						<FaLinkedinIn />
						<FaYoutube />
					</div>
				</div>
			</div>
		</footer>
	);
}
