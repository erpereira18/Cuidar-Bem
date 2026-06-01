import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">✚</div>
          <span>Cuidar Bem</span>
        </div>

        <nav className="sidebar-menu">
          <Link href="/dashboard" className="active">⌘ Início</Link>
          <Link href="/medicamentos">💊 Medicamentos</Link>
          <Link href="/rotinas">☰ Rotinas</Link>
          <Link href="/calendario">🗓️ Calendário</Link>
          <Link href="/perfil">♙ Perfil</Link>
        </nav>
      </aside>

      <section className="dashboard-content">
        <p className="dashboard-date">sexta-feira, 29 de maio</p>
        <h1>Olá, Bruna 🌿</h1>
        <p className="dashboard-subtitle">Vamos cuidar do seu dia com calma.</p>

        <section className="dashboard-cards">
          <div className="dash-card">
            <span>PROGRESSO DO DIA</span>
            <h2>0%</h2>
            <p>0 de 0 tarefas</p>
          </div>

          <div className="dash-card">
            <span>MEDICAMENTOS</span>
            <h2>0/0</h2>
            <p>doses hoje</p>
          </div>

          <div className="dash-card">
            <span>ROTINAS</span>
            <h2>0/0</h2>
            <p>concluídas</p>
          </div>

          <div className="dash-card">
            <span>ATIVOS</span>
            <h2>0</h2>
            <p>medicamentos cadastrados</p>
          </div>
        </section>

        <section className="dashboard-bottom">
          <div className="dash-large-card">
            <h3>Medicamentos de hoje</h3>
            <div className="empty-state">Nenhum medicamento agendado para hoje.</div>
          </div>

          <div className="dash-large-card">
            <h3>Rotinas de hoje</h3>
            <div className="empty-state">Sem rotinas para hoje. Crie uma para começar.</div>
          </div>
        </section>
      </section>
    </main>
  );
}