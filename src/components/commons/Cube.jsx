/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import cube from '../../../public/assets/cube.svg';

export default function Cube() {
	return (
		<div className='mb-4 h-[1.25rem] w-[1.25rem] md:h-[3.75rem] md:w-[3.75rem]'>
			<Image
				src={cube}
				alt='cube'
				width={0}
				height={0}
				sizes='100%'
				style={{ width: '100%', height: '100%' }}
			/>
		</div>
	);
}
