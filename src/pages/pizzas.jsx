import React, { useState, useEffect } from "react"
import { Pizzas } from "../pizzass"

const Pizzasx = () => {
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    const pizzaEncontrada = Pizzas.find(p => p.id === "p001")
    setPizza(pizzaEncontrada)
  }, [])

  if (!pizza) return <p>Cargando...</p>

  return (
    <div className="col-4 mb-4">
      <div className="card h-100">
        <img src={pizza.img} className="card-img-top imgcard" alt="" />

        <div className="card-body">
          <h5 className="card-title border-bottom border-secondary">
            {pizza.name}
          </h5>

          <p className="card-title border-bottom border-secondary" style={{ fontSize: "10px" }}>
            {pizza.desc}
          </p>

          <h5>Ingredientes</h5>

          <ol className="card-text border-bottom border-secondary">
            {pizza?.ingredients?.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ol>

          <h6 className="card-text">Precio: {pizza.price}</h6>
        </div>

        <div className="card-body d-flex justify-content-around">
          <a href="#" className="btn btn-secondary">ver mas</a>
          <a href="#" className="btn btn-primary">añadir</a>
        </div>
      </div>
    </div>
  )
}

export default Pizzasx