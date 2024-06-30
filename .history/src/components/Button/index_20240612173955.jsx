const Button = ({ className, href, onClick, children, px, white }) => {
	const classes = `button`;

	const renderButton = () => {
		<button className={classes}>
			<span>{children}</span>
			{Button(white)}
		</button>;
	};
	return renderButton;
};

export default Button;
