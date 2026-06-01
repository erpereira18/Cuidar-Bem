    import Link from "next/link";

export default function PerfilPage() {
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
          <Link href="/calendario">🗓️ Calendário</Link>
          <Link href="/perfil" className="active">♙ Perfil</Link>
        </nav>
      </aside>

      <section className="profile-page">
        <h1>Perfil</h1>
        <p>Suas informações e preferências.</p>

        <div className="profile-card">
          <div className="profile-user">
            <div className="profile-avatar">B</div>

            <div>
              <h2>Bruna</h2>
              <span>brunamicaelly2403@gmail.com</span>
            </div>
          </div>

          <label>Nome completo</label>
          <input type="text" defaultValue="Bruna" />

          <label>Email</label>
          <input type="email" defaultValue="brunamicaelly2403@gmail.com" />

          <button>Salvar alterações</button>
        </div>

        <div className="security-card">
          <h2>Segurança</h2>
          <p>
            Para redefinir sua senha, faça logout e use a opção “Esqueci minha senha”
            na tela de login.
          </p>
        </div>
      </section>
    </main>
  );
}