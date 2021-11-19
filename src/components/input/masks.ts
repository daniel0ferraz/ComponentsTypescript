export function cep(e: React.FormEvent<HTMLInputElement>) {
	e.currentTarget.maxLength = 9;
	let value = e.currentTarget.value;
	value = value.replace(/\D/g, "");
	value = value.replace(/^(\d{5})(\d)/, "$1-$2");
	e.currentTarget.value = value;
	return e;
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
	let value = e.currentTarget.value;
	value = value.replace(/\D/g, "");
	value = value.replace(/(\d)(\d{2})$/, "$1,$2");
	value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

	e.currentTarget.value = value;
	return e;
}

export function cpf(e: React.FormEvent<HTMLInputElement>) {
	e.currentTarget.maxLength = 14;
	let value = e.currentTarget.value;
	if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
		value = value.replace(/\D/g, "");
		value = value.replace(/(\d{3})(\d)/, "$1.$2");
		value = value.replace(/(\d{3})(\d)/, "$1.$2");
		value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
		e.currentTarget.value = value;
	}
	return e;
}

export function phone(e: React.FormEvent<HTMLInputElement>) {
	let value = e.currentTarget.value;
	value = value.replace(/^0/, "");

	if (value.length > 11) {
		value = value.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
	} else if (value.length > 7) {
		value = value.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
	} else if (value.length > 2) {
		value = value.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
	} else if (value.trim() !== "") {
		value = value.replace(/^(\d*)/, "($1");
	}
	return e;
}
