import Home from "./pages/home"

const CardPizza = ({pizzas}) => {
    return (
        <div className="row">

            {pizzas.map((e) => {
                return (
                    <div key={e.id} className="col-4 mb-4">
                        <div className="card h-100">
                            <img src={e.img} className="card-img-top imgcard" alt="" />

                            <div className="card-body">
                                <h5 className="card-title border-bottom border-secondary">{e.name}</h5>
                                <p className="card-title border-bottom border-secondary" style={{ fontSize: "10px" }}>{e.desc}</p>

                                <h5>Ingredientes</h5>

                                <ol className="card-text border-bottom border-secondary">
                                    {e.ingredients.map((i, index) => {
                                        return <li key={index}>{i}</li>
                                    })}
                                </ol>

                                <h6 className="card-text">Precio: {e.price}</h6>
                            </div>

                            <div className="card-body d-flex justify-content-around">
                                <a href="#" className="btn btn-secondary">ver mas</a>
                                <a href="#" className="btn btn-primary">añadir</a>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default CardPizza