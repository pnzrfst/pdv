"use client";
import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { MdPointOfSale } from "react-icons/md";
import { FaListOl } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useState } from "react";
import ClientsForm from "@/components/ClientForm";

export default function Clients() {
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
      width: 322,
    },
    {
      field: "contato",
      headerName: "Contato",
      width: 322,
    },
    {
      field: "endereco",
      headerName: "Endereço",
      width: 440,
    },
  ];

  const rows = [
    {
      id: 1,
      nome: "João Silva",
      contato: "11987654321",
      endereco: "Rua das Flores, 123 - São Paulo/SP",
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      contato: "21998765432",
      endereco: "Av. Atlântica, 456 - Rio de Janeiro/RJ",
    },
    {
      id: 3,
      nome: "Carlos Souza",
      contato: "31991234567",
      endereco: "Rua das Palmeiras, 789 - Belo Horizonte/MG",
    },
    {
      id: 4,
      nome: "Ana Costa",
      contato: "41997654321",
      endereco: "Rua Central, 321 - Curitiba/PR",
    },
  ];
  return (
    <div>
      <header className={styles.header}>
        <h3>Clientes</h3>
        <p>Tenha controle sob as informações dos seus clientes.</p>
      </header>
      <section className={styles.topBoxes}>
        <ul className={styles.boxes}>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>12</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Clientes em débito</h4>
              <FaMoneyBillTrendUp className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>Clientes em débito com seu PDV.</p>
          </li>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>210</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Quantidade de clientes</h4>
              <FaListOl className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>
              Quantidade de clientes registrados na nossa base de dados.
            </p>
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
        <section className={styles.recordNewClient}>
          <div className={styles.recordNewClientContainer}>
            <div className={styles.info}>
              <h3 className={styles.h3}>Cadastrar cliente: </h3>
              <p className={styles.clientsP}>Cadastre seus clientes.</p>
            </div>
            <button
              className={styles.addNewClients}
              onClick={() => setIsOpen(true)}
            >
              Cadastrar
            </button>
            <ClientsForm
              title="Cadastrar cliente"
              subtitle="Insira as informações e cadastre um cliente."
              onSubmit={() => console.log("oi")}
              isOpen={isOpen}
              onCancel={() => setIsOpen(!isOpen)}
            ></ClientsForm>
          </div>
        </section>
        <section className={styles.graphsContainer}>
          <div className={styles.graph}>
            <span>Gráfico aqui</span>
            <span>Gráfico aqui</span>
          </div>
        </section>
        <section className={styles.listSales}>
          <TableComponent
            columns={columns}
            rows={rows}
          ></TableComponent>
        </section>
      </main>
    </div>
  );
}
