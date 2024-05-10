'use client';
import { useState, useEffect } from 'react';
import React from 'react';

export default function CountdownTimer() {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	function calculateTimeLeft() {
		const targetDate = new Date('2024-12-31T23:59:59'); // Change this to your target date
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	}

	return (
		<div className='flex justify-center items-center'>
			<div className='text-center '>
				{timeLeft.days > 0 && (
					<div className='flex items-center justify-between gap-5 sm:gap-6 '>
						<div className=''>
							<p className='w-15 h-15 text-2xl text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3 rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem] shadow'>
								{timeLeft.days}
							</p>

							<span className='text-sm text-black font-bold font-silkScreen mt-2 '>
								days
							</span>
						</div>

						<div className=''>
							<p className='w-15 h-15 text-2xl text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem]'>
								{timeLeft.hours} <br />
							</p>

							<span className='text-sm text-black font-bold font-silkScreen mt-2'>
								hours
							</span>
						</div>

						<div className=''>
							<p className='w-15 h-15 text-2xl  text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem]'>
								{timeLeft.minutes} <br />
							</p>

							<span className='text-sm text-black font-bold font-silkScreen mt-2'>
								minutes
							</span>
						</div>

						<div className=''>
							<p className='w-15 h-15 text-2xl  text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem]'>
								{timeLeft.seconds} <br />
							</p>

							<span className='text-sm text-black font-bold font-silkScreen mt-4'>
								seconds
							</span>
						</div>
					</div>
				)}
				{timeLeft.days === 0 && timeLeft.hours > 0 && (
					<div className='flex items-center justify-between gap-10'>
						<div className=''>
							<p className='w-15 h-15 text-2xl  text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem]'>
								{timeLeft.hours} <br />
							</p>

							<span className='text-sm text-black font-bold font-silkScreen mt-2'>
								hours
							</span>
						</div>

						<div className=''>
							<p className='w-15 h-15 text-2xl  text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem]'>
								{timeLeft.minutes} <br />
							</p>

							<span className='text-sm text-black font-bold font-silkScreen mt-2'>
								minutes
							</span>
						</div>

						<div className=''>
							<p className='w-15 h-15 text-2xl  text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem]'>
								{timeLeft.seconds} <br />
							</p>

							<span className='text-sm text-black font-bold font-silkScreen mt-4'>
								seconds
							</span>
						</div>
					</div>
				)}
				{timeLeft.days === 0 &&
					timeLeft.hours === 0 &&
					timeLeft.minutes > 0 && (
						<div className='flex items-center justify-between gap-10'>
							<div className=''>
								<p className='w-15 h-15 text-2xl  text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem]'>
									{timeLeft.minutes} <br />
								</p>

								<span className='text-sm text-black font-thin font-silkScreen mt-2'>
									minutes
								</span>
							</div>

							<div className=''>
								<p className='w-15 h-15 text-2xl  text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lgmd:w-[7rem] md:h-[6rem] md:text-[4rem]'>
									{timeLeft.seconds} <br />
								</p>

								<span className='text-sm text-black font-thin font-silkScreen mt-4'>
									seconds
								</span>
							</div>
						</div>
					)}
				{timeLeft.days === 0 &&
					timeLeft.hours === 0 &&
					timeLeft.minutes === 0 && (
						<div className='flex items-center justify-between gap-10'>
							<p className='w-15 h-15 text-2xl  text-white font-semibold flex items-center justify-center flex-col bg-primary border-[1px] border-black p-3  rounded-lg md:w-[7rem] md:h-[6rem] md:text-[4rem]'>
								{timeLeft.seconds} <br />
							</p>

							<span className='text-sm text-black font-thin font-silkScreen mt-4'>
								seconds
							</span>
						</div>
					)}
			</div>
		</div>
	);
}
