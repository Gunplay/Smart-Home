interface Btn {
	className: string;
	href: string;
}
const Button = ({ className, href }) => {
	return (
		<button className={className} href={href}>
			Sing In
		</button>
	);
};

export default Button;
