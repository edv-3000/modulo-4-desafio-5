import { Link } from "react-router-dom"

const NotFound=()=>{
    return(
        <div className="d-flex justify-content-center mt-5">
  <div className="card  shadow p-3">
    <h4 className="text-center">Error 404 Pagina no encontrada</h4>

    <Link to='/' className="btn btn-primary w-100">
      volver
    </Link>

  </div>
 </div>
    )
}

export default NotFound