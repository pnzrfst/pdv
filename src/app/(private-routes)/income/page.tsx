import styles from "./page.module.css";

export default function Income() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.mainTitleArea}>
          <h1>Total faturado:</h1>
          <p>R$ 2.000,00</p>
        </div>
      </header>
      <section className={styles.midBoxes}>
        <ul className={styles.listInfos}>
          <li className={styles.infosBox}>
            <div>
              <h3>Entradas:</h3>
              <p>R$ 12.000,00</p>
            </div>
          </li>
          <li className={styles.infosBox}>
            <div>
              <h3>Entradas:</h3>
              <p>R$ 12.000,00</p>
            </div>
            <div className={styles.bottomSection}>
                <p>Você teve o mesmo número de entradas no mês!</p>
            </div>
          </li>
          <li className={styles.infosBox}>
            <div>
              <h3>Entradas:</h3>
              <p>R$ 12.000,00</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.graphArea}>
        <ul className={styles.listGraphs}>
          <li className={styles.graphBox}>Gráfico aqui</li>
          <li className={styles.graphBox}>Gráfico aqui</li>
        </ul>
      </section>
    </div>
  );
}
