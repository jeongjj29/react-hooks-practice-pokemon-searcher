import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onNewPokemonSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: "",
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    let updatedValue;
    if (name === "frontUrl" || name === "backUrl") {
      updatedValue = {
        ...formData,
        sprites: {
          ...formData.sprites,
          [name === "frontUrl" ? "front" : "back"]: value,
        },
      };
    } else {
      updatedValue = {
        ...formData,
        [name]: value,
      };
    }
    setFormData(updatedValue);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          fetch("http://localhost:3001/pokemon", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }).then(() => {
            onNewPokemonSubmit(formData);
          });
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
