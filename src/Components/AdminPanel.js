import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AdminPanel.css";

function AdminPanel() {
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState(null); // For editing
  const navigate = useNavigate();

  // Fetch customers data
  useEffect(() => {
    fetch("http://localhost:5001/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  // Handle Delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5001/api/customers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setCustomers(customers.filter((customer) => customer._id !== id));
      })
      .catch((err) => console.error("Error deleting customer:", err));
  };

  // Handle Edit (set the customer to edit mode)
  const handleEdit = (customer) => {
    setEditCustomer(customer); // Fill the form with the customer data
  };

  // Handle Save (update customer data)
  const handleSave = (e) => {
    e.preventDefault();
    
    // Make the PUT request to update the customer
    fetch(`http://localhost:5001/api/customers/${editCustomer._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCustomer),
    })
      .then((response) => response.json())
      .then((updatedCustomer) => {
        // Update the state with the new customer data
        setCustomers(customers.map((customer) => (customer._id === updatedCustomer._id ? updatedCustomer : customer)));
        setEditCustomer(null); // Close the edit form
      })
      .catch((err) => console.error("Error updating customer:", err));
  };

  // Handle input changes in the edit form
  const handleChange = (e) => {
    setEditCustomer({
      ...editCustomer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="customer-table">
        <h2>Customer List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.city}</td>
                <td>{customer.age}</td>
                <td>{customer.gender}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(customer)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(customer._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Customer Form */}
      {editCustomer && (
        <div className="edit-form">
          <h2>Edit Customer</h2>
          <form onSubmit={handleSave}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editCustomer.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={editCustomer.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                name="city"
                value={editCustomer.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={editCustomer.age}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                name="gender"
                value={editCustomer.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit" className="save-btn">
              Save
            </button>
            <button type="button" className="cancel-btn" onClick={() => setEditCustomer(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
