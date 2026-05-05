import CardPizza from "../CardPizza";
import { Pizzas } from "../pizzass"
import React, { useEffect, useState } from "react";

const Home = () => {

const [pizzas, setPizzas] = useState([])

useEffect(() => {
    setPizzas(Pizzas)
}, [])


  return (
    <>

      <div
        className="totalcardpizza"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
       <CardPizza pizzas={pizzas}/>
      </div>
    </>
  );
};

export default Home


