"use client";

import { FaArrowRight } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./index.css";
import HeaderAndSearch from "@/components/HeaderAndSearch";



export default function Stock() {


  return (
    <section className="body">
      
      <HeaderAndSearch module="Estoque" onSearch={() => console.log("oi")} />
      <section className="box-infos">
        <div className="boxes">
          <div className="left-side">
            <div className="infos-stock">
              <h3>Total de produtos em estoque:</h3>
              <div>
                <h1>3210</h1>
                <span>
                  <FaArrowRight size={30} color="#7CA982" />
                </span>
              </div>
            </div>
            <div className="generalOverview">
              <h3>
                Valor total em estoque <strong>(R$):</strong>{" "}
              </h3>
              <div>
                <h1>R$2108,99</h1>
                <span><MdOutlineRemoveRedEye size={30} color="#7CA982" /></span>
              </div>
            </div>
            <button className="go-to-list">
              Visualizar estoque completo
               <FaArrowRight size={30} color="#FFFFFF" />
               </button>
          </div>

          <div className="lowStockInfos">
            <h3>Qtd de produtos com estoque crítico:</h3>
            <div>
              <h1>3210</h1>
              <span>
                <FaArrowRight size={30} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <button className="logoutBtn">
          Sair<RiLogoutBoxRLine color="#FFFFFF"></RiLogoutBoxRLine>
        </button>
      </footer>
    </section>
  );
}
