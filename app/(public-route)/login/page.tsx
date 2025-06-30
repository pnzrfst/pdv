"use client";

import { useState } from "react";
import "./index.css";

export default function Login() {

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("")


  
  return (
    <section className="body">
      <div className="login-area">
        <h1>Ponto de</h1>
        <p>venda</p>
        <form>
          <label htmlFor="">Usuário</label>
          <input
            type="text"
            name="input-user"
            id="input-user"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Insira seu usuário"
          />
          <label htmlFor="">Senha</label>
          <input
            type="password"
            name="input-password"
            id="input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Insira sua senha"
          />
          <button className="entryButton">Entrar</button>
        </form>

        <div className="actions">
          <p className="createAccount">
            Não possui uma conta? Crie{" "}
            <span onClick={() => alert("ooi")} className="createNewAccount">
              <strong>aqui</strong>
            </span>
          </p>
          <p className="forgotPassword">
            Esqueceu sua senha? Redefinir{" "}
            <span onClick={() => alert("ooi")} className="createNewAccount">
              <strong>senha</strong>
            </span>
          </p>
          <p className="forgotEmail">
            Esqueceu seu email? Redefinir{" "}
            <span onClick={() => alert("ooi")} className="createNewAccount">
              <strong>email</strong>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
