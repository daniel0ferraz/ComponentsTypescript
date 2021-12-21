import styled from "styled-components";

export const Container = styled.div`
	padding: 0 2.4rem;

	.active-tabs {
		background: white;
		border-bottom: 1px solid transparent;
	}

	.active-tabs::before {
		content: "";
		display: block;
		position: absolute;
		top: -5px;
		left: 50%;
		transform: translateX(-50%);
		width: calc(100% + 2px);
		height: 5px;
		background: rgb(88, 147, 241);
	}
`;

export const Nav = styled.div`
	margin-top: 20px;

	a {
		cursor: pointer;
		padding: 0 20px;
		text-decoration: none;
		color: #2d2d2d;
		opacity: 0.6;
		font-weight: 600;
		font-family: "Roboto";
	}
`;

export const ContentTabs = styled.div`
	flex-grow: 1;

	.content {
		background: white;
		padding: 20px;
		width: auto;
		height: 100%;
		display: none;
	}

	.active-content {
		display: block;
	}
`;
