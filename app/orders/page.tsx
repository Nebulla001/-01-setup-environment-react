"use client";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center fw-bold">Daftar Pesanan</h1>
      <table className="table table-striped table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nama Customer</th>
            <th>Email</th>
            <th>Produk</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer_name}</td>
              <td>{o.email}</td>
              <td>{o.product_id}</td>
              <td>{o.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
