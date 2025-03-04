import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    };

    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((e) => {
        return (
          <Link to={`/product/details/${e.id}`} key={e.id}>
            <div>
              <img src={e.image} alt="image of product" />
              <p>{e.title}</p>
              <p>{e.category}</p>
              <p>${e.price}</p>
              <p>{e.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
