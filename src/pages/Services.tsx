import CtaSection from '../components/CtaSection'
import ProcessSteps from '../components/ProcessSteps'

const services = [
  {
    number: '01',
    title: 'Ekskluzywne pokoje',
    text: 'Oferujemy luksusowe, przestronne pokoje z eleganckim wystrojem, które zapewnią Ci pełen komfort podczas pobytu w Dolinie Klonowej.',
  },
  {
    number: '02',
    title: 'Strefa spa',
    text: 'Nasza strefa spa zachęca do relaksu. Skorzystaj z sauny i balii, aby poczuć się odprężonym po intensywnym dniu.',
  },
  {
    number: '03',
    title: 'Masaże i wellness',
    text: 'Oferujemy profesjonalne masaże oraz różnorodne zabiegi wellness, które przywrócą harmonię ciała i umysłu, zapewniając głęboki relaks.',
  },
  {
    number: '04',
    title: 'Aktywności na świeżym powietrzu',
    text: 'Zrelaksuj się w otoczeniu natury, korzystając z naszych aktywności na świeżym powietrzu, takich jak piesze wędrówki czy wycieczki rowerowe po okolicy.',
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Odkryj nasze wyjątkowe usługi</span>
          <h1>Relaks i komfort na wyciągnięcie ręki</h1>
        </div>
      </section>

      <section className="services-list">
        <div className="container services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image" aria-hidden="true" />
              <h2 className="service-number">{service.number}</h2>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ProcessSteps />
      <CtaSection />
    </>
  )
}
