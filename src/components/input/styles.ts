import styled, { css } from "styled-components";
import { InputProps } from "./";

export const Container = styled.div`
	${() => css`
		position: relative;

		& + & {
			margin-top: 1rem;
		}

		i {
			position: absolute;
			top: 1.2rem;
			right: 1.6rem;

			font-size: 18px;

			color: red;
		}
	`}
`;

const inputModifiers = {
	error: () => css`
		border: 1px solid red;

		&::placeholder {
			color: red;
		}
	`,
};

export const Input = styled.input<InputProps>`
	${({ error }) => css`
		width: 100%;
		height: 28px;
		padding: 1.2rem;

		font-size: ;
		font-weight: 400;

		border: 1px solid #ddd;
		border-radius: 0.8rem;

		background: #fff;
		color: #2d2d2d;

		${!!error && inputModifiers["error"]}
	`}
`;

export const ErrorText = styled.p`
	${() => css`
		font-family: "Roboto";
		font-size: 12px;
		font-weight: 400;
		text-align: left;
		color: red;
	`}
`;
