import React from 'react';

const Button = ({ className = '', href, onClick, children, px, white }) => {
	const classes = `button ${className} ${white ? 'button--white' : ''} ${
		px ? 'button--px' : ''
	}`;

	if (href) {
		return (
			<a className={classes} href={href} onClick={onClick}>
				<span>{children}</span>
			</a>
		);
	} else {
		return (
			<button className={classes} onClick={onClick}>
				<span>{children}</span>
			</button>
		);
	}
};

export default Button;
