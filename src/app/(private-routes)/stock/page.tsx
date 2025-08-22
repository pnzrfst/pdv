"use client";
import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { FaListOl } from "react-icons/fa6";
import { useState } from "react";
import StockFormComponent from "@/components/StockForm";

export default function Stock() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
    },
    {
      field: "nome",
      headerName: "Nome",
      width: 200,
    },
    {
      field: "categoria",
      headerName: "Categoria",
      width: 200,
    },
    {
      field: "quantidade",
      headerName: "Quantidade",
      width: 200,
    },
    {
      field: "custo",
      headerName: "Custo",
      width: 200,
    },
    {
      field: "preco_venda",
      headerName: "Preço venda",
      width: 200,
    },
    {
      field: "descricao",
      headerName: "Descrição",
      width: 200,
    },
  ];

  const rows = [
    {
      id: 1,
      nome: "Notebook Dell Inspiron",
      categoria: "Eletrônicos",
      quantidade: 15,
      custo: 2500.0,
      preco_venda: 3200.0,
      descricao: "Notebook i5, 8GB RAM, SSD 256GB",
    },
    {
      id: 2,
      nome: "Mouse Logitech M170",
      categoria: "Acessórios",
      quantidade: 50,
      custo: 40.0,
      preco_venda: 79.9,
      descricao: "Mouse sem fio",
    },
    {
      id: 3,
      nome: "Cadeira Gamer Redragon",
      categoria: "Móveis",
      quantidade: 10,
      custo: 600.0,
      preco_venda: 899.9,
      descricao: "Cadeira gamer reclinável",
    },
    {
      id: 4,
      nome: "Teclado Mecânico HyperX",
      categoria: "Acessórios",
      quantidade: 20,
      custo: 250.0,
      preco_venda: 399.9,
      descricao: "Teclado mecânico RGB Switch Blue",
    },
    {
      id: 5,
      nome: "Monitor LG 24''",
      categoria: "Eletrônicos",
      quantidade: 12,
      custo: 800.0,
      preco_venda: 1199.9,
      descricao: "Monitor Full HD 24 polegadas",
    },
    {
      id: 6,
      nome: "Cabo HDMI 2m",
      categoria: "Acessórios",
      quantidade: 100,
      custo: 15.0,
      preco_venda: 39.9,
      descricao: "Cabo HDMI de alta velocidade",
    },
    {
      id: 7,
      nome: "Cadeira de Escritório",
      categoria: "Móveis",
      quantidade: 8,
      custo: 350.0,
      preco_venda: 599.9,
      descricao: "Cadeira ergonômica para escritório",
    },
  ];

  return (
    <div>
      <header className={styles.header}>
        <h3>Estoque e inventário</h3>
        <p>Tenha controle dos processos que envolvem seu estoque.</p>
      </header>
      <main className="mainContent">
        <section className={styles.topBoxes}>
          <ul className={styles.boxes}>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Categorias:</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>10</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Todas as categorias.</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Quantidade de produtos:</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>210</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Quantidade de produtos.</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Valor do estoque:</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>R$ 310,00</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Valor do estoque.</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Fornecedores:</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>200</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Quantidade de fornecedores.</p>
            </li>
          </ul>
        </section>
        <section className={styles.addToInventory}>
          <div className={styles.addProductContainer}>
            <div className={styles.info}>
              <h3 className={styles.titleAddToInventory}>
                Adicionar ao estoque:{" "}
              </h3>
              <p className={styles.pAddToInventory}>
                Adicione produtos ao estoque
              </p>
            </div>
            <button
              className={styles.addNewProduct}
              onClick={() => setIsOpen(true)}
            >
              Adicionar
            </button>

            <StockFormComponent
              title="Cadastrar produto:"
              subtitle="Insira as informações e cadastre um produto."
              onSubmit={() => console.log("Foi-se embora")}
              isOpen={isOpen}
              onCancel={() => setIsOpen(!isOpen)}
            ></StockFormComponent>
          </div>
        </section>
        <section className={styles.listStock}>
          <TableComponent columns={columns} rows={rows}></TableComponent>
        </section>
      </main>
    </div>
  );
}
