"use client";

import { useState } from "react";
import Link from "next/link";

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function CalendarioPage() {
  const [dataAtual, setDataAtual] = useState(new Date(2026, 4, 6));

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();

  const primeiroDia = new Date(ano, mes, 1).getDay();
  const ultimoDia = new Date(ano, mes + 1, 0).getDate();
  const ultimoDiaAnterior = new Date(ano, mes, 0).getDate();

  const dias = [];

  for (let i = primeiroDia; i > 0; i--) {
    dias.push({ numero: ultimoDiaAnterior - i + 1, muted: true });
  }

  for (let dia = 1; dia <= ultimoDia; dia++) {
    dias.push({
      numero: dia,
      muted: false,
      selected: dia === dataAtual.getDate(),
    });
  }

  while (dias.length < 42) {
    dias.push({ numero: dias.length - ultimoDia - primeiroDia + 1, muted: true });
  }

  function mesAnterior() {
    setDataAtual(new Date(ano, mes - 1, 6));
  }

  function proximoMes() {
    setDataAtual(new Date(ano, mes + 1, 6));
  }

  return (
    <main className="dashboard-page">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">✚</div>
          <span>Cuidar Bem</span>
        </div>

        <nav className="sidebar-menu">
          <Link href="/dashboard">⌘ Início</Link>
          <Link href="/medicamentos">💊 Medicamentos</Link>
          <Link href="/rotinas">☰ Rotinas</Link>
          <Link href="/calendario" className="active">🗓️ Calendário</Link>
          <Link href="/perfil">♙ Perfil</Link>
        </nav>
      </aside>

      <section className="calendar-page">
        <h1>Calendário</h1>
        <p>Veja o histórico do seu cuidado.</p>

        <div className="calendar-layout">
          <div className="calendar-card">
            <div className="calendar-header">
              <button onClick={mesAnterior}>‹</button>
              <h2>{meses[mes]} {ano}</h2>
              <button onClick={proximoMes}>›</button>
            </div>

            <div className="week-days">
              <span>D</span>
              <span>S</span>
              <span>T</span>
              <span>Q</span>
              <span>Q</span>
              <span>S</span>
              <span>S</span>
            </div>

            <div className="calendar-grid">
              {dias.map((dia, index) => (
                <span
                  key={index}
                  className={`${dia.muted ? "muted" : ""} ${
                    dia.selected && !dia.muted ? "selected-day" : ""
                  }`}
                >
                  {dia.numero}
                </span>
              ))}
            </div>
          </div>

          <aside className="calendar-details">
            <h3>Selecione uma data</h3>

            <div>
              <h4>MEDICAMENTOS</h4>
              <p>Nada registrado</p>
            </div>

            <div>
              <h4>ROTINAS</h4>
              <p>Nada registrado</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}