import TableComponent from "@/components/TableComponent";
import styles from "./page.module.css";
import { MdPointOfSale } from "react-icons/md";
import { FaListOl } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
export default function Sales() {
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
              <h4 className={styles.h4}>Ganhos no dia de hoje</h4>
              <FaMoneyBillTrendUp className={styles.svg} size={25}/>
            </div>
            <p className={styles.subtitle}>
              Total ganho pelas vendas no dia de hoje
            </p>
          </li>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>210</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Qtd de vendas</h4>
              <FaListOl className={styles.svg} size={25}/>
            </div>
            <p className={styles.subtitle}>Quantidade de vendas</p>
          </li>
          <li className={styles.aboutTopBox}>
            <h1 className={styles.h1}>R$ 250,00</h1>
            <div className={styles.headerBox}>
              <h4 className={styles.h4}>Valor médio das vendas</h4>
              <MdPointOfSale className={styles.svg} size={25} />
            </div>
            <p className={styles.subtitle}>
              Valor do ticket médio de venda do seu negócio
            </p>
          </li>
        </ul>
      </section>
      <main className={styles.mainContent}>
        <section className={styles.recordNewSale}>
          <div className={styles.recordNewSaleContainer}>
            <div className={styles.info}>
              <h3 className={styles.h3}>Registrar venda: </h3>
              <p className={styles.salesP}>Registre suas vendas</p>
            </div>
            <button className={styles.addNewSale}>Registrar</button>
          </div>
        </section>
        <section className={styles.graphsContainer}>
          <div className={styles.graph}>
            <span>Gráfico aqui</span>
            <span>Gráfico aqui</span>
          </div>
        </section>
        <section className={styles.listStock}>
            <TableComponent></TableComponent>
        </section>
      </main>
    </div>
  );
}
