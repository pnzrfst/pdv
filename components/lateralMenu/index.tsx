
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import './index.css';
import { useRouter } from "next/navigation";

interface LateralMenuProps {
  onClose: () => void
}



export default function LateralMenu({onClose} : LateralMenuProps) {
  const router = useRouter();

  return (
    <section className="lateral-menu">
      <header>
        <button><IoCloseSharp size={60}  color={"#7ca982"} onClick={onClose}/></button>
      </header>

      <section className="btns-action">
        <button className="templateButton" type="button" onClick={() => router.push('/stock')}> 
          <span>Estoque</span>
          <FaArrowRight size={30}/>
          
        </button>
        <button className="templateButton" type="button" onClick={() => router.push('/sales')}>
          <span>Vendas</span>
          <FaArrowRight size={30}/>
          
        </button>
        <button className="templateButton" type="button" onClick={() => router.push('/reports')}>
          <span>Relatórios</span>
          <FaArrowRight size={30}/>
          
        </button>
        <button className="templateButton" type="button" onClick={() => router.push('/income')}> 
          <span>Faturamento</span>
          <FaArrowRight size={30}/>
        </button>
      </section>
    </section>
  );
}
