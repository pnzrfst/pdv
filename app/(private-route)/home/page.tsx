"use client";

import { FaArrowRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";

import "./index.css";
import LateralMenu from "@/components/LateralMenu";
import { useState } from "react";

export default function Home() {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);


  return (
    <section className="body">
      <header className="header">
        <IoMdMenu  cursor={"pointer"} size={60} onClick={() => setMenuVisible(!isMenuVisible)}></IoMdMenu>
        {isMenuVisible ? <LateralMenu onClose={() => setMenuVisible(false)}></LateralMenu> : false}
      </header>

      <section className="box-infos">
        <div className="boxes">
          <div className="left-side">
            <div className="infos-stock">
              <h1>Estoque</h1>
              <button className="priority-info">
                Temos produtos com estoque baixo!
                <FaArrowRight size={30} color="#FFFFFF" className="action" />
              </button>
              <p>Último adicionado</p>
              <span className="about-stock">
                Ver informações sobre o produto
              </span>
            </div>

            <div className="generateReports">
              <h1>Relatórios</h1>
              <button className="goCreditors">
                Ver credores
                <FaArrowRight size={20} color="#FFFFFF" className="action" />
              </button>
              <button className="goClients">
                Ver clientes
                <FaArrowRight size={20} color="#FFFFFF" className="action" />
              </button>
            </div>
          </div>

          <div className="aboutInvoicing">
            <h1>Faturamento</h1>
            <span className="dailyInvoicing">
              <span className="infos">
                <h3>Faturamento do dia de hoje:</h3>
                <h4>R$1256,00</h4>
              </span>
              <span className="action">
                <FaArrowRight size={30} color="#FFFFFF" />
              </span>
            </span>
            <span className="dailySales">
              <span className="infos">
                <h3>Vendas de hoje:</h3>
                <h4>123</h4>
              </span>
              <span className="action">
                <FaArrowRight size={30} color="#FFFFFF" />
              </span>
            </span>
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
