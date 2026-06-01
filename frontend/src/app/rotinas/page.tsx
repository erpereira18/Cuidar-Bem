"use client";

import { useState } from "react";
import Link from "next/link";

export default function RotinasPage() {
  const [modalAberto, setModalAberto] = useState(false);

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
          <Link href="/rotinas" className="active">☰ Rotinas</Link>
          <Link href="/calendario">🗓️ Calendário</Link>
          <Link href="/perfil">♙ Perfil</Link>
        </nav>
      </aside>

      <section className="med-page">
        <div className="med-header">
          <div>
            <h1>Rotinas</h1>
            <p>Construa hábitos com leveza, no seu ritmo.</p>
          </div>

          <button className="med-add-btn" onClick={() => setModalAberto(true)}>
            + Nova rotina
          </button>
        </div>

        <div className="med-empty-card">
          <div className="routine-icon">☰</div>
          <h2>Nenhuma rotina</h2>
          <p>Crie sua primeira rotina para organizar seu dia.</p>
        </div>
      </section>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-card routine-modal">
            <div className="modal-header">
              <h2>Nova rotina</h2>
              <button onClick={() => setModalAberto(false)}>×</button>
            </div>

            <label>Nome da rotina</label>
            <input type="text" placeholder="Ex.: Beber água" />

            <label>Horário</label>
            <input type="time" />

            <label>Frequência</label>
            <select className="modal-select">
              <option>Todos os dias</option>
              <option>Segunda a sexta</option>
              <option>Finais de semana</option>
            </select>

            <label>Observações</label>
            <textarea placeholder="Descreva a rotina..." />

            <button className="modal-save-btn" onClick={() => setModalAberto(false)}>
              Salvar rotina
            </button>
          </div>
        </div>
      )}
    </main>
  );
}