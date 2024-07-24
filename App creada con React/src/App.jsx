import { ItemContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import { Tarjeta } from "./components/Tarjeta"

function App() {

  return (
    <>
    <NavBar></NavBar>
    <ItemContainer greeting="Welcome"></ItemContainer>
    <Tarjeta></Tarjeta>
    </>
  )
}

export default App
