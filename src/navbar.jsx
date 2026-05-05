import { Link } from "react-router-dom";

const Navbar = () => {
    const total = 25000;
    const token = false;
    let profile = ""
    let estado = ""

    if(token === false){
       profile = "login";
       estado = "register"
    } else{
       profile = "profile";
       estado = "logout"
    }

    return(
         <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand text-light" >PIZZERIA MAMMA MIA!</Link>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav w-100 gap-3">

        <li className="nav-item">
          <Link to='/' className="btn btn-light bg-secondary text-light">Home</Link>
        </li>

        <li className="nav-item">
          <Link to='/loginpage' className="btn btn-light bg-secondary text-light">login</Link>
        </li>

        <li className="nav-item">
          <Link  to='/registerpage'  className="btn btn-light bg-secondary text-light">register</Link>
        </li>

        <li className="nav-item">
          <Link  to='/pizzas'  className="btn btn-light bg-secondary text-light">pizza001</Link>
        </li>

        <li className="nav-item">
          <Link  to='/profile'  className="btn btn-light bg-secondary text-light">profile</Link>
        </li>

        <li className="nav-item">
          <Link  to='/notfound'  className="btn btn-light bg-secondary text-light">NotFound</Link>
        </li>

        <li className="nav-item ms-auto">
          <Link to='/cart' className="btn btn-info bg-secondary text-info">Total: ${total}</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar