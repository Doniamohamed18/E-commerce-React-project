import React from 'react';
import { useNavigate, useParams } from 'react-router';
import productsData from '../data'; // ✅ بنجيب الداتا من الملف
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ نلاقي المنتج اللي الـ id بتاعه يطابق الموجود في الرابط
  const product = productsData.find(p => p.id.toString() === id);

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h2>⚠️ Product not found</h2>
        <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{product.name}</h1>

      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm mb-4"
          />

          <h4 className="text-success mb-3">{product.price} EGP</h4>

          <p className="text-muted mb-3">
            <strong>Category:</strong> {product.category}
          </p>

          <p className="fs-5">{product.body}</p>

          <button
            className="btn btn-primary mt-4"
            onClick={() => navigate('/')}
          >
            🔙 Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
