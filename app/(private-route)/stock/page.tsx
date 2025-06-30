"use client";

import { FaArrowRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

import "./index.css";
import LateralMenu from "@/components/lateralMenu/page";
import { useState } from "react";

export default function Home() {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <section className="body">
      <header className="header">
        <div className="burger-and-title">
          <IoMdMenu
            cursor={"pointer"}
            size={60}
            onClick={() => setMenuVisible(!isMenuVisible)}
          ></IoMdMenu>
          <h1>Estoque</h1>
          {isMenuVisible ? (
            <LateralMenu onClose={() => setMenuVisible(false)}></LateralMenu>
          ) : (
            false
          )}
        </div>
        <div className="icon-and-search">
          <CiSearch size={30} color="#243E36"></CiSearch>
          <input type="text" />
        </div>
      </header>

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
