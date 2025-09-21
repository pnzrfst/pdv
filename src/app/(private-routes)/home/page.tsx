"use client"
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { BsBox } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePointOfSale } from "react-icons/md";
import { useEffect, useState } from "react";
import { API } from "@/api";
import { Card, List} from "@mui/material";

interface biggerStock {
  name: string
}

interface lowerStock {
  name: string
}


export default function Home() {
  const router = useRouter() 

  const [lowStockProducts, setLowStockProducts] = useState<number>(0);
  const [biggerStock, setBiggerStock] = useState<biggerStock>({name: ""})
  const [lowerStock, setLowerStock] = useState<biggerStock>({name: ""})

  async function handleStockOverview(){
    try {
      const response = await API.get("/home-summary");
      setLowStockProducts(response.data.lowStockProducts);
      setLowerStock(response.data.lowerStock)
      setBiggerStock(response.data.biggerStock)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleStockOverview()
  }, [])
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
                <h2>Clientes</h2>
                <IoHomeOutline size={20}/>
              </div>
              <span className={styles.clientsActions}>
                <button onClick={() => router.push('/clients')}>Cadastrar novo cliente</button>
              </span>
            </li>
            <li className={styles.aboutTopBox}>
              <div className={styles.headerBox}>
                <h2>Estoque</h2>
                <BsBox size={20}/>
              </div>
              <span className={styles.stockActions}>
                  <button onClick={() => router.push('/stock')}>Cadastrar novo produto</button>
              </span>
            </li>
            <li className={styles.aboutTopBox}>
              <div className={styles.headerBox}>
                <h2>Faturamento</h2>
                <FaMoneyBill1Wave size={25} />
              </div>
              <span className={styles.incomeActions}>
                <button onClick={() => router.push('/income')}>Ir para faturamento</button>
              </span>
            </li>
            <li className={styles.aboutTopBox}>
              <div className={styles.headerBox}>
                <h2>Vendas</h2>
                <MdOutlinePointOfSale size={25} />
              </div>
              <span className={styles.salesActions}>
                <button  onClick={() => router.push('/sales')}>Cadastrar nova venda</button>
              </span>
            </li>
          </ul>
        </section>
        <section className={styles.mainBoxes}>
          <ul className={styles.mainBoxesCards}>
            <li className={styles.aboutMainBox}>
              <div className={styles.headerBox}>
                <h2>Estoque</h2>
              </div>
              <List className={styles.listStock}>
               <div className={styles.infosStock}>
                 <Card className={styles.stockCards}>
                  <p>Temos  <strong>{lowStockProducts}</strong> produtos com estoque baixo</p>
                  <button>Ir</button>
                 </Card>
                 <Card className={styles.stockCards}>
                  <p>O produto: <strong>{biggerStock.name}</strong> é o de maior estoque em seu pdv.</p>
                 </Card>
                 <Card className={styles.stockCards}>
                  <p>O produto: <strong>{lowerStock.name}</strong> é o de menor estoque em seu pdv.</p>
                 </Card>
               </div>
              </List>
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
