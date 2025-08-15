import styles from "./page.module.css";

export default function Income() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.mainTitleArea}>
          <div className={styles.mainTitle}>
            <h1>Total faturado: </h1>
            <p>R$ 2.300,00</p>
          </div>
          <aside className={styles.filter}>
            <div className={styles.filterContainer}></div>
          </aside>
        </div>
      </header>
      <section className={styles.midBoxes}>
        <ul className={styles.listInfos}>
          <li className={styles.infosBox}>
            <div className={styles.upSection}>
              <h3>Entradas:</h3>
              <p>R$ 12.000,00</p>
            </div>
            <div className={styles.bottomSection}>
              <p className={styles.subtitleBottomSection}>
                Você teve o mesmo número de entradas no mês anterior!
              </p>
            </div>
          </li>
          <li className={styles.infosBox}>
            <div className={styles.upSection}>
              <h3>Entradas:</h3>
              <p>R$ 12.000,00</p>
            </div>
            <div className={styles.bottomSection}>
              <p className={styles.subtitleBottomSection}>
                Você teve o mesmo número de entradas no mês anterior!
              </p>
            </div>
          </li>
          <li className={styles.infosBox}>
            <div className={styles.upSection}>
              <h3>Entradas:</h3>
              <p>R$ 12.000,00</p>
            </div>
            <div className={styles.bottomSection}>
              <p className={styles.subtitleBottomSection}>
                Você teve o mesmo número de entradas no mês anterior!
              </p>
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
