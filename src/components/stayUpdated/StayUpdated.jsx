import Button from '../button/Button';

export default function StayUpdated() {
	return (
		<section>
			<div className='flex items-center justify-between w-[95%] mx-auto p-6 md:p-8'>
				<div className='flex items-start justify-center flex-col basis-3/5'>
					<h2 className='text-white text-sm md:text-5xl mb-4'>
						Stay Updated on <span className='text-neon'>Crypto</span>World
					</h2>
					<p className='text-white text-xs  md:text-2xl'>
						Get the latest updates and be one of the first to yield profit
					</p>
				</div>

				<div className='flex items-center justify-center gap-3'>
					<Button className='text-[0.5rem] md:text-base'>Subscribe</Button>
					<Button className='text-[0.5rem] md:text-base bg-transparent text-neon border-2 border-neon'>
						{' '}
						Invest
					</Button>
				</div>
			</div>
		</section>
	);
}
