import { Link, NavLink } from "react-router-dom"
import { RubroFilter } from "../RubroFilter/RubroFilter"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
   
export const Categorys = ({rubros}) => {
  return (
    <>
      <div className="border border-3 p-3 d-flex flex-column m-2" >
        <ul>
          {rubros.map((rubro, index) => (
            <Link to={rubro} key={index} >
              <li>{rubro}</li>
            </Link>
          ))}
          
        </ul>
   
      </div>  
    </>
  )
}
