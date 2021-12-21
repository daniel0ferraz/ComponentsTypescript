import React, { ChangeEvent, useEffect, useState } from "react";

import { useDebounce } from "usehooks-ts";

export default function Component() {
	const [value, setValue] = useState<string>("");
	const debouncedValue = useDebounce<string>(value, 500);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		console.log(value);
	};

	// Fetch API (optional)
	useEffect(() => {
		// Do fetch here...
		// Triggers when "debouncedValue" changes
		console.log("debounced", debouncedValue);
	}, [debouncedValue]);

	return (
		<div>
			<p>Value real-time: {value}</p>
			<p>Debounced value: {debouncedValue}</p>

			<input type="text" name="value" onChange={handleChange} />
		</div>
	);
}
