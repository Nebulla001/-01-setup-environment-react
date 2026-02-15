"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center fw-bold">Katalog Videotron</h1>
      <div className="row">
        {products.map(p => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card shadow-lg h-100 border-0">
              <img src={p.image} className="card-img-top" alt={p.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{p.name}</h5>
                <p className="card-text text-muted">{p.description}</p>
                <p className="fs-5 fw-semibold text-primary">Rp {p.price}</p>
                <div className="mt-auto">
                  <a href={`/products/${p.id}`} className="btn btn-outline-primary w-100 mb-2">
                    Detail Produk
                  </a>
                  <a href={`/orders`} className="btn btn-success w-100">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
