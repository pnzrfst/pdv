"use client";
import { useRouter } from "next/navigation";
import "./index.css";
import { BsBox } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePointOfSale } from "react-icons/md";

export default function LateralMenu() {
  const router = useRouter()



  return (
    <div className="menuContainer">
      <ul className="menu">
        <li className="menuItem" onClick={() => router.push('/')}> 
          <p>Página principal</p>
          <IoHomeOutline color="black" />
        </li>
        <li className="menuItem" onClick={() => router.push('/stock')}>
          <p>Estoque</p>
          <BsBox color="black" />
        </li>

        <li className="menuItem" onClick={() => router.push('/sales')}>
          <p>Vendas</p>
          <MdOutlinePointOfSale color="black" />
        </li>

        <li className="menuItem" onClick={() => router.push('/income')}>
          <p>Faturamento</p>
          <FaMoneyBill1Wave color="black" />
        </li>
      </ul>
    </div>
  );
}
