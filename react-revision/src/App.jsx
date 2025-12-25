import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import More from './pages/More';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/More' element={<More />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
} 

export default App
