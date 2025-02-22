import { useState } from "react";
import { postOrders } from "../../apiCalls";

function OrderForm({ addOrder }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !ingredients) {
      console.log('plz complete the form')
    } else {
      const orderData = {
        id: Date.now(),
        name: name,
        ingredients: ingredients
      };
      postOrders(orderData)
        .then(dataResult => {
          addOrder(dataResult)
        })
    }
    clearInputs();
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  }

  const ingredientOptions = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIngredientClick = (ingredient, e) => {
    console.log(ingredient, "ingredient selected")
    setIngredients((prevSelectedIngredients) => [...prevSelectedIngredients, ingredient]);
  };
  
  console.log(ingredients)

  const ingredientButtons = ingredientOptions.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        type="button"
        onClick={(e) => handleIngredientClick(ingredient, e)}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />

      {ingredientButtons}

      <p className='order'>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button name='submit' onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;