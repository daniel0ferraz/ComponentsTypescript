import styled, {css, DefaultTheme}  from "styled-components";
import { ButtonProps } from "./index";

type Props = Pick<ButtonProps, "size" | "color" | "fontsize">;

const modifiersButton = {
	// Type Buttons-> Colors
	black: () => css`
		background-color: #2c2c2c;
	`,
	white: () => css`
		background-color: #ffffff;
		color: #2c2c2c;
		border: 1px solid #2c2c2c;
	`,

	blue: () => css`
		background-color: #5d9eff;
		:hover {
			background: #5d9eff;
			opacity: 0.6;
		}
	`,
	yellow: () => css`
		background-color: #ffb800;
		:hover {
			background: #ffb800;
			opacity: 0.6;
		}
	`,

	// type FontSizes
	xsmall: () => css`
		font-size: 14px;
	`,
	xmedium: () => css`
		font-size: 16px;
	`,
	xlarge: () => css`
		font-size: 20px;
	`,

	//size
	small: () => css`
		width: 97px;
		height: 40px;
	`,
	medium: () => css`
		width: 285px;
	`,
	large: () => css`
		width: 315px;
	`,
	xxlarge: () => css`
		width: 345px;
	`,
};

export const Button = styled.button<Props>`
	${({ theme, fontsize, size, color }) => css`
		height: 48px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		color: #ffffff;

		text-align: center;
		display: flex;
		align-items: center;
		font-weight: 500;
		font-family: "Roboto";

		${!!size && modifiersButton[size]}
		${!!color && modifiersButton[color]}
    ${!!fontsize && modifiersButton[fontsize]}
	`}
`;
