import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Card from '../Components/Card';
import productsData from '../data'; // استيراد البيانات المحلية
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [allProducts, setAllProducts] = useState(productsData);
  const navigate = useNavigate();

  // تحميل المنتجات المخزّنة في localStorage وإضافتها
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    // دمج المنتجات بدون تكرار
    const merged = [...productsData, ...storedProducts].filter(
      (item, index, self) => index === self.findIndex(p => p.id === item.id)
    );
    setAllProducts(merged);
  }, []);

  // الفلترة حسب البحث
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

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ maxWidth: "400px" }}
          />
          <button
            onClick={() => navigate("/products/new")}
            className="btn btn-custom"
          >
            ➕ Add Product
          </button>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(p => (
              <Card key={p.id} product={p}>
                <button
                  onClick={() => navigate(`/products/${p.id}`)}
                  className="btn btn-custom w-100 mt-2 g-2"
                >
                  Show More
                </button>
              </Card>
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
