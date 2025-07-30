import { useState } from "react";
import axios from "axios";

const Donate = () => {
  const [formData, setFormData] = useState({
    foodDescription: "",
    quantity: "",
    location: "",
    contactNumber: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assume user ID is stored in localStorage after login
      const userId = localStorage.getItem("userId");

      const res = await axios.post("http://localhost:5000/api/donations", {
        ...formData,
        userId,
      });

      if (res.status === 201) {
        setMessage("✅ Donation submitted successfully!");
        setFormData({
          foodDescription: "",
          quantity: "",
          location: "",
          contactNumber: "",
        });
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error submitting donation");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Donate Food</h2>

      {message && (
        <p className="text-center mb-4 font-semibold text-green-600">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="foodDescription"
          placeholder="Food Description"
          value={formData.foodDescription}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity (e.g. 5 plates)"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default Donate;
