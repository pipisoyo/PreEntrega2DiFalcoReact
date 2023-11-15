import { CardWidget } from "../CardWidget/CardWidget"
import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
   <nav className="container mt-2 d-flex" >
      <ul >
      <li >
      <NavLink to="home">Inicio</NavLink>
      </li>
    </ul>
    <ul >
      <li >
      <NavLink to="category">Categorias</NavLink>
      </li>
    </ul>
    <ul>
      <li>
        <a href="">Ofertas</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="">Combos</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="">Crear cuenta</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="">Ofertas</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="">Ingresar</a>
      </li>
    </ul>
    <ul>
      <li>
        <NavLink to="cart"><CardWidget/> </NavLink>
      </li>
    </ul>

   </nav>
  )
}
