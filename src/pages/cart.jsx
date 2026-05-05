import { useState } from "react"
import { Pizzas } from "../pizzass"

const Cart = () => {

    const [productos, setProductos] = useState(
        Pizzas.map((e) => {
            return { ...e, cantidad: 0 }
        })
    )

    const sumar = (id) => {
        const nuevo = productos.map((e) => {
            if (e.id === id) {
                return { ...e, cantidad: e.cantidad + 1 }
            }
            return e
        })
        setProductos(nuevo)
    }

    const restar = (id) => {
        const nuevo = productos.map((e) => {
            if (e.id === id) {
                if (e.cantidad > 0) {
                    return { ...e, cantidad: e.cantidad - 1 }
                }
            }
            return e
        })
        setProductos(nuevo)
    }

    let total = 0
    productos.forEach((e) => {
        total = total + (e.price * e.cantidad)
    })

    return (
        <div>
            <h1>productos</h1>

            {productos.map((e) => {
                return (
                    <div key={e.id}>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <img src={e.img} width="80" />
                            <h4>{e.name}</h4>
                            <h4>${e.price}</h4>

                            <button onClick={() => restar(e.id)} style={{  color: "red" }}>-</button>

                            <h5>{e.cantidad}</h5>

                            <button onClick={() => sumar(e.id)} style={{  color: "blue" }}>+</button>
                        </div>
                    </div>
                )
            })}

            <h2>Total: ${total}</h2>

            <button>Pagar</button>
        </div>
    )
}

export default Cart