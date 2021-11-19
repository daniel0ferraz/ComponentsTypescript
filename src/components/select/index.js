import React, { useState } from "react";

import arrow from "../../assets/arrow.svg";
import * as Styled from "./styles";

export default function Select({ selected, setSelected }) {
	const [isActive, setIsActive] = useState(false);

	const options = [
		{
			id: 1,
			value: "Select option 1",
		},
		{
			id: 2,
			value: "Select option 2",
		},
		{
			id: 3,
			value: "Select option 3",
		},
		{
			id: 4,
			value: "Select option 4",
		},
		{
			id: 5,
			value: "Select option 5",
		},
	];
	return (
		<>
			<Styled.Select>
				<Styled.BtnSelect onClick={(e) => setIsActive(!isActive)}>
					{selected ? selected : "Qual bot você deseja?"}
					<img src={arrow} alt="" />
				</Styled.BtnSelect>
				{isActive && (
					<Styled.ContentSelect>
						{options.map((option) => (
							<Styled.OptionItem
								key={option.id}
								onClick={() => {
									setSelected(option.value);
									setIsActive(false);
								}}>
								{option.value}
							</Styled.OptionItem>
						))}
					</Styled.ContentSelect>
				)}
			</Styled.Select>
		</>
	);
}
