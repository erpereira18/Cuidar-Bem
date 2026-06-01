"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.access_token);
        window.location.href = "/dashboard";
      } else {
        alert("Email ou senha inválidos");
      }
    } catch (error) {
      console.log("Backend ainda não conectado:", error);

      // Temporário: permite navegar enquanto o backend não está pronto
      window.location.href = "/dashboard";
    }
  }

  return (
    <main className="login-page">
      <div className="login-logo">
        <div className="logo-icon">✚</div>
        <span>Cuidar Bem</span>
      </div>

      <section className="login-left">
        <div>
          <h1>Um lugar tranquilo para organizar o que importa.</h1>
          <p>Medicamentos, rotinas e lembretes — tudo em um respiro.</p>
        </div>
      </section>

      <section className="login-right">
        <div className="login-box">
          <h2>Entrar</h2>
          <p>Que bom ter você de volta.</p>

          <button className="google-btn" type="button">
            <span>G</span> Continuar com Google
          </button>

          <div className="divider">
            <span></span>
            <small>ou</small>
            <span></span>
          </div>

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="voce@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-btn" type="submit">
              Entrar
            </button>
          </form>

          <a className="create-account">Novo por aqui? Criar conta</a>
        </div>
      </section>
    </main>
  );
}