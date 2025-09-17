import { API } from "@/api";
import { Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./index.css";
//id,quantity,cost,price,description

interface editModalProps {
  id: string;
  onSubmit: () => void;
  onCancel: () => void;
  isOpen: boolean;
  selectedId: string;
}

interface Product {
  id: string;
  quantity?: number;
  cost?: number;
  price?: number;
  description?: string;
}

export default function EditModal({
  id,
  isOpen,
  selectedId,
  onCancel,
}: editModalProps) {
  console.log(selectedId);
  const [quantity, setQuantity] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  async function handlePatchProduct(event: React.FormEvent, id: string) {
    event.preventDefault();

    const patchedProduct: Product = {
      id,
      quantity,
      cost,
      price,
      description,
    };

    try {
      await API.patch(`/products/:${id}`, patchedProduct);
      console.log(`Produto com id: ${id} atualizado.`);
    } catch (error: any) {
      console.log(error.message);
      console.error(error);
    }
  }

  async function handleGetProductInfos() {
    try {
      const product = await API.get(`/products/${selectedId}`);

      const infos = {
        quantity: product.data.quantity,
        cost: product.data.cost,
        price: product.data.price,
        description: product.data.description,
      };

      setQuantity(infos.quantity);
      setCost(infos.cost);
      setPrice(infos.price);
      setDescription(infos.description);
    } catch (error: any) {
      console.log(error.message);
      console.error(error.message);
    }
  }

  useEffect(() => {
    if (id && isOpen) {
      handleGetProductInfos();
    }
  }, [id, isOpen]);

  return (
    <div>
      <Modal className="modalBody" open={isOpen} onClose={onCancel}>
        <form
          className="formBody"
          onSubmit={(event) => handlePatchProduct(event, id)}
        >
          <h1>Editar produto</h1>
          <p>Edite as informações do produto selecionado.</p>
          <div className="inputArea">
            <TextField
              type="number"
              placeholder="quantidade"
              className="inputItem"
              label="Quantidade"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            ></TextField>
            <TextField
              type="number"
              placeholder="custo"
              className="inputItem"
              label="Custo"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
            ></TextField>
            <TextField
              type="number"
              placeholder="preço"
              className="inputItem"
              label="Preço"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            ></TextField>
            <TextField
              type="text"
              placeholder="descricao"
              className="inputItem"
              label="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></TextField>
          </div>

          <div className="btns-action">
            <button type="submit" id="saveButton">
              Salvar
            </button>
            <button type="button" id="cancelButton" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
