import { useState } from "react";

function OrderForm({ burritoData }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Order Submitted:");
    console.log("Name:", name);
    console.log("Ingredients:", ingredients);
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

  const handleIngredientClick = (ingredient) => {
    console.log(ingredient, "ingredient selected");
    setIngredients((prevSelectedIngredients) => [
      ...prevSelectedIngredients,
      ingredient,
    ]);
  };

  const ingredientButtons = ingredientOptions.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        onClick={() => handleIngredientClick(ingredient)}
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

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;