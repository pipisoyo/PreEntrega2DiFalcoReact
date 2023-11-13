import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer'
import { NavBar } from './componets/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {
  return (
    <>
    <h2>Polirrubros Pi-Va-So</h2>
    <img src='../public/images/logo.png' alt="logo" width={"200px"}/>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={ <ItemListContainer menssage={"Bienvenido"}/> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}
