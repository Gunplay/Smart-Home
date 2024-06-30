import React from 'react';

const Button = ({ className = '', href, onClick, children, px, white }) => {
	const classes = `button ${className} ${white ? 'button--white' : ''} ${
		px ? 'button--px' : ''
	}`;

	return (
		<button className={classes} onClick={onClick}>
			<span>{children}</span>
		</button>
	);
};

export default Button;
