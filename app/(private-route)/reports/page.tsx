"use client";

import "./index.css"
import HeaderAndSearch from "@/components/HeaderAndSearch";
import { FaDollarSign } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";

export default function Reports() {
  return (
    <div className="body">
      <HeaderAndSearch
        module="Relatórios" onSearch={() => console.log("oi")}></HeaderAndSearch>
      <section className="boxes">
        <ul>
            <li className="box">
                <h5>Total de vendas</h5>
                <p><FaCartShopping style={{ marginRight: '8px' }} size={24} color="#7CA982"/>120</p>
            </li>
            <li className="box">
                <h5>Total de faturamento (hoje)</h5> 
                <p><FaDollarSign style={{ marginRight: '8px' }} size={24} color="#7CA982"/>R$ 20,00</p>
            </li>
            <li className="box">
                <h5>Total de produtos em estoque</h5>
                <p><FiBox style={{ marginRight: '8px' }} size={24} color="#7CA982"/>200</p>
            </li>
            <li className="box">
                <h5>Asseinfo me contrata</h5>
                <p>Por favor</p>
            </li>
        </ul>
      </section>

      <section className="graph-area">
        <h2>Gráfico aqui</h2>
      </section>
    </div>
  );
}
