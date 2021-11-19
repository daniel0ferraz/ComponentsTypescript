import React, { useCallback, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import seta from "../../assets/arrow.svg";
import "./styles.css";

interface Usuario {
	cep: string;
	price: number;
	cpf: number;
	tel: string;
}

export default function Login() {
	const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

	const handleChange = useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			setUsuario({
				...usuario,
				[e.currentTarget.name]: e.currentTarget.value,
			});
		},
		[usuario]
	);

	return (
		<>
			<div className="container">
				<div className="form-control">
					<span>CEP</span>
					<Input
						name="cep"
						mask="cep"
						onChange={handleChange}
						placeholder="99999-999"
					/>
				</div>

				<div className="form-control">
					<span>CPF</span>
					<Input
						name="cpf"
						mask="cpf"
						onChange={handleChange}
						placeholder="999.999.999-99"
					/>
				</div>

				<div className="form-control">
					<label>Preço</label>
					<Input
						name="price"
						mask="currency"
						prefix="R$"
						placeholder="0,01"
						onChange={handleChange}
					/>
				</div>

				<div className="form-control">
					<label>Telefone</label>
					<Input
						name="tel"
						mask="phone"
						placeholder="()"
						onChange={handleChange}
					/>
				</div>

				{/* <button className="button" onClick={() => console.log(usuario)}>
					Salvar
				</button> */}

				<Button
					Icon={seta}
					fontsize="xsmall"
					size="medium"
					color="blue"
					onClick={() => console.log(usuario)}>
					Button
				</Button>
			</div>
		</>
	);
}
