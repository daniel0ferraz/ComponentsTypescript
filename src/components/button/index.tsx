/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconBaseProps } from "react-icons";
import styled from "styled-components";

interface Props {
	children?: React.ReactNode;
	onClick: () => void;
	width?: string;
	icon?: React.ComponentType<IconBaseProps>;
}

const Container = styled.div`
	button {
	}
`;

const Button: React.FC<Props> = ({ icon: Icon, children }) => {
	return (
		<>
			<Container>
				<button>
					{Icon && (
						<Icon
							
							style={{
								position: "relative",
								top: "3px",
								padding: "0 5px",
							}}
						/>
					)}
					{children}
				</button>
			</Container>
		</>
	);
};

export default Button;
