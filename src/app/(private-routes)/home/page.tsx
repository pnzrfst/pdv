import TableComponent from "@/components/Table";
import styles from "./page.module.css";
import { BsBox } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePointOfSale } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h2>Olá, usuário!</h2>
        <p>Hoje é dia 07 de junho de 2025.</p>
      </header>
      <main className="mainContent">
        <section className={styles.topBoxes}>
          <ul className={styles.boxes}>
            <li className={styles.aboutTopBox}>
              <div className={styles.headerBox}>
                <h2>Teste de box</h2>
                <IoHomeOutline size={25} />
              </div>
 
            </li>
            <li className={styles.aboutTopBox}>
              <div className={styles.headerBox}>
                <h2>Teste de box</h2>
                <BsBox size={25} />
              </div>
 
            </li>
            <li className={styles.aboutTopBox}>
              <div className={styles.headerBox}>
                <h2>Teste de box</h2>
                <FaMoneyBill1Wave size={25} />
              </div>
 
            </li>
            <li className={styles.aboutTopBox}>
              <div className={styles.headerBox}>
                <h2>Teste de box</h2>
                <MdOutlinePointOfSale size={25} />
              </div>
 
            </li>
          </ul>
        </section>
        <section className={styles.mainBoxes}>
          <ul className={styles.mainBoxesCards}>
            <li className={styles.aboutMainBox}>
              <div className={styles.headerBox}>
                <h2>Faturamento</h2>
                
              </div>
            </li>
            <li className={styles.aboutMainBox}>
              <div className={styles.headerBox}>
                <h2>Teste de box</h2>
                
              </div>
 
            </li>
            <li className={styles.aboutMainBox}>
              <div className={styles.headerBox}>
                <h2>Teste de box</h2>
                
              </div>
            </li>
            <li className={styles.aboutMainBox}>
              <div className={styles.headerBox}>
                <h2>Teste de box</h2>
                
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
