import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'
import ProcessSteps from '../components/ProcessSteps'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">Odkryj luksus</span>
            <h1>Dolina Klonowa – Twoje miejsce wypoczynku</h1>
            <p>
              Zrelaksuj się w eleganckim otoczeniu, korzystając z naszych luksusowych usług spa
              oraz szerokiej gamy atrakcji.
            </p>
            <Link to="/kontakt" className="btn btn-primary">
              Zarezerwuj teraz
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-value">2020</span>
              <span className="stat-label">Rok założenia</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">0 zł</span>
              <span className="stat-label">Dofinansowanie ze środków PROW</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Poznaj nas</span>
            <h2>Dolina Klonowa – miejsce pełne harmonii i luksusu</h2>
          </div>
          <div className="about-preview-grid">
            <div>
              <h3>Nasza historia to pasja do tworzenia wyjątkowych doświadczeń dla naszych gości.</h3>
              <p>
                Dolina Klonowa to ośrodek, który zapewnia gościom niezapomniane chwile relaksu w
                otoczeniu natury, dbając o ich komfort i dobrostan.
              </p>
            </div>
            <ul className="feature-list">
              <li>Eleganckie pokoje z widokiem na zieleń</li>
              <li>Spa z luksusowymi zabiegami wellness</li>
              <li>Blisko atrakcji turystycznych w malowniczej scenerii</li>
            </ul>
          </div>
          <Link to="/o-nas" className="btn btn-outline">
            Wszystko o nas
          </Link>
        </div>
      </section>

      <section className="services-preview">
        <div className="container services-preview-grid">
          <ol className="numbered-list">
            <li>
              <span className="num">01</span> Ekskluzywne pokoje
            </li>
            <li>
              <span className="num">02</span> Strefa spa
            </li>
            <li>
              <span className="num">03</span> Masaże i wellness
            </li>
          </ol>
          <div>
            <span className="eyebrow">Nasze usługi</span>
            <h2>Oferujemy wyjątkowe usługi relaksacyjne</h2>
            <p>
              Wypełnij swój pobyt masażami, saunami i spa, które pozwolą Ci odprężyć się w
              komfortowym otoczeniu.
            </p>
            <Link to="/uslugi" className="btn btn-outline">
              Czytaj więcej
            </Link>
          </div>
        </div>
      </section>

      <section className="banner-cta">
        <div className="container">
          <h2>Dołącz do nas i odkryj wyjątkowy relaks w Dolinie Klonowej.</h2>
          <Link to="/kontakt" className="btn btn-primary">
            Zarezerwuj teraz
          </Link>
        </div>
      </section>

      <ProcessSteps />
      <CtaSection />
    </>
  )
}
