import Image from 'next/image';
import discoverImg from '../../../public/assets/discoverImg.svg';
import Cube from '../commons/Cube';

export default function Discover() {
	return (
		<section className='flex items-center justify-center m-auto w-[90%] text-white'>
			<section className='flex flex-col text-center md:flex-row md:text-left items-center justify-between w-full p-4 md:p-8 '>
				<div className='basis-1/2'>
					<div className='flex flex-col items-center justify-between'>
						<h2 className='text-xl md:text-5xl mb-4 font-bold md:font-light'>
							Discover New Coins and Maximize Your Investments with{' '}
							<span className='text-neon'>Crypto</span>World
						</h2>
						<p className='text-xs  md:text-xl mb-4'>
							Get real-time updates and valuable insights on new coins,
							empowering you to make informed investment decisions and maximize
							your earnings.
						</p>
					</div>

					<div className='flex items-start justify-between text-left gap-4'>
						<div className=''>
							<Cube />

							<h4 className='mb-4 font-semibold text-[0.625rem] md:text-xl'>
								Real-time
							</h4>

							<p className='text-[0.5625rem] md:text-xl'>
								Stay up-to-date to know when{' '}
								<span className='text-neon'>Crypto</span>world launches and
								investment opportunities in the crypto market.
							</p>
						</div>
						<div className=''>
							<Cube />

							<h4 className='mb-4 font-semibold text-[0.625rem] md:text-xl'>
								Investment
							</h4>

							<p className='text-[0.5625rem] md:text-xl'>
								Explore our investment plan and start growing your wealth with{' '}
								<span className='text-neon'>Crypto</span>world investments
								today.
							</p>
						</div>
					</div>
				</div>

				<div className='basis-1/2 flex items-center justify-center'>
					<Image
						src={discoverImg}
						alt='discoverImg'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: '100%' }}
					/>
				</div>
			</section>
		</section>
	);
}
