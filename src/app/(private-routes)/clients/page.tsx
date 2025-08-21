"use client"
import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { MdPointOfSale } from "react-icons/md";
import { FaListOl } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import {useState } from "react";
import ClientsForm from "@/components/ClientForm";



export default function Clients() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <p className={styles.subtitle}>
              Clientes em débito com seu PDV.
            </p>
          </li>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>210</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Quantidade de clientes</h4>
              <FaListOl className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>Quantidade de clientes registrados na nossa base de dados.</p>
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
              <h3 className={styles.h3}>Registrar cliente: </h3>
              <p className={styles.clientsP}>Registre seus clientes.</p>
            </div>
            <button
              className={styles.addNewClients}
              onClick={() => setIsOpen(true)}
            >
              Registrar
            </button>
            <ClientsForm
              title="Cadastrar cliente"
              subtitle="Insira as informações e cadastre um cliente."
              onSubmit={() => console.log("oi")}
              isOpen = {isOpen}
              onCancel={() => setIsOpen(!isOpen)}
            >

            </ClientsForm>
          </div>
        </section>
        <section className={styles.graphsContainer}>
          <div className={styles.graph}>
            <span>Gráfico aqui</span>
            <span>Gráfico aqui</span>
          </div>
        </section>
        <section className={styles.listSales}>
          <TableComponent></TableComponent>
        </section>
      </main>
    </div>
  );
}
