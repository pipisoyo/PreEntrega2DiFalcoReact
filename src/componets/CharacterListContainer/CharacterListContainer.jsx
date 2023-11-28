import { useEffect, useState } from "react";
import { getProducts } from "../../products";
import { CharacterList } from "../CharacterList/CharacterList";

export const CharacterListContainer = ({rubro="all"}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        setProducts(resp);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (rubro === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.rubro === rubro);
      setFilteredProducts(filtered);
    }
  }, [products, rubro]);

  return (
    <>
      <div className="container d-flex flex-sm-wrap">
        {isLoading ? (
          <h3>Cargando productos...</h3>
        ) : (
          <CharacterList products={filteredProducts}/>      
        )}
      </div>
    </> 
  );
};