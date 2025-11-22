import "./AllProductTable.scss";
import { useState } from "react";
import Checkbox from "../common/Checkbox";
import Switch from "../common/Switch";
import Modal from "../common/Modal";
import AddCompetitor from "../ModalContents/AddCompetitor";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const AllProductTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  const products: ProductType[] = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 129.99,
      image: "/images/product-1.png",
    },
    {
      id: 2,
      name: "Smart Watch Elite",
      price: 229.99,
      image: "/images/pro-2.png",
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 29.99,
      image: "/images/pro-3.png",
    },
    {
      id: 4,
      name: "Running Shoes Max",
      price: 99.99,
      image: "/images/pro-4.png",
    },
    {
      id: 5,
      name: "Wireless Headphones Pro",
      price: 129.99,
      image: "/images/product-1.png",
    },
    {
      id: 6,
      name: "Smart Watch Elite",
      price: 229.99,
      image: "/images/pro-2.png",
    },
    {
      id: 7,
      name: "Designer Sunglasses",
      price: 29.99,
      image: "/images/pro-3.png",
    },
    {
      id: 8,
      name: "Running Shoes Max",
      price: 99.99,
      image: "/images/pro-4.png",
    },

    {
      id: 9,
      name: "Wireless Headphones Pro",
      price: 129.99,
      image: "/images/product-1.png",
    },
    {
      id: 10,
      name: "Smart Watch Elite",
      price: 229.99,
      image: "/images/pro-2.png",
    },
    {
      id: 11,
      name: "Designer Sunglasses",
      price: 29.99,
      image: "/images/pro-3.png",
    },
    {
      id: 12,
      name: "Running Shoes Max",
      price: 99.99,
      image: "/images/pro-4.png",
    },
    {
      id: 13,
      name: "Wireless Headphones Pro",
      price: 129.99,
      image: "/images/product-1.png",
    },
    {
      id: 14,
      name: "Smart Watch Elite",
      price: 229.99,
      image: "/images/pro-2.png",
    },
    {
      id: 15,
      name: "Designer Sunglasses",
      price: 29.99,
      image: "/images/pro-3.png",
    },
    {
      id: 16,
      name: "Running Shoes Max",
      price: 99.99,
      image: "/images/pro-4.png",
    },

    {
      id: 17,
      name: "Wireless Headphones Pro",
      price: 129.99,
      image: "/images/product-1.png",
    },
    {
      id: 18,
      name: "Smart Watch Elite",
      price: 229.99,
      image: "/images/pro-2.png",
    },
    {
      id: 19,
      name: "Designer Sunglasses",
      price: 29.99,
      image: "/images/pro-3.png",
    },
    {
      id: 20,
      name: "Running Shoes Max",
      price: 99.99,
      image: "/images/pro-4.png",
    },
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
    
    <div className="all_product_table">
      <table className="table">
        <thead>
          <tr>
            <th>
              <Checkbox id="select-all" />
            </th>
            <th>Product</th>
            <th>Price</th>
            <th>Competitors</th>
            <th>
              Compare <i className="ico ico-tool-icon"></i>
            </th>
          </tr>
        </thead>

        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <Checkbox id={`cb-${product.id}`} />
              </td>

              <td>
                <div className="product_dec">
                  <div className="product_img">
                    <img
                      src={product.image}
                      width={51}
                      height={51}
                      alt={product.name}
                    />
                  </div>
                  <strong className="product_txt">{product.name}</strong>
                </div>
              </td>

              <td>${product.price.toFixed(2)}</td>

              <td>
                <button type="button" className="competitor_btn" onClick={() => setIsModalOpen(true)}>
                  <i className="ico ico-plus"></i>
                  Add Competitor
                </button>
              </td>

              <td>
                <Switch chkId={`switch-${product.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <div className="pagination_wrap">
        <div className="pagination">
          <button className="btn_prev"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
           <span className="ico-left-arrow"></span>Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          ))}
          <button className="btn_next"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
       Next<span className="ico-right-arrow"></span>
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
       <AddCompetitor  />
      </Modal>
    </>
  );
};

export default AllProductTable;
