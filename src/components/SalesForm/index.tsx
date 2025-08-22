import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import "./index.css";
import { useState } from "react";

interface SalesComponentProps {
  onSubmit: () => void;
  onCancel: () => void;
  setProduct: (value: string) => void;
  setPayment: (value: string) => void;
  payment: string;
  product: string;
  isOpen: boolean;
  title: string;
  subtitle: string;
}

export default function SalesFormComponent({
  onSubmit,
  isOpen,
  onCancel,
  title,
  subtitle,
  payment,
  setPayment,
  product,
  setProduct,
}: SalesComponentProps) {
  const handlePaymentChange = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };

  const handleProductPick = (event: SelectChangeEvent) => {
    setProduct(event.target.value);
  };

  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="formBody">
        <span className="title">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </span>
        <form className="inputs" onSubmit={onSubmit}>
          <TextField
            type="text"
            required
            label="Nome do comprador"
            id="name"
            value={name}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <InputLabel id="ChooseProduct">Selecionar produto</InputLabel>
          <Select
            labelId="ChooseProduct"
            id="ChooseProduct"
            value={product}
            onChange={handleProductPick}
          >
            {/*Aqui vai o map para cada produto do estoque*/}
            <MenuItem value="ID_Produto1">Maçã</MenuItem>
            <MenuItem value="ID_Produto2">Caju</MenuItem>
            <MenuItem value="ID_Produto3">Banana</MenuItem>
          </Select>

          <InputLabel id="PaymentMethod">Método de pagamento</InputLabel>
          <Select
            labelId="PaymentMethod"
            id="PaymentMethod"
            value={payment}
            onChange={handlePaymentChange}
          >
            <MenuItem value="Pix">Pix</MenuItem>
            <MenuItem value="Débito">Débito</MenuItem>
            <MenuItem value="Crédito">Crédito</MenuItem>
          </Select>
          <TextField
            type="number"
            required
            value={quantity}
            label="Quantidade"
            id="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            variant="outlined"
          />
          <TextField
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
              console.log(description);
            }}
            label="Descrição: "
            id="description"
            variant="outlined"
          />
        </form>
        <div className="btnsAction">
          <button id="saveButton">
            Salvar
          </button>
          <button id="cancelButton" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
