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
import { API } from "@/api";

interface Product {
  name: string;
  category: string;
  quantity: number;
  cost: number;
  price: number;
  description: string;
  category_id: string;
}

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
  //controlar os estados dos inputs do formulario de cadastro do produto >
  const [product, setProduct] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [cost, setCost] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");

  //controlar o estado do input de cadastro de categoria > 
  const [newCategory, setNewCategory] = useState<string>("");


  //conseguir selecionar no select das categorias || buscar as categorias na api >
  const [categories, setCategories] = useState<string[]>([
    "5e9f8b7a-1234-4567-890a-bcdef1234567",
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);


  async function handleCreateNewCategory(event: React.FormEvent) {
    event.preventDefault();

    if(!newCategory){
      alert("Por favor, insira o nome da categoria.");
      return;
    }

    try {
      await API.post("/categories", {name: newCategory});
      alert("Categoria criada com sucesso!");
      setCategories(prevCategories => [...prevCategories, newCategory]);
      setNewCategory("");
      setIsModalOpen(false);

    } catch (error) {
      alert("Erro ao criar a categoria. Por favor, tente novamente.");
      console.error("Erro ao criar a categoria:", error); 
    }
  }

  async function handleCreateNewProduct(event: React.FormEvent) {
    event.preventDefault();

    if (!product || !category || !quantity || !cost || !price) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const newProduct: Product = {
        name: product,
        category: category,
        quantity: Number(quantity),
        cost: Number(cost),
        price: Number(price),
        description: description,
        category_id: category,
      };
      console.log(newProduct);

      await API.post("/products", newProduct);
      alert("Produto criado com sucesso!");
      onSubmit();
      onCancel();
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
      alert("Erro ao criar o produto. Por favor, tente novamente.");
      return;
    }
  }
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
        <form className="inputs" onSubmit={handleCreateNewProduct}>
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
            id="quantity"
            value={quantity}
            onChange={(e) => 
              setQuantity(e.target.value === "" ? "" : Number(e.target.value))
            }
            variant="outlined"
            autoComplete="off"
          />

          <div className="chooseCategory">
            <button
              id="saveButton"
              onClick={() => {
                setIsModalOpen(true);
                setCategory("");
              }}
              type="button"
            >
              Cadastrar categoria
            </button>
            <div className="selectCategoryBox">
              <InputLabel id="ChooseCategory">Selecionar</InputLabel>
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
          <div className="btnsAction">
            <button id="saveButton" onSubmit={handleCreateNewProduct}>
              Salvar
            </button>
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
        </form>
      </div>
      {/*cadastrar nova categoria*/}
      <Dialog className="modalNewCategory" open={isModalOpen}>
        <DialogTitle className="modalTitle">
          Cadastrar nova categoria
        </DialogTitle>
        <DialogContent className="body">
          <DialogContentText className="subtitle">
            Insira as informações e cadastre uma nova categoria
          </DialogContentText>
          <form onSubmit={handleCreateNewCategory}>
            <input type="text" 
            id="categoryName" 
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}/>
            <div className="btnsAction">
              <button
                id="saveButton"
                onSubmit={handleCreateNewCategory}
                type="submit"
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
