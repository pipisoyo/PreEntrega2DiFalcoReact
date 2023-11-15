import { Character } from "../Character/Character";

export const CharacterList = ( {products}) => {
  return (
    
    <div className="container d-flex flex-sm-wrap">
      {products.map( product => <Character key={product.id}
          nombreProducto={product.nombreProducto}
          precio={product.precio}
          imagen={product.imagen}
          stock={product.stock}
          id={product.id}/>)}
  </div>
);
};

