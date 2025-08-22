"use client";
import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { MdPointOfSale } from "react-icons/md";
import { FaListOl } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useState } from "react";

import SalesFormComponent from "@/components/SalesForm";

export default function Sales() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [payment, setPayment] = useState<string>("");
  const [product, setProduct] = useState<string>("");

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 60
    },
    {
      field: 'data',
      headerName: 'Data da venda',
      width: 222
    },
    {
      field: 'valor_total',
      headerName: 'Valor total',
      width: 222
    },
    {
      field: 'metodo_pagamento',
      headerName: 'Método de pagamento',
      width: 222
    },
    {
      field: 'cliente',
      headerName: 'Cliente',
      width: 222
    },
    {
      field: 'produtos',
      headerName: 'Produtos',
      width: 222
    }
  ]

  const rows = [
    {
      id: 1,
      data: "2025-08-20",
      valor_total: 3279.9,
      metodo_pagamento: "Cartão de Crédito",
      cliente: 1, // FK para clientes
      produtos: [1, 2], // FK para produtos
    },
    {
      id: 2,
      data: "2025-08-21",
      valor_total: 899.9,
      metodo_pagamento: "Pix",
      cliente: 2,
      produtos: [3],
    },
    {
      id: 3,
      data: "2025-08-21",
      valor_total: 399.9,
      metodo_pagamento: "Dinheiro",
      cliente: 3,
      produtos: [4],
    },
    {
      id: 4,
      data: "2025-08-21",
      valor_total: 399.9,
      metodo_pagamento: "Dinheiro",
      cliente: 3,
      produtos: [4],
    },
    {
      id: 5,
      data: "2025-08-21",
      valor_total: 399.9,
      metodo_pagamento: "Dinheiro",
      cliente: 3,
      produtos: [4],
    },
    {
      id: 6,
      data: "2025-08-21",
      valor_total: 399.9,
      metodo_pagamento: "Dinheiro",
      cliente: 3,
      produtos: [4],
    },
    {
      id: 7,
      data: "2025-08-21",
      valor_total: 399.9,
      metodo_pagamento: "Dinheiro",
      cliente: 3,
      produtos: [4],
    },

  ];

  return (
    <div>
      <header className={styles.header}>
        <h3>Vendas</h3>
        <p>Tenha controle dos indicadores sobre as vendas do seu negócio.</p>
      </header>
      <section className={styles.topBoxes}>
        <ul className={styles.boxes}>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>R$ 1200,00</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Ganhos no dia de hoje.</h4>
              <FaMoneyBillTrendUp className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>
              Total ganho pelas vendas no dia de hoje:.
            </p>
          </li>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>210</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Quantidade de vendas.</h4>
              <FaListOl className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>Quantidade de vendas registradas.</p>
          </li>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>R$ 250,00</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Valor médio das vendas.</h4>
              <MdPointOfSale className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>
              Valor do ticket médio de venda do seu negócio.
            </p>
          </li>
        </ul>
      </section>
      <main className={styles.mainContent}>
        <section className={styles.recordNewSale}>
          <div className={styles.recordNewSaleContainer}>
            <div className={styles.info}>
              <h3 className={styles.h3}>Registrar venda: </h3>
              <p className={styles.salesP}>Registre suas vendas.</p>
            </div>
            <button
              className={styles.addNewSale}
              onClick={() => setIsOpen(true)}
            >
              Registrar
            </button>
            <SalesFormComponent
              title="Registrar vendas:"
              subtitle="Insira as informações e registre uma venda."
              onSubmit={() => console.log("Foi-se embora")}
              isOpen={isOpen}
              payment={payment}
              setPayment={setPayment}
              setProduct={setProduct}
              product={product}
              onCancel={() => {
                setIsOpen(!isOpen);
                setPayment("");
                setProduct("");
              }}
            ></SalesFormComponent>
          </div>
        </section>
        <section className={styles.graphsContainer}>
          <div className={styles.graph}>
            <span>Gráfico aqui</span>
            <span>Gráfico aqui</span>
          </div>
        </section>
        <section className={styles.listSales}>
          <TableComponent columns={columns} rows={rows}></TableComponent>
        </section>
      </main>
    </div>
  );
}
