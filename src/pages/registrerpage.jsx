
import { useState } from "react"

const Registrerpage = ()=>{

const [Correo, setCorreo] = useState("")
const [Contraseña, setContraseña] = useState("")
const [ConfirmarContraseña, setConfirmarContraseña] = useState("")

const Ingresar=()=>{
if (Correo === "" || Contraseña ==="" || ConfirmarContraseña ==="" ){
    alert("Todos los campos deben de estar llenos")
    return
}
if (Contraseña.length < 6){
    alert("la contraseña debe tener minimo 6 caracteres")
    return
}
if (Contraseña !== ConfirmarContraseña){
    alert("las contraseñas no coinciden")
    return
}
 alert("registro completo")
}

 return(
 <div className="d-flex justify-content-center mt-5">
  <div className="card w-50 shadow p-3">
    <h4 className="text-center">Registro</h4>

    <input type="text" className="form-control mb-2" placeholder="Correo"
      onChange={(e) => setCorreo(e.target.value)}/>

    <input type="password" className="form-control mb-2" placeholder="Contraseña"
      onChange={(e) => setContraseña(e.target.value)}/>

    <input type="password" className="form-control mb-3" placeholder="Confirmar contraseña"
      onChange={(e) => setConfirmarContraseña(e.target.value)}/>

    <button className="btn btn-primary w-100" onClick={Ingresar}>
      Ingresar
    </button>

  </div>
 </div>
 )
}

export default Registrerpage