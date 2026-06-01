import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <header className="home-header">
        <div className="home-logo">
          <div className="logo-icon">✚</div>
          <span>Cuidar Bem</span>
        </div>

        <nav className="home-nav">
          <Link href="/login">Entrar</Link>
          <Link href="/login" className="home-nav-button">
            Começar grátis
          </Link>
        </nav>
      </header>

      <section className="home-hero">
        <div className="home-text">
          <span className="home-tag">
            Seu cuidado, com calma e clareza
          </span>

          <h1>
            Um respiro para <br />
            cuidar de si — e <br />
            de <br />
            quem você ama.
          </h1>

          <p>
            O Cuidar Bem organiza medicamentos, rotinas e lembretes em um só
            lugar. Simples, acolhedor e pensado para o dia a dia.
          </p>

          <div className="home-buttons">
            <Link href="/login" className="home-primary">
              Criar minha conta
            </Link>

            <Link href="/login" className="home-secondary">
              Já tenho conta
            </Link>
          </div>
        </div>

        <div className="home-card">
          <span>HOJE, TERÇA-FEIRA</span>
          <h2>Seu dia em equilíbrio</h2>

          <div className="home-task">
            <p>💊 Vitamina D — 08:00</p>
            <small>feito</small>
          </div>

          <div className="home-task">
            <p>💧 Tomar 2L de água</p>
            <small>feito</small>
          </div>

          <div className="home-task">
            <p>🩺 Losartana — 20:00</p>
            <small>pendente</small>
          </div>

          <div className="home-task">
            <p>🚶 Caminhada 20 min</p>
            <small>pendente</small>
          </div>
        </div>
      </section>
    </main>
  );
}