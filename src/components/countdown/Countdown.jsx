import Button from '../button/Button';
import CountdownTimer from './CountdownTimer';

export default function Countdown() {
	return (
		<section className='bg-neon2 w-full p-6 md:p-8'>
			<div className='w-[90%] mx-auto flex flex-col items-center justify-center gap-6'>
				<h2 className='text-white font-semibold md:text-4xl'>
					<span className='text-neon'>Crypto</span>World
				</h2>

				<p className='md:text-2xl font-bold'>Launches in...</p>

				<CountdownTimer />

				<Button>Buy coin now</Button>
			</div>
		</section>
	);
}
