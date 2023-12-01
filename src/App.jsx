import { CardWidget } from './componets/CardWidget/CardWidget'
import { Cart } from './componets/Cart/Cart'
import { Detalles } from './componets/Detalles/Detalles'
import { Item } from './componets/Item/Item'
import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer'
import { NavBar } from './componets/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CategoryListContainer } from './componets/CategoryListContainer/CategoryListContainer'
import { Categorys } from './componets/Categorys/Categorys'
import { RubroFilter } from './componets/RubroFilter/RubroFilter'

export const App = () => {
  return (
    <>
    <h2>Polirrubros Pi-Va-So</h2>
    <img src='../public/images/logo.png' alt="logo" width={"200px"}/>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={ <ItemListContainer/> } />
    <Route path="/detalles/:id" element={ <Detalles/> } />
    <Route path='/category/' element={<CategoryListContainer/>}/>
    <Route path='/category/:rubro' element={<RubroFilter/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
