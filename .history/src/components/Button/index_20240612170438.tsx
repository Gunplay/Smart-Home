interface ButtonProps extends Btn {
	children?: React.ReactNode; // Optional child elements for button content
}

const Button: React.FC<ButtonProps> = ({ className, href, children }) => {
	return (
		<button className={className} href={href}>
			{children || 'Sing In'} {/* Default text if no children provided */}
		</button>
	);
};

export default Button;
