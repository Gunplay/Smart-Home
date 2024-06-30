import React from 'react';

const Button = ({ className = '', href, onClick, children, px, white }) => {
	const classes = `button ${className} ${white ? 'button--white' : ''} ${
		px ? 'button--px' : ''
	}`;

	const buttonRender = () => {
		<button className={classes} onClick={onClick}>
			<span>{children}</span>
		</button>;
	};

	return buttonRender;
};

export default Button;
