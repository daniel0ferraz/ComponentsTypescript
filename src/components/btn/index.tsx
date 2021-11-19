// // Button.tsx
// type Props = {
// 	text: string;
// 	icon: string;
// };
// export default function Btn({ text}: Props) {
// 	return (
// 		<button>
// 			{text}
// 		</button>
// 	);
// }

import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Btn: React.FC<IProps> = ({ children, ...shared }) => {
	return <button {...shared}>{children}</button>;
};

export default Btn;
