import React, { useState } from "react";
import Select from "../../components/select/index";
import "./styles.css";

export default function Login() {
	const [selected, setSelected] = useState("");
	return (
		<>
			<div className="home">
				<Select selected={selected} setSelected={setSelected} />
				{console.log(selected)}
			</div>
		</>
	);
}
