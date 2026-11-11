const { useState, useEffect } = React;
const NAME = "MENEZES";
const WHATSAPP_NUMBER = "5518996241216";
const WHATSAPP_MESSAGE = "Olá!";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const INSTAGRAM_URL = "https://www.instagram.com/menezssz_/";

const PROJECTS = [
  {
    number: "01",
    title: "Projeto  1",
    channel: "",
    category: "",
    src: "video1.mp4",
    description: ""
  },
  {
    number: "02",
    title: "Projeto 2",
    channel: "",
    category: "",
    src: "video2.mp4",
    description: ""
  },
  {
    number: "03",
    title: "Projeto 3",
    channel: "",
    category: "",
    src: "video3.mp4",
    description: ""
  },
  {
    number: "04",
    title: "Projeto 4",
    channel: "",
    category: "",
    src: "video4.mp4",
    description: ""
  }
];

const TECH = [
  "PREMIERE PRO",
  "AFTER EFFECTS",
  "DAVINCI RESOLVE",
  "CAPCUT",
  "PHOTOSHOP",
  "SOUND DESIGN"
];

const SERVICES = [
  {
    id: 1,
    title: "Vídeos curtos",
    desc: "Edição de Reels, TikTok, YouTube Shorts e legendas para prender a atenção."
  },
  {
    id: 2,
    title: "SFX",
    desc: "Efeitos sonoros profissionais, com ênfase para edição dinamica."
  },
  {
    id: 3,
    title: "Anúncios e criativos",
    desc: "Vídeos para campanhas, VSLs e criativos com foco em aumentar o CTA."
  }
];

/* ===== ÍCONES ===== */
function Icon({ name, size = 18 }) {
  const icons = {
    arrow: "↗",
    instagram: "◎",
    whatsapp: "◉",
    play: "▶",
    star: "✳",
    menu: "☰",
    close: "×"
  };
  return (
    <span
      style={{
        display: "inline-flex",
        fontSize: size,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {icons[name] || "•"}
    </span>
  );
}

/* ===== ESTRELAS ===== */
function Stars({ count = 30 }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 7) * 0.4}s`
          }}
        />
      ))}
    </div>
  );
}

/* ===== MARQUEE ===== */
function Marquee({ items, reverse = false }) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[...items, ...items, ...items].map((item, index) => (
          <span className="marquee-item" key={index}>
            {item}
            <span className="marquee-star">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== VÍDEOS ===== */
function VideoBox({ src }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="video-box">
      {failed ? (
        <div className="video-error">
          <span>▶</span>
          <strong>Vídeo não encontrado</strong>
          <small>Verifique o arquivo {src}</small>
        </div>
      ) : (
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* ===== APLICATIVO ===== */
function App() {
  const [activeService, setActiveService] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("show"));
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          color-scheme: light dark;

          /* TEMA ESCURO (padrão) */
          --bg: #090a09;
          --panel: #151715;
          --text: #f4f4ef;
          --muted: #999d94;
          --lime: #c7ff35;
          --line: rgba(255,255,255,.12);
        }

        @media (prefers-color-scheme: light) {
          :root {
            --bg: #f7f7f4;
            --panel: #ffffff;
            --text: #111210;
            --muted: #555950;
            --lime: #b4dd2c;
            --line: rgba(0,0,0,.12);
          }
        }

        html {
          scroll-behavior: smooth;
          background: var(--bg);
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Manrope', Arial, sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 10% 5%, rgba(100,65,150,.18), transparent 40%),
            radial-gradient(ellipse at 90% 55%, rgba(65,120,50,.12), transparent 40%),
            var(--bg);
        }

        .container {
          width: min(1160px, calc(100% - 48px));
          margin: auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .logo-symbol {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid var(--lime);
          border-radius: 50%;
          color: var(--lime);
        }

        .stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .stars span {
          position: absolute;
          width: 3px;
          height: 3px;
          background: var(--lime);
          border-radius: 50%;
          opacity: .55;
          animation: twinkle 3s infinite ease-in-out;
        }

        @keyframes twinkle {
          0%,100% { opacity: .15; transform: scale(.7); }
          50% { opacity: .9; transform: scale(1.5); }
        }

        /* HERO */
        .hero {
          min-height: 760px;
          position: relative;
          padding: 0 7%;
          isolation: isolate;
          background:
            radial-gradient(ellipse at 15% 10%, rgba(103,65,150,.25), transparent 50%),
            radial-gradient(ellipse at 90% 90%, rgba(116,170,35,.15), transparent 45%),
            var(--bg);
        }

        .nav {
          height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--line);
          position: relative;
          z-index: 5;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 30px;
          font-size: 12px;
          color: var(--muted);
        }

        .nav-actions a:hover {
          color: var(--lime);
        }

        .pill-outline {
          padding: 12px 20px;
          border: 1px solid var(--line);
          border-radius: 30px;
        }

        .hero-inner {
          max-width: 1100px;
          margin: auto;
          padding-top: 115px;
          position: relative;
          z-index: 2;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 17px;
          border: 1px solid var(--line);
          border-radius: 30px;
          color: var(--muted);
          font-size: 10px;
          letter-spacing: 2px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--lime);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--lime);
        }

        .grad-title {
          font-size: clamp(65px, 13vw, 155px);
          line-height: .95;
          letter-spacing: -.09em;
          font-weight: 800;
          margin: 35px 0;
          background: linear-gradient(100deg, var(--text) 10%, var(--lime) 85%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          opacity: 0;
          transform: translateY(35px);
          transition: 1s ease;
        }

        .grad-title.show-title {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-sub {
          max-width: 570px;
          color: var(--muted);
          font-size: clamp(16px, 2vw, 21px);
          line-height: 1.8;
        }

        .hero-cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 35px;
        }

        .btn-white,
        .btn-glass {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 17px 24px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 800;
          transition: .3s;
        }

        .btn-white {
          background: var(--lime);
          color: var(--bg);
        }

        .btn-white:hover {
          background: #e0ff8c;
          transform: translateY(-4px);
        }

        .btn-glass {
          border: 1px solid var(--line);
          background: rgba(255,255,255,.04);
        }

        .btn-glass:hover {
          border-color: var(--lime);
          color: var(--lime);
          transform: translateY(-4px);
        }

        /* TECNOLOGIAS */
        .logos {
          padding: 55px 0;
          transform: rotate(-2deg) scale(1.03);
          background: var(--lime);
          color: var(--bg);
          margin: 30px 0 110px;
          overflow: hidden;
        }

        .marquee {
          overflow: hidden;
          padding: 12px 0;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-track.reverse {
          animation-direction: reverse;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 0 25px;
          white-space: nowrap;
          font-size: clamp(20px, 3vw, 35px);
          font-weight: 800;
        }

        .marquee-star {
          font-size: 25px;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        /* PROJETOS */
        .projects {
          padding: 50px 7% 130px;
        }

        .eyebrow {
          color: var(--lime);
          font-size: 11px;
          letter-spacing: 3px;
          margin-bottom: 25px;
        }

        .grad-h2 {
          max-width: 850px;
          font-size: clamp(36px, 6vw, 68px);
          line-height: 1.05;
          letter-spacing: -.06em;
          margin-bottom: 20px;
        }

        .muted {
          color: var(--muted);
          line-height: 1.8;
          max-width: 600px;
          font-size: 14px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 28px;
          margin-top: 55px;
        }

        .card {
          padding: 17px;
          border: 1px solid var(--line);
          border-radius: 25px;
          background: var(--panel);
          transition: .35s;
        }

        .card:hover {
          transform: translateY(-7px);
          border-color: rgba(199,255,53,.4);
        }

        .video-box {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--bg);
          border-radius: 13px;
          overflow: hidden;
        }

        .video-box video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background: var(--bg);
        }

        .video-error {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--muted);
          text-align: center;
          font-size: 12px;
        }

        .video-error span {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border: 1px solid var(--lime);
          color: var(--lime);
          border-radius: 50%;
        }

        .card-body {
          padding: 23px 7px 10px;
        }

        .card-tag {
          color: var(--lime);
          font-size: 10px;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .card-body h3 {
          font-size: 22px;
          letter-spacing: -.5px;
          margin-bottom: 8px;
        }

        .channel {
          font-size: 12px;
          color: var(--muted);
          margin-top: 10px;
        }

        .channel strong {
          color: var(--lime);
          font-weight: 600;
        }

        /* SERVIÇOS */
        .services {
          padding: 110px 7% 130px;
          border-top: 1px solid var(--line);
          background: radial-gradient(ellipse at 90% 40%, rgba(55,105,55,.12), transparent 60%);
        }

        .service-list {
          max-width: 850px;
          margin-top: 55px;
          border-top: 1px solid var(--line);
        }

        .service-item {
          border-bottom: 1px solid var(--line);
        }

        .service-button {
          width: 100%;
          padding: 27px 0;
          display: grid;
          grid-template-columns: 55px 1fr 30px;
          align-items: center;
          gap: 15px;
          border: 0;
          background: none;
          color: var(--text);
          text-align: left;
          cursor: pointer;
        }

        .service-num {
          color: var(--lime);
          font-size: 12px;
        }

        .service-name {
          font-size: clamp(19px, 3vw, 27px);
          font-weight: 600;
        }

        .service-plus {
          color: var(--lime);
          font-size: 24px;
          text-align: center;
          transition: .3s;
        }

        .service-item.open .service-plus {
          transform: rotate(45deg);
        }

        .service-detail {
          padding: 0 40px 25px 70px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
          animation: fadeDown .3s ease;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 
                    opacity: 1;
          transform: translateY(0);
        }
      }

      /* CONTATO */
      .contact {
        position: relative;
        padding: 130px 7%;
        text-align: center;
        background: radial-gradient(ellipse at center, rgba(115,150,45,.13), transparent 65%);
      }

      .contact .grad-h2 {
        margin: 0 auto 20px;
        max-width: 800px;
      }

      .contact .muted {
        margin: auto;
      }

      .contact .hero-cta {
        justify-content: center;
      }

      /* RODAPÉ */
      .footer {
        padding: 35px 7%;
        border-top: 1px solid var(--line);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }

      .footer p {
        color: var(--muted);
        font-size: 11px;
        text-align: right;
      }

      /* ANIMAÇÕES DE REVEAL */
      .reveal {
        opacity: 0;
        transform: translateY(25px);
        transition: opacity .8s, transform .8s;
      }

      .reveal.show {
        opacity: 1;
        transform: translateY(0);
      }

      /* CELULAR */
      @media (max-width: 760px) {
        .hero {
          min-height: 680px;
          padding: 0 22px;
        }

        .nav {
          height: 75px;
        }

        .nav-actions {
          gap: 13px;
          font-size: 11px;
        }

        .nav-actions .pill-outline {
          padding: 10px 13px;
        }

        .hero-inner {
          padding-top: 105px;
        }

        .grad-title {
          font-size: clamp(65px, 17vw, 105px);
        }

        .projects,
        .services,
        .contact {
          padding-left: 22px;
          padding-right: 22px;
        }

        .cards {
          grid-template-columns: 1fr;
          gap: 22px;
        }

        .logos {
          margin-bottom: 75px;
        }

        .service-button {
          grid-template-columns: 35px 1fr 25px;
          gap: 10px;
        }

        .service-detail {
          padding-left: 45px;
        }

        .footer {
          flex-direction: column;
          align-items: flex-start;
        }

        .footer p {
          text-align: left;
        }
      }

      @media (max-width: 380px) {
        .nav-actions {
          gap: 9px;
          font-size: 10px;
        }

        .logo {
          font-size: 11px;
        }

        .logo-symbol {
          width: 30px;
          height: 30px;
        }

        .badge {
          font-size: 8px;
          letter-spacing: 1px;
        }

        .btn-white,
        .btn-glass {
          padding: 15px 17px;
          font-size: 11px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: .01ms !important;
          transition-duration: .01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}</style>

      {/* ===== HERO ===== */}
      <section className="hero" id="inicio">
        <Stars count={45} />
        <nav className="nav">
          <Logo />
          <div className="nav-actions">
            <a href="#projetos">Projetos</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato" className="pill-outline">
              Contato <Icon name="arrow" size={13} />
            </a>
          </div>
        </nav>
        <div className="hero-inner">
          <p className="badge">
            <span className="status-dot" />
            DISPONÍVEL PARA NOVOS PROJETOS
          </p>
          <h1 className={`grad-title ${visible ? "show-title" : ""}`}>
            {NAME}
          </h1>
          <p className="hero-sub">
            Editor de vídeo especializado em criar conteúdos
            dinâmicos e que prendem a atenção.
          </p>
          <div className="hero-cta">
            <a href="#projetos" className="btn-white">
              Ver projetos <Icon name="arrow" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <Icon name="whatsapp" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== TECNOLOGIAS ===== */}
      <section className="logos">
        <Marquee items={TECH} />
        <Marquee items={TECH} reverse />
      </section>

      {/* ===== PROJETOS ===== */}
      <section className="projects" id="projetos">
        <p className="eyebrow">(01) PROJETOS SELECIONADOS</p>
        <h2 className="grad-h2">
          Edições que prendem a atenção.
        </h2>
        <p className="muted">
          Uma seleção dos meus trabalhos.
        </p>
        <div className="cards">
          {PROJECTS.map(project => (
            <article className="card reveal" key={project.number}>
              <VideoBox src={project.src} />
              <div className="card-body">
                <p className="card-tag">
                  {project.category}
                </p>
                <h3>{project.title}</h3>
                <p className="muted">
                  {project.description}
                </p>
                {project.channel && (
                  <p className="channel">
                    Canal: <strong>{project.channel}</strong>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section className="services" id="servicos">
        <p className="eyebrow">(02) O QUE EU FAÇO</p>
        <h2 className="grad-h2">
          alguns outros serviços que faço.
        </h2>
        <p className="muted">
          Recursos e técnicas que ajudam a construir
          vídeos mais profissionais.
        </p>
        <div className="service-list">
          {SERVICES.map((service, index) => (
            <div
              className={`service-item ${
                activeService === service.id ? "open" : ""
              }`}
              key={service.id}
            >
              <button
                className="service-button"
                onClick={() =>
                  setActiveService(
                    activeService === service.id ? null : service.id
                  )
                }
                aria-expanded={activeService === service.id}
              >
                <span className="service-num">
                  0{index + 1}
                </span>
                <span className="service-name">
                  {service.title}
                </span>
                <span className="service-plus">
                  +
                </span>
              </button>
              {activeService === service.id && (
                <div className="service-detail">
                  {service.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTATO ===== */}
      <section className="contact" id="contato">
        <Stars count={25} />
        <p className="eyebrow">
          (03) VAMOS CONVERSAR?
        </p>
        <h2 className="grad-h2">
          O próximo projeto pode ser o seu.
        </h2>
        <p className="muted">
          Me conte sua ideia e vamos criar algo incrível juntos.
        </p>
        <div className="hero-cta">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
            <Icon name="whatsapp" />
            Começar uma conversa
            <Icon name="arrow" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            <Icon name="instagram" />
            Instagram
          </a>
        </div>
      </section>


/* ===== INICIALIZAÇÃO DO REACT ===== */
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<App />);
