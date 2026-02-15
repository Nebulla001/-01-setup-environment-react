import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-uppercase">
          Videotron Office
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link href="/products" className="nav-link">Produk</Link></li>
            <li className="nav-item"><Link href="/orders" className="nav-link">Pesanan</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
            <li className="nav-item"><Link href="/login" className="btn btn-primary ms-3">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
