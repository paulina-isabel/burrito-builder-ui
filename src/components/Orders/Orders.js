import React from "react";
import "./Orders.css";

const Orders = ({ burritoData }) => {
  const burritoOrders = burritoData.orders.map((order) => {
    return (
      <div className="order">
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <section>{burritoOrders.length? burritoOrders : <p>No orders yet!</p>}</section>
  );
};

export default Orders;
