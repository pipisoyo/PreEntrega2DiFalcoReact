import { CardWidget } from "../CardWidget/CardWidget"

export const NavBar = () => {
  return (
   <nav className="d-flex" >
    <ul >
      <li >
        <a  href="">Categorias</a>
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
        <a href=""><CardWidget/> </a>
      </li>
    </ul>

   </nav>
  )
}
