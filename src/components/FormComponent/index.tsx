import { TextField } from "@mui/material";
import "./index.css";

interface FormComponentProps {
  onSubmit: () => void;
  onCancel: () => void;
  isOpen: boolean;
  title: string;
  subtitle: string;
}

export default function FormComponent({
  onSubmit,
  isOpen,
  onCancel,
  title,
  subtitle,
}: FormComponentProps) {
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
            variant="outlined"
          />
          <TextField
            type="text"
            required
            label="Categoria"
            id="category"
            variant="outlined"
          />
          <TextField
            type="number"
            required
            label="Quantidade"
            id="quantity"
            variant="outlined"
          />
          <TextField
            type="number"
            required
            label="Preço (un)"
            id="price"
            variant="outlined"
          />
          <TextField
            type="text"
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
