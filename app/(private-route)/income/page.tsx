"use client";
import HeaderAndSearch from "@/components/HeaderAndSearch";
import { FaArrowRight } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./index.css";

export default function Income() {
  return (
    <section>
      <HeaderAndSearch
        module="Faturamento"
        onSearch={() => console.log("oi")}
      />
      <section className="box-infos">
        <div className="boxes">
          <div className="left-side">
            <div className="most-sales">
              <h2>Mais vendido</h2>
              <div className="about-sales">
                <div>
                  <h1>
                    Produto X <FaArrowRight size={20} /> 200 vendas
                  </h1>
                </div>
                <div>
                  <h1>
                    Produto Y <FaArrowRight size={20} /> 100 vendas
                  </h1>
                </div>
              </div>
              <button>
                Ver lista completa <FaArrowRight size={20} color="#FFFFFF" />
              </button>
            </div>
            <div className="about-invoicing">
              <h2>
                Faturamento <strong>(mês):</strong>
              </h2>
              <h1>R$XXXX,XX</h1>
              <p>Média diária</p>
              <h3>R$ XXXX,XX</h3>
            </div>
          </div>

          <div className="less-sold">
            <h2>Menos vendido</h2>
            <div className="about">
              <div>
                <h1>
                  Produto X <FaArrowRight size={20} /> 200 vendas
                </h1>
              </div>
              <div>
                <h1>
                  Produto Y <FaArrowRight size={20} /> 100 vendas
                </h1>
              </div>
            </div>
            <button>
              Ver lista completa <FaArrowRight size={20} color="#FFFFFF" />
            </button>
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
