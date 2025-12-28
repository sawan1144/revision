import { useContext } from "react"
import Header from "./pages/Header"
import Home from "./pages/Home"
import More from "./pages/More"
import { Data } from "./context/Usercontext";

function App() {

  const dta = useContext(Data);
  console.log(dta);

  return (
  <>
    <h1 className="text-7xl">This is App {dta}</h1>
    <Header />
    <Home />
    <More /> 
  </>
  )
}

export default App
