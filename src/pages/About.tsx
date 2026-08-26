import CtaSection from '../components/CtaSection'

const values = [
  'Autentyczność w naszym podejściu do gości',
  'Dbałość o jakość i detale',
  'Indywidualne podejście do każdego klienta',
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Odkryj swoją oazę relaksu</span>
          <h1>Dolina Klonowa – miejsce na niezapomniane wspomnienia</h1>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Kim jesteśmy</span>
            <h2>Dolina Klonowa to luksusowy ośrodek relaksu dla każdego gościa</h2>
          </div>
          <h3>
            Naszym celem jest zapewnienie wyjątkowych doświadczeń gościom odwiedzającym Dolinę
            Klonową. Z pewnością wielu klientów doceni naszą dbałość o szczegóły oraz jakość
            świadczonych usług, co przejawi się w ich powrotach i rekomendacjach.
          </h3>
          <p>
            Dolina Klonowa to obiekt, który łączy nowoczesność z naturą, tworząc przestrzeń do
            wypoczynku i odnowy. Dzięki naszym starannie zaprojektowanym pokojom oraz różnorodnym
            usługom wellness, każdy może odnaleźć harmonię ciała i ducha w malowniczej scenerii.
          </p>
          <p>
            Nasze pokoje i spa są kluczowymi elementami, które czynią Dolinę Klonową idealnym
            miejscem do odpoczynku.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container mission-grid">
          <div>
            <h2>Nasza misja: komfort i relaks</h2>
            <p>
              Dążymy do stworzenia unikalnego miejsca na wsi, z dala od miejskiego hałasu, w
              którym nasi goście mogą odnaleźć spokój, odprężenie oraz radość z pobytu w sercu
              natury. Nasze usługi są zawsze dostosowane do indywidualnych potrzeb każdego
              klienta.
            </p>
          </div>
          <div>
            <h2>Nasze wartości w Dolinie Klonowej</h2>
            <p>
              Wierzymy w autentyczność, jakość i indywidualne podejście do każdego gościa. Każde
              doświadczenie w Dolinie Klonowej jest dla nas priorytetem.
            </p>
            <ul className="feature-list">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="container history-grid">
          <div className="history-image" aria-hidden="true" />
          <div>
            <h2>Historia Doliny Klonowej: tradycja i rozwój</h2>
            <p>
              Dolina Klonowa powstała z pasji do tworzenia miejsca, które łączy komfort i naturę.
              Od momentu otwarcia, regularnie wdrażamy nowe usługi i udoskonalamy nasze wnętrza,
              aby zapewnić gościom wyjątkowe doświadczenia.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
