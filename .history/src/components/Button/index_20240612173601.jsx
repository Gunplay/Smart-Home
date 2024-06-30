const Button = ({ className, href, onClick, children, px, white }) => {
	const renderButton = () => {

		const classes = `button`
		<button>
			<span>{children}</span>
			{Button(white)}
		</button>;
	};

	return renderButton;
};

export default Button;
