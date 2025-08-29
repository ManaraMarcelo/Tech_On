import './App.css';

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <a href="#" className="logo-link">
              <div className="logo">
                <div className="logo-inner">
                  <div className="logo-center"></div>
                </div>
              </div>
              <span className="logo-text">TechON</span>
            </a>

            {/* Navigation */}
            <div className="nav-menu">
              <a href="#" className="nav-link active">Início</a>
              <a href="#" className="nav-link">Serviços</a>
              <a href="#" className="nav-link">Portfólio</a>
              <a href="#" className="nav-link">Sobre Nós</a>
              <a href="#" className="nav-link">Contato</a>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Transforme Espaços em <span className="text-highlight">Experiências Virtuais</span> Imersivas
              </h1>
              <p className="hero-description">
                Criamos tours virtuais 360° de alta qualidade que permitem aos seus clientes explorarem 
                cada detalhe do ambiente como se estivessem fisicamente presentes. Tecnologia de ponta 
                para resultados excepcionais.
              </p>
              <div className="hero-buttons">
                <a href="#" className="btn btn-white">Solicitar Orçamento</a>
                <a href="#" className="btn btn-outline">Ver Portfólio</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-placeholder">
                <svg width="120" height="120" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4"/>
                </svg>
                <p>Tour Virtual 360°</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Nossos Serviços</h2>
              <p className="section-subtitle">
                Soluções completas em fotografia imersiva e tours virtuais para todos os tipos de espaços
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="service-title">Tour Virtual 360°</h3>
                <p className="service-description">
                  Experiências imersivas completas que permitem navegação intuitiva por todos os ambientes, 
                  com qualidade ultra-alta e compatibilidade total com dispositivos móveis.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="service-title">Fotografia Imobiliária</h3>
                <p className="service-description">
                  Fotografias profissionais com técnicas HDR e edição avançada que destacam os melhores 
                  ângulos e características do seu imóvel para vendas mais rápidas.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <h3 className="service-title">Matterport 3D</h3>
                <p className="service-description">
                  Modelos 3D precisos com medições exatas, plantas baixas automáticas e visualização 
                  em casa de boneca para arquitetos e construtoras.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="service-title">Vídeos Promocionais</h3>
                <p className="service-description">
                  Produção de vídeos em 4K com edição profissional e trilha sonora personalizada para 
                  campanhas de marketing e redes sociais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="portfolio-preview">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Projetos em Destaque</h2>
              <p className="section-subtitle">
                Conheça alguns dos nossos trabalhos mais recentes e a qualidade que entregamos
              </p>
            </div>

            <div className="portfolio-grid">
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <div className="portfolio-placeholder">
                    <svg width="60" height="60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    <p>Apartamento Luxo</p>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">Apartamento Morumbi</h3>
                  <p className="portfolio-description">Tour virtual completo de apartamento de alto padrão com 180m²</p>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="portfolio-image">
                  <div className="portfolio-placeholder">
                    <svg width="60" height="60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <p>Restaurante</p>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">Bella Vista</h3>
                  <p className="portfolio-description">Restaurante italiano com ambiente aconchegante e área VIP</p>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="portfolio-image">
                  <div className="portfolio-placeholder">
                    <svg width="60" height="60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                    <p>Loja</p>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">Fashion Store</h3>
                  <p className="portfolio-description">Loja conceito com design moderno e layout diferenciado</p>
                </div>
              </div>
            </div>

            <div className="portfolio-cta">
              <a href="#" className="btn btn-primary">Ver Todos os Projetos</a>
            </div>
          </div>
        </section>

        {/* About Story */}
        <section className="about-story">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2 className="story-title">Por que Escolher a TechON?</h2>
                <p className="story-description">
                  Com mais de 3 anos de experiência e centenas de projetos concluídos, somos especialistas 
                  em criar experiências virtuais que impressionam e convertem visitantes em clientes.
                </p>
                <p className="story-description">
                  Nossa equipe utiliza equipamentos de última geração e técnicas avançadas para garantir 
                  que cada tour virtual seja uma obra de arte digital que destaca o melhor do seu espaço.
                </p>
                <div className="story-stats">
                  <div className="stat">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Projetos</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Clientes</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Satisfação</span>
                  </div>
                </div>
              </div>
              <div className="story-image">
                <div className="story-placeholder">
                  <svg width="120" height="120" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a4 4 0 00-3-3.87m-3 3.87l4-5"/>
                  </svg>
                  <p className="placeholder-text">Nossa Equipe Especializada</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Pronto para Transformar seu Espaço?</h2>
              <p className="cta-description">
                Entre em contato conosco hoje mesmo e descubra como um tour virtual pode revolucionar 
                a forma como seus clientes conhecem seu espaço.
              </p>
              <a href="#" className="btn btn-white">Começar Agora</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <div className="footer-logo-inner">
                    <div className="footer-logo-center"></div>
                  </div>
                </div>
                <span className="footer-logo-text">TechON</span>
              </div>
              <p className="footer-description">
                Transformamos espaços físicos em experiências virtuais imersivas desde 2020, 
                utilizando tecnologia de ponta e qualidade superior.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="footer-column">
              <h3 className="footer-title">Links Rápidos</h3>
              <ul className="footer-links">
                <li><a href="#">Início</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Portfólio</a></li>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h3 className="footer-title">Serviços</h3>
              <ul className="footer-links">
                <li>Tour Virtual 360°</li>
                <li>Fotografia Imobiliária</li>
                <li>Matterport 3D</li>
                <li>Vídeos Promocionais</li>
                <li>Plantas Interativas</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h3 className="footer-title">Contato</h3>
              <div className="footer-contact">
                <div className="contact-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Av. Tecnologia, 1500 - São Paulo, SP</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>(11) 3456-7890</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>contato@techontour.com.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 TechON Tour Virtual. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;