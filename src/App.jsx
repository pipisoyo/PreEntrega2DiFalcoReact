import { CardWidget } from './componets/CardWidget/CardWidget'
import { Cart } from './componets/Cart/Cart'
import { Detalles } from './componets/Detalles/Detalles'
import { Character } from './componets/Character/Character'
import { CharacterListContainer } from './componets/CharacterListContainer/CharacterListContainer'
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
    <Route path="/" element={ <CharacterListContainer/> } />
    <Route path="/home" element={ <CharacterListContainer/> } />
    <Route path="/detalles/:id" element={ <Detalles/> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}
