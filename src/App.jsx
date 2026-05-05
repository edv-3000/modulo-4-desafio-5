import Navbar from './navbar'
import Home from './pages/home'
import Footer from './footer'
import Loginpage from './pages/loginpage'
import Registrerpage from './pages/registrerpage'
import Cart from './pages/cart'
import Pizzasx from './pages/pizzas'
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile'
import NotFound from './pages/Notfound'
import Header from "./header";

function App() {
  return (
    <>
      <Navbar/>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/loginpage' element={<Loginpage/>} />
        <Route path='/registerpage' element={<Registrerpage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizzas' element={<Pizzasx/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
