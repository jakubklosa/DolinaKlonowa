import { FormEvent, useState } from 'react'
import CtaSection from '../components/CtaSection'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: podłącz prawdziwy endpoint wysyłki wiadomości (np. backend / formularz e-mail)
    setStatus('sent')
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Skontaktuj się z nami</span>
          <h1>Zapraszamy do kontaktu z naszym ośrodkiem</h1>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Masz pytania?</span>
            <h2>Chętnie odpowiemy na wszystkie Twoje pytania</h2>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <h3>Kontakt</h3>
              <p>609 959 997</p>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <p>biuro@dolinaklonowa.com</p>
            </div>
            <div className="contact-card">
              <h3>Adres</h3>
              <p>55-200, Chwalibożyce, ul. Spokojna 3</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container contact-form-grid">
          <div>
            <span className="eyebrow">Formularz kontaktowy</span>
            <h2>Skorzystaj z formularza, aby się z nami skontaktować</h2>
            <p>Wypełnij formularz, a nasz zespół skontaktuje się z Tobą najszybciej jak to możliwe.</p>
            <div className="social-links">
              <span className="eyebrow">Media społecznościowe</span>
              <a
                href="https://www.facebook.com/profile.php?id=61565335438372"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Imię *
                <input type="text" name="firstName" required />
              </label>
              <label>
                Nazwisko *
                <input type="text" name="lastName" required />
              </label>
            </div>
            <label>
              Adres e-mail
              <input type="email" name="email" />
            </label>
            <label>
              Wiadomość *
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className="btn btn-primary">
              Wyślij wiadomość
            </button>
            {status === 'sent' && <p className="form-success">Dziękujemy! Wiadomość została wysłana.</p>}
          </form>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
