import { useState } from "react";
import "./ProductListing.scss";

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Sample products data
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
    { id: 4, name: "Product 4", price: "$40" },
    { id: 5, name: "Product 5", price: "$50" },
    { id: 6, name: "Product 6", price: "$60" },
    { id: 7, name: "Product 7", price: "$70" },
    { id: 8, name: "Product 8", price: "$80" },
    { id: 9, name: "Product 9", price: "$90" },
    { id: 10, name: "Product 10", price: "$100" },
  ];

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="product_listing">
      <h1>Product Listing</h1>
      <div className="products">
        {currentProducts.map((product) => (
          <div key={product.id} className="product_card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`page_btn ${page === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
