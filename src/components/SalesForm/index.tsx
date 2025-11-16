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

type PaymentMethod =
  | "CARTAO_CREDITO"
  | "CARTAO_DEBITO"
  | "DINHEIRO"
  | "FIADO"
  | "PIX";

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
  saleQuantity: number;
}

interface SaleProduct {
  product_id: string;
  quantity: number;
  price: number;
}

interface Sale {
  products: SaleProduct[];
  client_id: string;
  is_fiado: boolean;
  payment_method: PaymentMethod;
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
  }, []);

  //controlar os clientes selecionados no select >
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedClient, setSelectedClient] = useState<string>("");

  //controlar os inputs do formulario de vendas >
  const [clients, setClients] = useState<Client[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [payment, setPayment] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  function clearInputs() {
    setSelectedClient("");
    setSelectedProducts([]);
    setPrice(0);
    setPayment("");
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

  async function handleCreateSale(event: React.FormEvent) {
    event.preventDefault();

    const mappedProducts: SaleProduct[] = selectedProducts.map((product) => ({
      product_id: product.id,
      quantity: product.saleQuantity,
      price: product.price,
    }));

    const saleData: Sale = {
      products: mappedProducts,
      client_id: selectedClient,
      is_fiado: payment === "FIADO" ? true : false,
      payment_method: payment as PaymentMethod,
    };

    try {
      await API.post("/sales", saleData);
      clearInputs();
      onSubmit();
    } catch (error) {
      console.error("Erro ao criar a venda:", error);
    }
  }

  useEffect(() => {
    const total = selectedProducts.reduce(
      (acc, p) => acc + (p.saleQuantity ?? 0) * p.price,
      0
    );
    setPrice(total);
  }, [selectedProducts]);
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="formBody">
        <span className="title">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </span>
        <form className="inputs" onSubmit={handleCreateSale}>
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
              const newlySelectedProducts = products.filter((product) =>
                value.includes(product.name)
              );

              const updatedSelectedProducts = newlySelectedProducts.map(
                (newProduct) => {
                  const existingProduct = selectedProducts.find(
                    (p) => p.id === newProduct.id
                  );

                  return {
                    ...newProduct,
                    saleQuantity: existingProduct?.saleQuantity ?? 0,
                  };
                }
              );

              setSelectedProducts(updatedSelectedProducts);
              console.log(selectedProducts);
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
            {selectedProducts.length ? (
              selectedProducts.map((product) => (
                <span key={product.id} className="selectedProduct">
                  <div className="productsInfo">
                    <strong>Produto:</strong>
                    <p>{product.name}</p>
                  </div>
                  <div className="productsInfo">
                    <strong>Em estoque:</strong>
                    <p>{product.quantity > 0 ? product.quantity + " un" : "Sem estoque :("}</p>
                  </div>
                  <input
                    key={product.id}
                    id="selectQuantity"
                    type="number"
                    value={product.saleQuantity ?? ""}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setSelectedProducts((prev) =>
                        prev.map((p) =>
                          p.id === product.id
                            ? { ...p, saleQuantity: value }
                            : p
                        )
                      );
                    }}
                  />
                </span>
              ))
            ) : (
              <p>Nenhum produto selecionado</p>
            )}
          </List>
          <InputLabel id="PaymentMethod">Método de pagamento</InputLabel>
          <Select
            labelId="PaymentMethod"
            id="PaymentMethod"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <MenuItem value="CARTAO_CREDITO">Cartão de crédito</MenuItem>
            <MenuItem value="CARTAO_DEBITO">Cartão de débito</MenuItem>
            <MenuItem value="DINHEIRO">Dinheiro</MenuItem>
            <MenuItem value="FIADO">Fiado</MenuItem>
            <MenuItem value="PIX">Pix</MenuItem>
          </Select>
          <span className="subTotal">
            <h3>Total da venda:</h3>
            <p>R${price}</p>
          </span>
          <div className="btnsAction">
            <button id="saveButton" type="submit">
              Salvar
            </button>
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
        </form>
      </div>
    </div>
  );
}
