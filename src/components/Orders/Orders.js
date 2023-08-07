import React, { useEffect, useState } from "react";
import "./Orders.css";

const Orders = ({ burritoData }) => {
  console.log(burritoData, 'what')

  const burritoOrders = burritoData
    ? burritoData.orders.map((order) => (
        <div className="order" key={order.name}>
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))
    : null;

  return (
    <section>
      {burritoOrders? burritoOrders : <p>No orders yet!</p>}
    </section>
  );
};

export default Orders;
