const Button = ({ className, href, onClick, children, px, white }) => {
	const renderButton = () => {
		<button>
			<span>{children}</span>
			{Button(white)}
		</button>;
	};

	return renderButton;
};

export default Button;
