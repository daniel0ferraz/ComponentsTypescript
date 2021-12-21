import React, { useState } from "react";
import * as S from "./styles";

export default function Tabs() {
	const [selectedTab, setSelectedTab] = useState(1);

	const toggleTab = (index: any) => {
		setSelectedTab(index);
	};

	return (
		<>
			<S.Container>
				<div className="block-tabs">
					<S.Nav>
						<a
							className={selectedTab === 1 ? "tabs active-tabs" : "tabs"}
							onClick={() => toggleTab(1)}>
							Dados da Empresa
						</a>
						<button
							className={selectedTab === 2 ? "tabs active-tabs" : "tabs"}
							onClick={() => toggleTab(2)}>
							Meus dados
						</button>
						<a href="">Pagamentos</a>
						<a href="">Documentos</a>
					</S.Nav>
				</div>

				<S.ContentTabs>
					<div
						className={
							selectedTab === 1 ? "content active-content" : "content"
						}>
						<h2>Cnpj</h2>
						<span>00.6666./000.-55</span>
					</div>

					<div
						className={
							selectedTab === 2 ? "content active-content" : "content"
						}>
						<h2>Nome</h2>
						<span>Daniel</span>
					</div>
				</S.ContentTabs>
			</S.Container>
		</>
	);
}
