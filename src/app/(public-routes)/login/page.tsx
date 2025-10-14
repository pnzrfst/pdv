"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { API } from "@/api";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    const user: User = {
      email: email,
      password: password,
    };

    try {
      const response = await API.post("users/login", user);
      const token = response.data.accessToken;
      localStorage.setItem("accessToken", token);
      const username = response.data.user;
      localStorage.setItem("name", username);

      setEmail("");
      setPassword("");

      router.push("/home");
    } catch (error) {
      console.log("ERRO:", error);
    }
  }

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginArea}>
        <form className={styles.form} onSubmit={(e) => handleLogin(e)}>
          <h1>
            Ponto de <strong>venda</strong>
          </h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Insira seu email"
            className={styles.input}
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Insira sua senha"
            className={styles.input}
          ></input>
          <button type="submit">Entrar</button>
        </form>

        <div className={styles.userArea}>
          <span className={styles.actions}>
            <p>
              Esqueceu sua senha? Clique <strong>aqui</strong>
            </p>
          </span>
          <span className={styles.actions}>
            <p>
              Não possui conta? Clique <strong>aqui</strong>
            </p>
          </span>
          <span className={styles.actions}>
            <p>
              Precisa de suporte? Clique <strong>aqui</strong>
            </p>
          </span>
        </div>
      </div>
      <div className={styles.backgroundImage}></div>
    </section>
  );
}
