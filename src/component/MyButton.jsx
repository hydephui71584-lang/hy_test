import React from 'react';

export default function MyButton1126({ children, type = 'button', ...props }) {
	return (
		<button type={type} {...props}>
			{children}
		</button>
	);
}
