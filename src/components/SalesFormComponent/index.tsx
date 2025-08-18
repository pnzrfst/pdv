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
  setPayment: (value: string) => void;
  payment: string;
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
  setPayment
}: SalesComponentProps) {

  const handleChange = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };

  const [description, setDescription] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [product, setProduct] = useState<string>("")
  const [quantity, setQuantity] = useState<string>("")

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="formBody">
        <span className="title">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </span>
        <div className="inputs">
          <TextField
            type="text"
            required
            label="Nome do comprador"
            id="name"
            value={name}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <InputLabel id="howToPay">Metódo de pagamento</InputLabel>
          <Select
            labelId="howToPay"
            id="howToPay"
            value={payment}
            onChange={handleChange}
          >
            <MenuItem value="Pix">Pix</MenuItem>
            <MenuItem value="Débito">Débito</MenuItem>
            <MenuItem value="Crédito">Crédito</MenuItem>
          </Select>
          <TextField
            type="text"
            required
            label="Produto"
            value={product}
            id="product"
            onChange={(e) => setProduct(e.target.value)}
            variant="outlined"
          />
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
              setDescription(e.target.value)
              console.log(description)
            }
            }
            label="Descrição: "
            id="description"
            variant="outlined"
          />
        </div>
        <div className="btnsAction">
          <button id="saveButton" onClick={onSubmit}>
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
