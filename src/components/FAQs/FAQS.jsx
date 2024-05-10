import React from 'react';
import Button from '../button/Button';

export default function FAQS() {
	return (
		<section>
			<div className='text-white flex flex-col items-center justify-center gap-6 w-[90%] mx-auto p-6 md:p-8'>
				<h2 className='text-[2rem] md:text-5xl font-semibold'>FAQs</h2>
				<p className='text-center text-[0.9375rem] md:text-2xl'>
					Find answers to commonly asked questions about{' '}
					<span className='text-neon'>Crypto</span>World and its benefits.
				</p>

				<div className='md:w-4/5 border-2 border-neon rounded-lg p-6 md:p-8'>
					<h3 className='text-xs md:text-2xl mb-3 md:mb-4'>
						What is <span className='text-neon'>Crypto</span>world?
					</h3>

					<p className='text-[0.625rem] md:text-2xl'>
						{' '}
						<span className='text-neon'>Crypto</span>world is a cryptocurrency
						website that provides updates on new coin launches, offers
						information about the coins, and guides users on how to purchase
						them. It also serves as an investment platform where you can invest
						and earn.
					</p>
				</div>

				<div className='md:w-4/5 border-2 border-neon rounded-lg p-6 md:p-8'>
					<h3 className='text-xs md:text-2xl mb-3 md:mb-4'>
						What is <span className='text-neon'>Crypto</span>world?
					</h3>

					<p className='text-[0.625rem] md:text-2xl'>
						{' '}
						<span className='text-neon'>Crypto</span>world is a cryptocurrency
						website that provides updates on new coin launches, offers
						information about the coins, and guides users on how to purchase
						them. It also serves as an investment platform where you can invest
						and earn.
					</p>
				</div>

				<div className='md:w-4/5 border-2 border-neon rounded-lg p-6 md:p-8'>
					<h3 className='text-xs md:text-2xl mb-3 md:mb-4'>
						What is <span className='text-neon'>Crypto</span>world?
					</h3>

					<p className='text-[0.625rem] md:text-2xl'>
						{' '}
						<span className='text-neon'>Crypto</span>world is a cryptocurrency
						website that provides updates on new coin launches, offers
						information about the coins, and guides users on how to purchase
						them. It also serves as an investment platform where you can invest
						and earn.
					</p>
				</div>

				<p className='text-[0.9375rem] md:text-[2.5rem]'>
					Still have questions?
				</p>
				<p className='text-[0.8125rem] md:text-2xl'>
					contact us for further assistance
				</p>
				<Button className='text-black '>Contact</Button>
			</div>
		</section>
	);
}
