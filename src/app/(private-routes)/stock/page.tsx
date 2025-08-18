"use client";
import TableComponent from "@/components/TableComponent";
import styles from "./page.module.css";
import { FaListOl } from "react-icons/fa6";
import FormComponent from "@/components/FormComponent";
import { useState } from "react";

export default function Stock() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
              <h4 className={styles.h4}>Valor do estoque</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>R$ 310,00</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Valor do estoque</p>
            </li>
            <li className={styles.aboutTopBox}>
              <h4 className={styles.h4}>Fornecedores</h4>
              <div className={styles.headerBox}>
                <h1 className={styles.h1}>200</h1>
                <FaListOl className={styles.svg} size={25} />
              </div>
              <p className={styles.p}>Quantidade de fornecedores</p>
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

            <FormComponent
              title="Cadastrar produto:"
              subtitle="Insira as informações e cadastre um produto."
              onSubmit={() => console.log("Foi-se embora")}
              isOpen={isOpen}
              onCancel={() => setIsOpen(!isOpen)}
            ></FormComponent>
          </div>
        </section>
        <section className={styles.listStock}>
          <TableComponent></TableComponent>
        </section>
      </main>
    </div>
  );
}
