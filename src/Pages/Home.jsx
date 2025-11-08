import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Card from '../Components/Card';
import productsData from '../data';
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [allProducts, setAllProducts] = useState(productsData);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const merged = [...productsData, ...storedProducts].filter(
      (item, index, self) => index === self.findIndex(p => p.id === item.id)
    );
    setAllProducts(merged);
  }, []);

  const filteredProducts = allProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container my-3">
        <Header />
      </div>

      <div className="container">
        <h1 className="text-center my-4">Our Products</h1>

        {/* ✅ Responsive search & button */}
        <div className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center justify-content-md-between gap-3 mb-4 text-center text-sm-start">
          <input
            type="text"
            className="form-control flex-grow-1"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ maxWidth: '400px', width: '100%' }}
          />
          <button onClick={() => navigate("/products/new")} className="btn btn-custom" > ➕ Add Product </button>
        </div>

        {/* ✅ Responsive cards grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(p => (
              <div key={p.id} className="col d-flex">
                <Card product={p} className="w-100">
                  <button
                    onClick={() => navigate(`/products/${p.id}`)}
                    className="btn btn-custom w-100 mt-2"
                  >
                    Show More
                  </button>
                </Card>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
