"use client";

import { useState } from "react";
import Link from "next/link";

export default function MedicamentosPage() {
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
          <Link href="/medicamentos" className="active">💊 Medicamentos</Link>
          <Link href="/rotinas">☰ Rotinas</Link>
          <Link href="/calendario">🗓️ Calendário</Link>
          <Link href="/perfil">♙ Perfil</Link>
        </nav>
      </aside>

      <section className="med-page">
        <div className="med-header">
          <div>
            <h1>Medicamentos</h1>
            <p>Gerencie seus medicamentos e horários.</p>
          </div>

          <button className="med-add-btn" onClick={() => setModalAberto(true)}>
            + Novo
          </button>
        </div>

        <div className="med-empty-card">
          <div className="med-icon">💊</div>
          <h2>Nenhum medicamento</h2>
          <p>Cadastre o primeiro para começar a acompanhar suas doses.</p>
        </div>
      </section>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h2>Novo medicamento</h2>
              <button onClick={() => setModalAberto(false)}>×</button>
            </div>

            <label>Nome</label>
            <input type="text" placeholder="Ex.: Losartana" />

            <label>Dosagem</label>
            <input type="text" placeholder="Ex.: 50mg" />

            <label>Horários</label>
            <div className="modal-time-row">
              <input type="time" defaultValue="08:00" />
              <button type="button">×</button>
            </div>

            <p className="modal-add-hour">+ Adicionar horário</p>

            <label>Observações</label>
            <textarea placeholder="Tomar após refeição..." />

            <button
              className="modal-save-btn"
              onClick={() => setModalAberto(false)}
            >
              Salvar medicamento
            </button>
          </div>
        </div>
      )}
    </main>
  );
}