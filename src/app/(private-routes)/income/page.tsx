"use client";
import dayjs from "../../utils/dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styles from "./page.module.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { API } from "@/api";

export default function Income() {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);

  const [byDateTotal, setByDateTotal] = useState<number | null>(null);

  async function handleFilter() {
    if (!startDate || !endDate) return alert("Selecione as duas datas!");

    try {
      const start = startDate.toDate().toISOString();
      const end = endDate.toDate().toISOString();

      const res = await API.get(`/income/total_date`, {
        params: { startDate: start, endDate: end },
      });

      setByDateTotal(res.data.total);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar total faturado");
    }
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.mainTitleArea}>
          <div className={styles.mainTitle}>
            <h1>Total faturado: </h1>
            <p>{byDateTotal}</p>
          </div>
          <aside className={styles.filter}>
            <div className={styles.filterContainer}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="pt-BR"
              >
                <DatePicker
                  value={startDate}
                  onChange={(startDate) => {
                    setStartDate(startDate);
                    console.log(startDate);
                    console.log(startDate?.toDate().toISOString());
                  }}
                  format="DD/MM/YYYY"
                  label="Selecione a data de ínicio"
                />
                <DatePicker
                  value={endDate}
                  onChange={(endDate) => setEndDate(endDate)}
                  format="DD/MM/YYYY"
                  label="Selecione a data de término"
                />
                <button className={styles.filterButton} onClick={handleFilter}>
                  Filtrar
                </button>
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
