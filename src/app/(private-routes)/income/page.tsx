"use client";
import dayjs from "../../utils/dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styles from "./page.module.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { API } from "@/api";

interface bestDayType {
  bestDay: string;
  bestDayTotal: number;
}

export default function Income() {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);

  const [byDateTotal, setByDateTotal] = useState<number | null>(null);
  
  const [boxMessage, setBoxMessage] = useState<React.ReactNode>();
  const [entries, setEntries] = useState<string | null>(null);
  const [currentEntriesTotal, setCurrentEntriesTotal] = useState<number | null>(null);
  const [previousEntries, setPreviousEntries] = useState<number | null>(null);

  const [bestDay, setBestDay] = useState<bestDayType | null>(null);

  useEffect(() => {
    handleGetMonthlyIndicator();
  }, [])

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

  function handleRenderArrow(currentTotal: number | null, previousTotal: number | null) {
   
    if (currentTotal === null || previousTotal === null) {
        return null;
    }

    if (currentTotal > previousTotal) {
        return <FaArrowUp color="green" scale={10} />;
    } else if (currentTotal < previousTotal) {
        return <FaArrowDown color="red" scale={10} />;
    } else {
        return null; // igaais (posso colocar um icone igual se quiser)
    }
}

  async function handleGetMonthlyIndicator() {
    try {

      const res = await API.get(`/income/monthly_comparison`);
      const {currentMonthTotal, previousMonthTotal, bestDayInCurrentMonth} = res.data;

      console.log(bestDayInCurrentMonth)

      const formattedTotal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(currentMonthTotal);

      let message;

      if(currentMonthTotal > previousMonthTotal){
        message = <>Você teve mais entradas que o mês anterior.</>
      }else if(currentMonthTotal === previousMonthTotal){
        message = <>Você teve o mesmo número de entradas do mês anterior.</>
      }else{
        message = <>Você teve menos entradas que o mês anterior.</>
      }

      setBoxMessage(message);
      setEntries(formattedTotal);
      setCurrentEntriesTotal(currentMonthTotal);
      setPreviousEntries(previousMonthTotal);
      setBestDay(bestDayInCurrentMonth)
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
            <div><h1>Total faturado: </h1>
            <p>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(byDateTotal || 0)}</p></div>
            <span className={styles.subtitle}>Total referente ao período filtrado.</span>
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
              <h2>{entries} {handleRenderArrow(currentEntriesTotal, previousEntries!)}</h2>
              
            </div>
            <div className={styles.bottomSection}>
              <p className={styles.subtitleBottomSection}>
                {boxMessage}
              </p>
            </div>
          </li>
          <li className={styles.infosBox}>
            <div className={styles.upSection}>
              <h3>Melhor dia do mês:</h3>
              <h2>{bestDay?.bestDay}</h2>
            </div>
            <div className={styles.bottomSection}>
              <p className={styles.subtitleBottomSection}>
                Neste dia, você teve: <strong>{bestDay?.bestDayTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong> em entradas. Continue assim! :D
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
