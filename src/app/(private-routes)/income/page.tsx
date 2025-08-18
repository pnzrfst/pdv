"use client"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styles from "./page.module.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";


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
            <div className={styles.filterContainer}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </div>
          </aside>
        </div>
      </header>
      <section className={styles.midBoxes}>
        <ul className={styles.listInfos}>
          <li className={styles.infosBox}>
            <div className={styles.upSection}>
              <h3>Entradas:</h3>
              <h2>R$ 12.000,00</h2>
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
              <h2>R$ 12.000,00</h2>
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
              <h2>R$ 12.000,00</h2>
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
