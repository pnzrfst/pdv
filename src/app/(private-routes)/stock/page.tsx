import TableComponent from "@/components/TableComponent";
import styles from "./page.module.css";
import { FaListOl } from "react-icons/fa6";

export default function Stock() {
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
              <h1 className={styles.h1}>10</h1>
              <div className={styles.headerBox}>
                <h4 className={styles.h4}>Categorias</h4>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Todas as categorias</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h1 className={styles.h1}>210</h1>
              <div className={styles.headerBox}>
                <h4 className={styles.h4}>Qtd de produtos</h4>
                <FaListOl className={styles.svg}  size={25} />
              </div>
              <p className={styles.p}>
                Quantidade de produtos em estoque
              </p>
            </li>
            <li className={styles.aboutTopBox}>
              <h1 className={styles.h1}>310</h1>
              <div className={styles.headerBox}>
                <h4 className={styles.h4}>Valor do estoque</h4>
                <FaListOl className={styles.svg}  size={25} />
              </div>
              <p className={styles.p}>Valor do estoque</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h1 className={styles.h1}>410</h1>
              <div className={styles.headerBox}>
                <h4 className={styles.h4}>Fornecedores</h4>
                <FaListOl className={styles.svg}  size={25} />
              </div>
              <p className={styles.p}>Quantidade de fornecedores</p>
            </li>
          </ul>
        </section>
        <section className={styles.addToInventory}>
          <div className={styles.addProductContainer}>
            <div className={styles.info}>
              <h3 className={styles.titleAddToInventory}>Adicionar ao estoque: </h3>
              <p className={styles.pAddToInventory}>Adicione produtos ao estoque</p>
            </div>
            <button className={styles.addNewProduct}>Adicionar</button>
          </div>
        </section>
        <section className={styles.listStock}>
            <TableComponent></TableComponent>
        </section>
      </main>
    </div>
  );
}
