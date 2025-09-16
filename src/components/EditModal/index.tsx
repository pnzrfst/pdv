import { API } from "@/api";
import {Modal, TextField } from "@mui/material";
import { useState } from "react";

//id,quantity,cost,price,description

interface editModalProps {
  id: string;
  onSubmit: () => void;
  onCancel: () => void;
  isOpen: boolean;
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
  onSubmit,
  onCancel

}: editModalProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  async function handlePatchProduct(
    event: React.FormEvent,
     id : string
  ) {
    event.preventDefault();

    const patchedProduct: Product = {
      id,
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

  return (
    <div>
      <Modal open={isOpen} onClose={onCancel}>
        <form onSubmit={(event) => handlePatchProduct(event, id)}>
          <TextField
            type="number"
            placeholder="quantidade"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          ></TextField>
          <TextField
            type="number"
            placeholder="custo"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
          ></TextField>
          <TextField
            type="number"
            placeholder="preço"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          ></TextField>
          <TextField
            type="text"
            placeholder="descricao"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextField>

          <button type = "submit">Salvar</button>
        </form>
      </Modal>
    </div>
  );
}
