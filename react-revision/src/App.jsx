import Header from "./pages/Header"
import Home from "./pages/Home"
import More from "./pages/More"
import Usercontext from "./context/Usercontext"

function App() {

  return (
  <>
  <Usercontext>
    <h1 className="text-7xl">This is App</h1>
    <Header />
    <Home />
    <More />
  </Usercontext>  
  </>
  )
}

export default App
