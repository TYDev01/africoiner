import React from 'react';

export default function Button({ children, className, ...rest }) {
	return (
		<button
			className={`font-bold outline-none p-2 border-2 border-transparent bg-neon hover:bg-transparent hover:border-2 hover:border-neon hover:text-neon rounded-lg transition-all ${className}`}
			{...rest}>
			{children}
		</button>
	);
}
