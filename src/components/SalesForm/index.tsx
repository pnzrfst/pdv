import {
  Autocomplete,
  Chip,
  InputLabel,
  List,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./index.css";
import { useEffect, useState } from "react";
import { API } from "@/api";

interface SalesComponentProps {
  onSubmit: () => void;
  onCancel: () => void;
  isOpen: boolean;
  title: string;
  subtitle: string;
}

interface Client {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface SaleComposition {
  composition: [
    {
      product: Product;
    }
  ];
}

export default function SalesFormComponent({
  onSubmit,
  isOpen,
  onCancel,
  title,
  subtitle,
}: SalesComponentProps) {
  useEffect(() => {
    getClients();
    getProducts();
    console.log(selectedProducts);
  }, []);

  //controlar os clientes selecionados no select >
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedClient, setSelectedClient] = useState<string>("");

  //controlar os inputs do formulario de vendas >
  const [quantity, setQuantity] = useState<number>(0);
  const [clients, setClients] = useState<Client[]>([]);
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [payment, setPayment] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  function clearInputs() {
    setDescription("");
    setSelectedClient("");
    setSelectedProducts([]);
    setPrice(0);
    setPayment("");
    setDescription("");
  }

  async function getClients() {
    try {
      const list = await API.get("/clients");

      const response = list.data.clients;

      response.map((client: { name: string; id: string }) => ({
        name: client.name,
        id: client.id,
      }));

      setClients(response);
    } catch (error: any) {
      console.error("Erro ao buscar os clientes:", { error: error.message });
    }
  }

  async function getProducts() {
    try {
      const list = await API.get("/products");

      const response = list.data.products;

      response.map((product: Product) => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
      }));

      setProducts(response);
    } catch (error: any) {
      console.error("Erro ao buscar os clientes:", { error: error.message });
    }
  }

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="formBody">
        <span className="title">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </span>
        <form className="inputs" onSubmit={onSubmit}>
          <InputLabel id="ChooseClient">Selecionar cliente</InputLabel>
          <Select
            labelId="ChooseClient"
            id="ChooseClient"
            onClick={() => getClients()}
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <MenuItem value="">
              <em>Selecione o cliente</em>
            </MenuItem>
            {clients.map((client) => (
              <MenuItem key={client.id} value={client.id}>
                {client.name}
              </MenuItem>
            ))}
          </Select>
          <Autocomplete
            multiple
            id="tags-filled"
            options={products.map((option) => option.name)}
            freeSolo
            onChange={(event, value) => {
              const selected = products.filter((product) =>
                value.includes(product.name)
              );
              setSelectedProducts(selected);
            }}
            renderValue={(value: string[]) =>
              value.map((option: string) => (
                <Chip key={option} variant="outlined" label={option} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Produtos"
                placeholder="Selecione os produtos"
                autoComplete="off"
              />
            )}
          />
          <InputLabel id="SelectQuantity">Selecione a quantidade</InputLabel>
          <List>
            {selectedProducts.length ? selectedProducts.map((product) => (
              <span key={product.id} className="selectedProduct">
                {product.name}
                <input
                  type="number"
                  min={1}
                  max={product.quantity}
                  defaultValue={1}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </span>
            )) : <p>Nenhum produto selecionado</p>}
          </List>
          <InputLabel id="PaymentMethod">Método de pagamento</InputLabel>
          <Select
            labelId="PaymentMethod"
            id="PaymentMethod"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <MenuItem value="Pix">Pix</MenuItem>
            <MenuItem value="Dinheiro">Dinheiro</MenuItem>
            <MenuItem value="Débito">Débito</MenuItem>
            <MenuItem value="Crédito">Crédito</MenuItem>
            <MenuItem value="Fiado">Fiado</MenuItem>
          </Select>
          <TextField
            type="number"
            value={price}
            label="Valor da venda"
            id="price"
            onChange={(e) => setPrice(Number(e.target.value))}
            variant="outlined"
            autoComplete="off"
            disabled
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
            autoComplete="off"
          />
        </form>
        <div className="btnsAction">
          <button id="saveButton">Salvar</button>
          <button
            id="cancelButton"
            onClick={() => {
              onCancel();
              clearInputs();
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
