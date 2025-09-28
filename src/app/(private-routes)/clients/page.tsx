"use client";
import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { MdPointOfSale } from "react-icons/md";
import { FaListOl } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ClientsForm from "@/components/ClientForm";
import { API } from "@/api";
import { GridPaginationModel } from "@mui/x-data-grid";

interface Clients {
  id: string;
  name: string;
  phone: string;
  address: string;
}

export default function Clients() {
  useEffect(() => {
    loadOverview();
  }, []);

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const [rowCount, setRowCount] = useState<number>(1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countClients, setCountClients] = useState<number>(0);
  const [countFiado, setCountFiado] = useState<number>(0);
  const [clients, setClients] = useState<Clients[]>([]);
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

  async function loadOverview(page = 1, pageSize = 10) {
    try {
      const response = await API.get("/clients", {
        params: {page, pageSize}
      });
      setClients(response.data.clients);
      setCountClients(response.data.countClients);
      setCountFiado(response.data.filteredByFiado);
      console.log(clients);
    } catch (error: any) {
      console.error("Erro ao buscar os clientes:", error.message);
    }
  }

  const rows = clients.map((client) => ({
    id: client.id,
    nome: client.name,
    contato: client.phone,
    endereco: client.address,
  }));

  return (
    <div>
      <header className={styles.header}>
        <h3>Clientes</h3>
        <p>Tenha controle sob as informações dos seus clientes.</p>
      </header>
      <section className={styles.topBoxes}>
        <ul className={styles.boxes}>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>{countFiado}</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Clientes em débito</h4>
              <FaMoneyBillTrendUp className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>Clientes em débito com seu PDV.</p>
          </li>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>{countClients}</h1>
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
              onSubmit={() => {
                loadOverview();
                setIsOpen(false);
              }}
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
            rowCount={rowCount}
            columns={columns}
            rows={rows}
            paginationModel={paginationModel}
            onPaginationModelChange={(model) => {
              setPaginationModel(model);
              loadOverview(model.page + 1, model.pageSize);
            }}
          ></TableComponent>
        </section>
      </main>
    </div>
  );
}
