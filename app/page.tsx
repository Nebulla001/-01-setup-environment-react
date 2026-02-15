export default function HomePage() {
  return (
    <main className="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-white">
      <div className="text-center">
        {/* Hero Section */}
        <h1 className="display-4 fw-bold mb-3">Solusi Security System</h1>
        <p className="lead mb-4">
          Keamanan modern, respons cepat, dan perlindungan penuh untuk bisnis Anda.
        </p>
        {/* Tombol diarahkan ke About */}
        <a href="/about" className="btn btn-primary btn-lg">
          Explore
        </a>
      </div>
    </main>
  );
}
