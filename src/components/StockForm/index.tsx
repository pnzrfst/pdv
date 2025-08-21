import {TextField } from "@mui/material";
import "./index.css";
import { useState } from "react";

interface FormComponentProps {
  onSubmit: () => void;
  onCancel: () => void;
  isOpen: boolean;
  title: string;
  subtitle: string;
}

export default function StockFormComponent({
  onSubmit,
  isOpen,
  onCancel,
  title,
  subtitle,
}: FormComponentProps) {
  const [product, setProduct] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [cost, setCost] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");

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
            label="Nome do produto"
            id="name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            variant="outlined"
          />
          <TextField
            type="text"
            required
            label="Categoria"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
          />
          <TextField
            type="number"
            required
            label="Quantidade"
            id="quantity"
            placeholder="Unidades"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value === "" ? "" : Number(e.target.value))
            }
            variant="outlined"
          />
          <TextField
            type="number"
            required
            label="Custo"
            id="cost"
            placeholder="Defina quanto pagou por esse produto (R$)"
            value={cost}
            onChange={(e) =>
              setCost(e.target.value === "" ? "" : Number(e.target.value))
            }
            variant="outlined"
          />
          <TextField
            type="number"
            required
            label="Preço"
            id="price"
            placeholder="Defina o preço pela venda deste produto (R$)"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value === "" ? "" : Number(e.target.value))
            }
            variant="outlined"
          />
          <TextField
            type="text"
            label="Descrição: "
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
