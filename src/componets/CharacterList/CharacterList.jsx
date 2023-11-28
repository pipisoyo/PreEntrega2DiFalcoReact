
import { Character } from "../Character/Character";

export const CharacterList = ( {products}) => {
  return (
    
    <div className="container d-flex flex-sm-wrap">
      {products.map( product => <Character key={product.id}
     {...product}/>)}
  </div>
);
};

