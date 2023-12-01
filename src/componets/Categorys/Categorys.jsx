import { Link, NavLink } from "react-router-dom";
import { RubroFilter } from "../RubroFilter/RubroFilter";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Categorys = ({ rubros }) => {
  return (
    <div className="container mt-2 d-flex">
      <ul>
        {rubros.map((rubro, index) => (
          <li key={index}>
            <Link to={`/category/${rubro}`}>{rubro}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
