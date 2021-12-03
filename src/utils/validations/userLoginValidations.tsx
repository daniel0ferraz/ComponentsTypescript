import * as Yup from "yup";

import { getValidationErrors } from "./getValidationsErrors";

type Values = {
	name: string;
	cep: string;
	price: string;
	cpf: string;
	tel: string;
};

const fields = {
	name: Yup.string().required("Nome é obrigatório!"),
	cep: Yup.string().required('Cep é obrigatório"'),
	price: Yup.string().required("Preço é obrigatório"),
	cpf: Yup.string().required("Cpf é obrigatorio"),
	tel: Yup.string().required("Telefone é obrigatório"),
};

export const userLoginValidation = async (values: Values) => {
	try {
		const { name, cep, price, cpf, tel } = fields;
		const schema = Yup.object().shape({
			name,
			cep,
			price,
			cpf,
			tel,
		});

		await schema.validate(values, { abortEarly: false });
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return getValidationErrors(error);
		}
	}
};
