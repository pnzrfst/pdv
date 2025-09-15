import { Box, Modal, TextField } from "@mui/material";
import { useState } from "react";

//id,quantity,cost,price,description

interface editModalProps {
  id: string;
  handleOpen: () => void;
  handleClose: () => void;
}

export default function EditModal({
  id,
  handleClose,
  handleOpen,
}: editModalProps) {
  const [open, setIsOpen] = useState<boolean>(false);

  const [quantity, setQuantity] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  return (
    <div>
      <Modal open={open} onClose={() => setIsOpen(false)}>
        <Box>
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
        </Box>
      </Modal>
    </div>
  );
}
