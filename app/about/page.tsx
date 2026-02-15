export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="position-relative text-white text-center" style={{ 
        backgroundImage: "url('/images/office-bg.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        minHeight: "50vh" 
      }}>
        <div className="bg-dark bg-opacity-50 d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-4 fw-bold">Tentang Kami</h1>
          <p className="lead mt-3 w-75">
            Kami menghadirkan teknologi terkini, layanan profesional, dan produk berkualitas untuk kebutuhan keamanan, visual display, serta sistem tata udara di berbagai sektor industri.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-primary text-white rounded shadow">
              <h2 className="fw-bold mb-3">Solusi, Inovasi, Kualitas</h2>
              <p>
                Kami hadir membawa solusi inovatif dengan kualitas tinggi dan pelayanan profesional untuk setiap kebutuhan Anda.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="/contact" className="btn btn-light">Hubungi Kami</a>
                <a href="/products" className="btn btn-outline-light">Lihat Produk</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="fw-bold text-dark">PT Videotron Office</h3>
              <p className="text-muted">
                Kami adalah system integrator terpercaya yang menghadirkan solusi inovatif di bidang Security System Solution, Display Solution, dan HVAC Solution. Dengan pengalaman dan teknologi terkini, kami membantu perusahaan dan bisnis di seluruh Indonesia mencapai efisiensi, keamanan, serta kualitas tampilan terbaik.
              </p>
              <p className="text-muted">
                Komitmen kami adalah memberikan layanan profesional dengan standar tinggi, mulai dari perencanaan, instalasi, hingga pemeliharaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Komitmen Kami</h2>
          <p className="text-muted w-75 mx-auto">
            Kami berkomitmen menghadirkan solusi unggul dan pelayanan terbaik yang disesuaikan dengan kebutuhan Anda, demi kepuasan pelanggan, lingkungan yang aman, serta pengalaman visual yang mengesankan dalam setiap kolaborasi teknologi masa depan.
          </p>
        </div>
      </section>
    </div>
  );
}
