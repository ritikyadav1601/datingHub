import React, { useState } from "react";
import "../Styles/Register.css"; // Importing the CSS file

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    age: "",
    gender: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5001/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        setFormData({ name: "", phone: "", city: "", age: "", gender: "" }); // Clear form
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Failed to connect to server.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="heading">Easily Find A Girl & Women</h2>

      <div className="inline-container">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="input"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone No."
          pattern="[0-9]{10}"
          required
          className="input"
        />
      </div>

      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Your City"
        required
        className="input"
      />

      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        min="1"
        required
        className="input"
      />

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
        className="input"
      >
        <option value="" disabled>
          Select Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit" className="button" disabled={loading}>
        {loading ? "Submitting..." : "Register Now"}
      </button>

      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default Register;
