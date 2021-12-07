import React, { useCallback, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";

import "./styles.css";
import Toast from "../../components/Toast";
import { toast } from "react-toastify";

import { userLoginValidation } from "../../utils/validations/userLoginValidations";
import { FormErrors } from "../../utils/validations/getValidationsErrors";

type User = {
	name: string;
	cep: string;
	price: string;
	cpf: string;
	tel: string;
};

export default function Login() {
	const [userForm, setUserForm] = useState({} as User);
	const [errors, setErrors] = useState({} as FormErrors);

	const handleSubmit = async () => {
		const errors = await userLoginValidation(userForm);

		if (errors) {
			toast.error(errors);
			return setErrors(errors);
		}
	};

	const handleChange = useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			setUserForm({
				...userForm,
				[e.currentTarget.name]: e.currentTarget.value,
			});
		},
		[userForm]
	);

	const maskPhone = (value: any) => {
		return value
			.replace(/\D/g, "")
			.replace(/(\d{2})(\d)/, "($1) $2")
			.replace(/(\d{5})(\d)/, "$1-$2")
			.replace(/(-\d{4})(\d+?)$/, "$1");
	};

	const [phone, setPhone] = useState("");

	return (
		<>
			<div className="container">
				<div className="form-control">
					<span>Nome</span>
					<Input
						name="name"
						placeholder="Digite seu nome"
						error={errors.name}
						onChange={handleChange}
						onFocus={() => setErrors({})}
					/>

					{/* {errors && <p>{errors.name}</p>} */}
				</div>
				<div className="form-control">
					<span>CEP</span>
					<Input
						name="cep"
						mask="cep"
						placeholder="99999-999"
						onChange={handleChange}
						onFocus={() => setErrors({})}
					/>
				</div>

				<div className="form-control">
					<span>CPF</span>
					<Input
						name="cpf"
						mask="cpf"
						placeholder="999.999.999-99"
						error={errors.cpf}
						onChange={handleChange}
						onFocus={() => setErrors({})}
					/>
				</div>

				<div className="form-control">
					<label>Preço</label>
					<Input
						name="price"
						mask="currency"
						prefix="R$"
						placeholder="0,01"
						error={errors.price}
						onChange={handleChange}
						onFocus={() => setErrors({})}
					/>
				</div>

				<div className="form-control">
					<label>Telefone</label>
					<Input
						name="tel"
						placeholder="()"
						error={errors.tel}
						// onChange={handleChange}
						onFocus={() => setErrors({})}
					/>
				</div>

				<Toast />

				<Button
					fontsize="xsmall"
					size="medium"
					color="blue"
					onClick={() => handleSubmit()}>
					Enviar
				</Button>
			</div>
		</>
	);
}
