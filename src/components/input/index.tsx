import React, { InputHTMLAttributes, useCallback } from "react";
import "./styles.css";
import * as Styled from "./styles";
import { ExclamationTriangleIcon } from "react-line-awesome";
import { cep, currency, cpf, phone } from "./masks";
export type InputProps = {
	error?: string;
	mask?: "cep" | "currency" | "cpf" | "phone";
	prefix?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ mask, prefix, error, ...rest }) => {
	const handleKeyUp = useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			if (mask === "cep") {
				cep(e);
			}
			if (mask === "currency") {
				currency(e);
			}
			if (mask === "cpf") {
				cpf(e);
			}
			if (mask === "phone") {
				phone(e);
			}
		},
		[mask]
	);

	return (
		<Styled.Container>
			{prefix && <span className="prefix-span">{prefix}</span>}
			<Styled.Input
				{...rest}
				// placeholder={error ? "Error" : rest.placeholder}
				onKeyUp={handleKeyUp}
			/>

			{error && (
				<>
					<Styled.ErrorText>{error}</Styled.ErrorText>
					<ExclamationTriangleIcon />
				</>
			)}
		</Styled.Container>
	);
};

export default Input;
