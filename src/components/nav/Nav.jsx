'use client';

import { MdMenu, MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import Button from '../button/Button';

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	function handleShowMenu() {
		setShowMenu(!showMenu);
		setIsExpanded(!isExpanded);
	}
	return (
		<nav className='w-full m-auto bg-black2'>
			<div className='w-[90%] m-auto py-10 h-[3rem]  flex items-center justify-between'>
				<h1 className='text-neon font-extrabold text-2xl '>
					Afri<span className='text-white'>coiner</span>
				</h1>

				<ul className='hidden md:flex items-center justify-between text-white gap-5 cursor-pointer'>
					<li className='hover:text-neon'>Discover</li>
					<li className='hover:text-neon'>Invest</li>
					<li className='hover:text-neon'>FAQs</li>
					<li className='hover:text-neon'>About Us</li>
				</ul>

				<div className=''>
					<Button>connect wallet</Button>
				</div>

				<button
					className='md:hidden'
					onClick={handleShowMenu}>
					{isExpanded ? (
						<MdOutlineClose className='text-neon text-2xl' />
					) : (
						<MdMenu className='text-neon text-2xl' />
					)}
				</button>
			</div>

			{showMenu && (
				<ul className='flex flex-col items-center bg-black2 justify-between text-neon py-3 gap-5 cursor-pointer'>
					<li className='hover:text-neon'>Discover</li>
					<li className='hover:text-neon'>Invest</li>
					<li className='hover:text-neon'>FAQs</li>
					<li className='hover:text-neon'>About Us</li>
				</ul>
			)}
		</nav>
	);
}
