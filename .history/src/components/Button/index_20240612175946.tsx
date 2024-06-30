interface ButtonProps {
	className?: string; // Optional className for custom styling
	href?: string; // Optional URL for navigation
	children?: React.ReactNode; // Optional child elements for button content
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined; // Optional onClick handler
}

const Button: React.FC<ButtonProps> = ({
	className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
	href,
	children = 'Button Text',
	onClick,
}) => {
	return (
		<button className={className} ref={href} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
