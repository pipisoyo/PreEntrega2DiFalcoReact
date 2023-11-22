import { useEffect, useState } from "react";
import { getProducts } from "../../products";
import { CharacterList } from "../CharacterList/CharacterList";



export const CharacterListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        {
          setProducts(resp);
          setisLoading(!isLoading);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="container d-flex flex-sm-wrap">
      {isLoading ? (
        <h3>Cargando productos...</h3>
      ) : (
          <CharacterList products={products}/>      
      )}
    </div>
    </> 
  );
};
