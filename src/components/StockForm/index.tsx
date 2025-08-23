import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
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

  //conseguir selecionar no select das categorias >
  const [categories, setCategories] = useState<string[]>([
    "Bebidas",
    "Alimentos",
    "Higiene",
  ]);

  //controlar o estado do modal de cadastro da categoria >
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
            label="Nome do produto"
            id="name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            variant="outlined"
            autoComplete="off"
          />
          <TextField
            type="number"
            required
            label="Quantidade em estoque"
            id="name"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            variant="outlined"
            autoComplete="off"
          />

          <div className="chooseCategory">
            <button
              id="saveButton"
              onClick={() => {
                setIsModalOpen(true)
                setCategory("")
              }}
              type="button"
            >
              Cadastrar categoria
            </button>
            <div className="selectCategoryBox">
              <InputLabel id="subtitle">Selecionar produto</InputLabel>
              <Select
                labelId="ChooseCategory"
                id="ChooseCategory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="">
                  <em>Selecione uma categoria</em>
                </MenuItem>
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
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
            autoComplete="off"
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
            autoComplete="off"
            variant="outlined"
          />
          <TextField
            type="text"
            label="Descrição: "
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            autoComplete="off"
          />
        </form>
        <div className="btnsAction">
          <button id="saveButton">Salvar</button>
          <button
            id="cancelButton"
            onClick={() => {
              onCancel();
              setCategory("");
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
      {/*Cadastrar nova categoria*/}
      <Dialog className="modalNewCategory" open={isModalOpen}>
        <DialogTitle className="modalTitle">
          Cadastrar nova categoria
        </DialogTitle>
        <DialogContent className="body">
          <DialogContentText className="subtitle">
            Insira as informações e cadastre uma nova categoria
          </DialogContentText>
          <form>
            <input type="text" id="categoryName"/>
            <div className="btnsAction">
              <button
                id="saveButton"
                onClick={() => alert("Cadastrar")}
                type="button"
              >
                Cadastrar
              </button>
              <button
                id="cancelButton"
                onClick={() => setIsModalOpen(false)}
                type="button"
              >
                Cancelar
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
