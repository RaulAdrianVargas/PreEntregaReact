
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import {ErrorNotFound} from "./components/ErrorNotFound"


function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer   />}/>
        <Route path="/category/:id" element={<ItemListContainer   />}/>
        <Route path="/item/:id" element={<ItemDetailContainer   />}/>
        <Route path="*" element={<ErrorNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
