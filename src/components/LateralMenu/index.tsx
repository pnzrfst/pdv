"use client";
import { useRouter } from "next/navigation";
import "./index.css";
import { BsBox } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePointOfSale } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export default function LateralMenu() {
  const router = useRouter()



  return (
    <div className="menuContainer">
      <ul className="menu">
        <li className="menuItem" onClick={() => router.push('/')}> 
          <IoHomeOutline color="#111827" fontSize={18}/>
          <p>Página principal</p>
        </li>
        <li className="menuItem" onClick={() => router.push('/stock')}>
          <BsBox color="#111827"  fontSize={18}/>
          <p>Estoque</p>
        </li>

        <li className="menuItem" onClick={() => router.push('/sales')}>
          <MdOutlinePointOfSale color="#111827"  fontSize={18}/>
          <p>Vendas</p>
        </li>

        <li className="menuItem" onClick={() => router.push('/income')}>
          <FaMoneyBill1Wave color="#111827"  fontSize={18}/>
          <p>Faturamento</p>
        </li>
        <li className="menuItem" onClick={() => router.push('/clients')}>
          <FaUser color="#111827" fontSize={18}/>
          <p>Clientes</p>
        </li>
      </ul>
    </div>
  );
}
