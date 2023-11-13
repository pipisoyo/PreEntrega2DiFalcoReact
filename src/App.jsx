import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer'
import { NavBar } from './componets/NavBar/NavBar'

export const App = () => {
  return (
    <>
    <h2>Polirrubros Pi-Va-So</h2>
    <img src='../public/images/logo.png' alt="logo" width={"200px"}/>
    <NavBar/>
    <ItemListContainer menssage={"Bienvenido"}/>
    </>
  )
}
