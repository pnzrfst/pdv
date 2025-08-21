import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./index.css";
import { useState } from "react";

interface ClientsComponentProps {
  onSubmit: () => void;
  onCancel: () => void;
  isOpen: boolean;
  title: string;
  subtitle: string;
}

export default function ClientsForm({
  onSubmit,
  isOpen,
  onCancel,
  title,
  subtitle,
}: ClientsComponentProps) {

  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");

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
            label="Nome do cliente"
            id="name"
            value={name}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="text"
            required
            value={address}
            label="Endereço"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            variant="outlined"
          />
          <TextField
            type="number"
            required
            value={contact}
            label="Contato"
            id="contact"
            onChange={(e) => setContact(e.target.value)}
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
