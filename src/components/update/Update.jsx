import React from 'react';
import Cube from '../commons/Cube';

export default function Update() {
	return (
		<section className='flex items-center justify-center w-[90%] m-auto text-white p-6 md:p-8'>
			<div className='flex items-start justify-center flex-col w-full'>
				<h2 className='text-xl md:text-5xl md:w-2/4 mb-6'>
					Get Real-Time Alerts on New Coin Launches
				</h2>

				<div className='flex items-start justify-center gap-3 flex-col md:flex-row'>
					<div className='flex items-start justify-start flex-col'>
						<Cube />

						<h4 className='text-xs md:text-xl mb-4'>
							Access Detailed Coin Analysis and Information
						</h4>

						<p className='text-[0.5625rem] md:text-base'>
							Stay informed about the latest coins and their potential
						</p>
					</div>
					<div className='flex items-start justify-start flex-col'>
						<Cube />

						<h4 className='text-xs md:text-xl mb-4'>
							Secure Investment Platform for Maximizing Your Earnings
						</h4>

						<p className='text-[0.5625rem] md:text-base'>
							Invest with confidence and grow your wealth
						</p>
					</div>
					<div className='flex items-start justify-start flex-col'>
						<Cube />

						<h4 className='text-xs md:text-xl mb-4'>
							Discover Exclusive Investment Opportunities
						</h4>

						<p className='text-[0.5625rem] md:text-base'>
							Unlock access to high-potential coins and investment strategies
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
