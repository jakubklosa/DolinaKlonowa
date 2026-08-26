import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">Dolina Klonowa</div>
        <nav className="footer-nav">
          <Link to="/">Strona główna</Link>
          <Link to="/o-nas">O nas</Link>
          <Link to="/uslugi">Usługi</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/kontakt">Kontakt</Link>
        </nav>
        <p className="footer-copy">Prawo autorskie © {new Date().getFullYear()} Dolina Klonowa</p>
      </div>
    </footer>
  )
}
