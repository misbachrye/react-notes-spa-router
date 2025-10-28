import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section>
      <h2>404 - Halaman Tidak Ditemukan</h2>
      <p>
        <Link to="/">Kembali ke halaman utama</Link>
      </p>
    </section>
  );
}

export default NotFoundPage;