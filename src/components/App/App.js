import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [burritoData, setBurritoData] = useState([])

  useEffect(() => {
    getOrders()
      .then(data => {
        console.log(data)
        setBurritoData(data)
      })

      console.log(burritoData, 'burrito data :)')

    // .catch((err) => console.error("Error fetching:", err));
  }, []);

  const addOrder = (newOrder) => {
    setBurritoData([...burritoData, newOrder])
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder}/>
      </header>

        <Orders burritoData={burritoData} />
    </main>
  );
}

export default App;
