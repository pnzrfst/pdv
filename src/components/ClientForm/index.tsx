import { Modal, TextField } from "@mui/material";
import "./index.css";
import { useState } from "react";
import { API } from "@/api";

interface ClientsComponentProps {
  onSubmit: () => void;
  onCancel: () => void;
  isOpen: boolean;
  title: string;
  subtitle: string;
}

interface Client {
  name: string;
  phone: string;
  address: string
}

export default function ClientsForm({
  onSubmit,
  isOpen,
  onCancel,
  title,
  subtitle,
}: ClientsComponentProps) {

  function clearInputs() {
    setName("");
    setAddress("");
    setPhone("");
  }


  async function handleCreateClient(event: React.FormEvent) {
    event.preventDefault();

    const newClient : Client = {
      name,
      phone,
      address
    }

    try {
      await API.post("/clients", newClient);
      clearInputs();
      onSubmit();
    } catch (error: any) {
      console.log("Erro ao criar cliente", error);
    }
  }


  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  if (!isOpen) return null;

  return (
    <Modal className="modalBody" open={isOpen} onClose={onCancel}>
      <div>
        <Modal className="modalBody" open={isOpen} onClose={onCancel}>
          <form
            className="formBody"
            onSubmit={handleCreateClient}
          >
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="inputArea">
              <TextField
                type="text"
                placeholder="Nome"
                className="inputItem"
                label="Nome do cliente"
                value={name}
                onChange={(e) => setName(String(e.target.value))}
              ></TextField>
              <TextField
                type="text"
                placeholder="Contato"
                className="inputItem"
                label="Contato do cliente (Número de telefone)"
                value={phone}
                onChange={(e) => setPhone(String(e.target.value))}
              ></TextField>
              <TextField
                type="text"
                placeholder="Endereço"
                className="inputItem"
                label="Endereço"
                value={address}
                onChange={(e) => setAddress(String(e.target.value))}
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
    </Modal>
  );
}
