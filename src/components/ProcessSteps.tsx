const steps = [
  {
    number: '01',
    title: 'Dostosowanie',
    text: 'Słuchamy potrzeb naszych gości, aby przekroczyć ich oczekiwania.',
  },
  {
    number: '02',
    title: 'Komfort',
    text: 'Tworzymy przestrzeń, w której każdy czuje się swobodnie i komfortowo.',
  },
  {
    number: '03',
    title: 'Profesjonalizm',
    text: 'Nasz zespół składa się z doświadczonych specjalistów, gotowych pomóc w każdej sytuacji.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Tak pracujemy</span>
          <h2>Nasze podejście do obsługi klienta</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <span className="step-label">Step</span>
              <h3 className="step-number">{step.number}</h3>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
