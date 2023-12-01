import { useEffect, useState } from "react";
import { getProducts } from "../../products";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ filter = "all" }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        setProducts(resp);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  let filteredProducts = products;
  if (filter !== "all") {
    filteredProducts = products.filter((product) => product.rubro === filter);
  }

  return (
    <div className="container d-flex flex-sm-wrap">
      {isLoading ? (
        <h3>Cargando productos...</h3>
      ) : (
        <ItemList products={filteredProducts} />
      )}
    </div>
  );
};
