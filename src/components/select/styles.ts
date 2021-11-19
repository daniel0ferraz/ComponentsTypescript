import styled from "styled-components";

export const Select = styled.div`
	margin: 100px auto;
	width: 312px;
	height: 48px;
	background: #ffffff;
	border: 1px solid #2c2c2c;
	box-sizing: border-box;
	border-radius: 8px;
	user-select: none;
	position: relative;
`;

export const BtnSelect = styled.div`
	padding: 15px 20px;
	background: transparent;
	border: none;
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: #2c2c2c;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ContentSelect = styled.div`
	position: absolute;
	width: 312px;
	overflow: hidden;
	background: #2c2c2c;
	border: 1px solid #a366ff;
	box-sizing: border-box;
	border-radius: 8px;
	top: 110%;
	background: #fff;
	font-weight: 400;
`;

export const OptionItem = styled.div`
	padding: 10px 12px;
	cursor: pointer;
	transition: all 0.5s;
	font-size: 16px;
	font-weight: 400;

	&::after {
		content: "";
		position: absolute;
		width: 280px;
		height: 0px;
		opacity: 0.3;
		/* color-grey */
		border: 0.5px solid #2c2c2c;
		display: block;
		margin: 8px auto;
	}
	:hover {
		background: #a366ff;
		opacity: 0.5;
	}
`;
