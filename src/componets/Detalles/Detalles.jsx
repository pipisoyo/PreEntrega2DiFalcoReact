import { useEffect, useState } from "react";
import { getProductsById } from "../../products";
import { Cart } from "../Cart/Cart";
import { useParams } from "react-router-dom";

export const Detalles = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getProductsById(id)
      .then((resp) => {
        {
          setProduct(...resp);
          setisLoading(!isLoading);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container d-flex flex-sm-wrap">
        {isLoading ? (
          <h3>Cargando detalle del producto...</h3>
        ) : (
          <Cart
            nombreProducto={product.nombreProducto}
            imagen={product.imagen}
            precio={product.precio}
          />
        )}
      </div>
    </>
  );
};
