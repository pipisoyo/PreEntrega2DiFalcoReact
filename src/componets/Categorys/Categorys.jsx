import { Link, NavLink } from "react-router-dom"
import { RubroFilter } from "../RubroFilter/RubroFilter"
import { CharacterListContainer } from "../CharacterListContainer/CharacterListContainer"
   
export const Categorys = ({rubros}) => {
  return (
    <>
      <div className="border border-3 p-3 d-flex flex-column m-2" >
        <ul>
          {rubros.map((rubro, index) => (
            <NavLink to="categoria" key={index}>
              <li>{rubro}</li>
            </NavLink>
          ))}
        </ul>
   
      </div>  
    </>
  )
}