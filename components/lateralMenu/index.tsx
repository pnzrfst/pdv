import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import './index.css';

interface LateralMenuProps {
  onClose: () => void
}

export default function LateralMenu({onClose} : LateralMenuProps) {


  return (
    <section className="lateral-menu">
      <header>
        <button><IoCloseSharp size={60}  color={"#7ca982"} onClick={onClose}/></button>
      </header>

      <section className="btns-action">
        <button className="templateButton">
          <span>Estoque</span>
          <FaArrowRight size={30}/>
        </button>
        <button className="templateButton">
          <span>Vendas</span>
          <FaArrowRight size={30}/>
        </button>
        <button className="templateButton">
          <span>Relatórios</span>
          <FaArrowRight size={30}/>
        </button>
        <button className="templateButton">
          <span>Faturamento</span>
          <FaArrowRight size={30}/>
        </button>
      </section>
    </section>
  );
}
