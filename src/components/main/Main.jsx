import Image from 'next/image';
import Button from '../button/Button';

import mainImg from '../../../public/assets/mainImg.svg';

export default function Main() {
	return (
		<main className='w-[90%] m-auto h-full flex items-center justify-center my-6'>
			<div className='flex items-center justify-center flex-col text-center '>
				<h1 className='mb-4 text-3xl sm:text-4xl md:text-6xl text-white md:w-9/12 font-medium'>
					Discover the Next Big crypto opportunities
				</h1>
				<p className='text-white text-sm md:text-xl mb-4 font-medium md:w-9/12'>
					Stay ahead of the game with our latest updates on the most promising
					coins launching soon. Learn how to invest and maximize your profits.
				</p>

				<Button>Buy coin now</Button>

				<div className='mt-6 w-[20.375rem] h-[7.75rem] md:w-[89.25rem] md:h-[20.5rem]'>
					<Image
						src={mainImg}
						alt='mainImg'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: '100%' }}
					/>
				</div>
			</div>
		</main>
	);
}
