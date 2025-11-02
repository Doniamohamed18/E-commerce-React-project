import React from 'react';
import { useNavigate, useParams } from 'react-router';
import productsData from '../data';
import { toast } from 'react-toastify';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ نجيب المنتجات من localStorage
  const localProducts = JSON.parse(localStorage.getItem('products')) || [];

  // ✅ نلاقي المنتج سواء في localStorage أو في data.js
  const product =
    localProducts.find(p => p.id.toString() === id) ||
    productsData.find(p => p.id.toString() === id);

  // ✅ دالة الحذف
  const handleDelete = () => {
    const updatedProducts = localProducts.filter(p => p.id.toString() !== id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    toast.success('🗑️ Product deleted successfully!');
    navigate('/');
  };

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
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />

          <h4 className="mb-3">${product.price}</h4>

          <p className="text-muted mb-3">
            <strong>Category:</strong> {product.category}
          </p>

          <p className="fs-5">{product.body}</p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-custom" onClick={() => navigate('/')}>
              🔙 Back to Products
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              🗑️ Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
