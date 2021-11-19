/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

const Input: React.FC<InputProps> = (props) => {
	return (
		<div className="">
			<input {...props} />
		</div>
	);
};

export default Input;
