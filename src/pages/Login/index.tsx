import React, { useCallback, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
// import seta from "../../assets/arrow.svg";
import "./styles.css";
import * as yup from "yup";
import Toast from "../../components/Toast";
import { toast } from "react-toastify";

interface Usuario {
	name: string;
	cep: string;
	price: number;
	cpf: number;
	tel: string;
}

let schema = yup.object().shape({
	name: yup.string().required(),
	cep: yup.string().required(),
	price: yup.string().required(),
	cpf: yup.number().required(),
	tel: yup.string().required(),
});

export default function Login() {
	const [usuario, setUsuario] = useState<Usuario>({
		schema,
	} as unknown as Usuario);

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
					<span>Nome</span>
					<Input
						name="name"
						onChange={handleChange}
						placeholder="Digite seu nome"
					/>
				</div>
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

				<Toast/>

				<Button 
					fontsize="xsmall"
					size="medium"
					color="blue" onClick={()=> {toast.success('Mensagem Enviada!')}}>Aperta</Button>

				<Button
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
