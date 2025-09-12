"use client";
import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { MdPointOfSale } from "react-icons/md";
import { FaListOl } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

import SalesFormComponent from "@/components/SalesForm";
import { API } from "@/api";

interface Sales {
  id: string;
  date: Date;
  total: number;
  payment_method: string;
  client_id: string;
  createdAt: Date;
}

export default function Sales() {
  useEffect(() => {
    handleGetAllSales();
  }, []);


  const [sales, setSales] = useState<Sales[]>([]);
  const [totalSales, setTotalSales] = useState<number>(0);
  const [averageTicket, setAverageTicket] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [payment, setPayment] = useState<string>("");
  const [product, setProduct] = useState<string>("");

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
    },
    {
      field: "date",
      headerName: "Data da venda",
      width: 222,
    },
    {
      field: "total",
      headerName: "Valor total",
      width: 222,
    },
    {
      field: "payment_method",
      headerName: "Método de pagamento",
      width: 222,
    },
    {
      field: "client_id",
      headerName: "Cliente",
      width: 222,
    },
    {
      field: "products",
      headerName: "Produtos",
      width: 222,
    },
  ];

  async function handleGetAllSales() {
    try {
      const response = await API.get("/sales");
      setSales(response.data.sales);
      setTotalSales(response.data.countSales);
      setAverageTicket(response.data.averageTicket);
    } catch (error) {
      console.error("Erro ao buscar as vendas:", error);
    }
  }

  const rows = sales.map((sale) => ({
    id: sale.id,
    date: new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(sale.date)),
    total: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(sale.total),
    payment_method: sale.payment_method,
    client_id: sale.client_id,
    products: "Ver produtos",
  }));

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
            <h1 className={styles.h1}>{totalSales}</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Quantidade de vendas.</h4>
              <FaListOl className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>Quantidade de vendas registradas.</p>
          </li>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(averageTicket)}</h1>
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
