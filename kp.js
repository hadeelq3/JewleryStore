// Get reference to the product image and add event listener
const productImage = document.querySelector(".product-image");
productImage.addEventListener("click", chooseImage);

// Get references to the color and material select elements
const colorSelect = document.querySelector("#color-select");
const materialSelect = document.querySelector("#material-select");

// Add event listeners to the select elements
colorSelect.addEventListener("change", updateSelection);
materialSelect.addEventListener("change", updateSelection);

// Function to handle image selection
function chooseImage() {
  // Show the image selection modal
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

// Function to handle select element changes
function updateSelection() {
  // Get the current selected color and material
  const selectedColor = colorSelect.value;
  const selectedMaterial = materialSelect.value;

  // Update the product image based on the selected options
  productImage.src = `images/product-${selectedColor}-${selectedMaterial}.jpg`;

  // Update the product description with the selected options
  const productDescription = document.querySelector(".product-description");
  productDescription.textContent = `Selected options: ${selectedColor} and ${selectedMaterial}`;
}

import React, { useState } from "react";

const ContactForm = () => {
  // State to store the form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  // State to store any form errors
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input changes
  const handleChange = event => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Validate the form values
    const errors = validateForm(formValues);
    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
      setFormValues({ name: "", email: "", message: "" });
    }
  };

  // Function to validate the form values
  const validateForm = values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        {formErrors.name && <div className="error">{formErrors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <div className="error">{formErrors.email}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />
        {formErrors.message && (
          <div className="error">{formErrors.message}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
     document.getElementById("infoButton").addEventListener("click", function() {
      alert("You have information!");
    });
  );
};

export default Contact

