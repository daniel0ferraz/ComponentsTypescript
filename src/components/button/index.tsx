import * as S from "./style";

export type ButtonProps = {
	children?: React.ReactNode;
	color: "black" | "white" | "blue" | "yellow";
	size: "small" | "medium" | "large" | "xxlarge";
	fontsize: "xsmall" | "xmedium" | "xlarge";

	Icon?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	children,
	Icon,
	color = "yellow",
	size = "small",
	fontsize = "xsmall",
	...rest
}: ButtonProps) => {
	return (
		<S.Button color={color} fontsize={fontsize} size={size} {...rest}>
			{children}
		</S.Button>
	);
};

export default Button;
