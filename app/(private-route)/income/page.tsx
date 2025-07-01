"use client"
import HeaderAndSearch from "@/components/HeaderAndSearch";
import { FaArrowRight } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import './index.css'



export default function Income() {
    return (
        <section>
            <HeaderAndSearch module="Faturamento" onSearch={() => console.log('oi')} />
            <section className="box-infos">
                <div className="boxes">
                    <div className="left-side">
                        <div className="most-sales">
                            <h2>Mais vendido</h2>
                            <div className="about-sales">
                                <div><h1>Produto X <FaArrowRight size={30} /> 200 vendas</h1></div>
                                <div><h1>Produto Y <FaArrowRight size={30} /> 100 vendas</h1></div>
                            </div>
                            <button>Ver lista completa <FaArrowRight size={20} color="#FFFFFF" /></button>
                        </div>
                        <div className="about-invoicing">
                            <h2>Faturamento <strong>(mês):</strong></h2>
                            <h1>R$XXXX,XX</h1>
                            <h2>Média diária</h2>
                            <h1>R$ XXXX,XX</h1>
                        </div>
                        <button className="go-to-list">
                            Visualizar estoque completo
                            <FaArrowRight size={30} color="#FFFFFF" />
                        </button>
                    </div>

                    <div className="less-sold">
                        <h2>Qtd de produtos com estoque crítico:</h2>
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
    )
}