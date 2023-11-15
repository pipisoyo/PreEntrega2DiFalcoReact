import { CardWidget } from './componets/CardWidget/CardWidget'
import { Cart } from './componets/Cart/Cart'
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
    <Route path='/cart' element={<Cart/>}/>
    <Route path="/home" element={ <CharacterListContainer/> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}
