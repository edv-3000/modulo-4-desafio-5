import Headerimg from "./assets/Header.jpg"
import './App.css'

const Header = () => {
    return (
        <header>
            <div className="img">
                <img src={Headerimg} alt="header" />
            </div>
            <div className="pheader">
                <h1>¡Pizzeria Mamma Mia!</h1>
                <h3>tenemos las mejores pizzas que podras encontrar</h3>
            </div>
        </header>
    )
}

export default Header