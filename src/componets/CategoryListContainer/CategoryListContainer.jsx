import { useEffect, useState } from "react";
import { getProducts } from "../../products";
import { CategoryList}  from "../CategoryList/CategoryList";

export const CategoryListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
  
    useEffect(() => {
      getProducts()
        .then((resp) => {
          {
            setProducts(resp);
            setisLoading(!isLoading);
           console.log(resp)
          }
        })
        .catch((error) => console.log(error));
    }, []);


  return (
    <>
    <div className="container d-flex flex-sm-wrap">
      {isLoading ? (
        <h3>Cargando categorias...</h3>
      ) : (
        
          <CategoryList products={products}/> 
               
      )}

    </div>
    </> 
  );
};


