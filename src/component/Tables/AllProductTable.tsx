import "./AllProductTable.scss";
import Checkbox from "../common/Checkbox";
import Switch from "../common/Switch";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const AllProductTable: React.FC = () => {
  // Product Array Inside The Same Component
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
  ];

  return (
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
          {products.map((product) => (
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
                <button type="button" className="competitor_btn">
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
  );
};

export default AllProductTable;
