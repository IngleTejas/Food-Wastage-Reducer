import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        // ✅ Get user from localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?._id;

        if (!userId) {
          console.error("User ID not found in localStorage.");
          return;
        }

        // ✅ Fetch donations of that user
        const res = await axios.get(`http://localhost:5000/api/donations/user/${userId}`);
        setDonations(res.data);
      } catch (err) {
        console.error("Error fetching donations:", err);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Donations</h2>
      {donations.length === 0 ? (
        <p className="text-center text-gray-600">No donations yet.</p>
      ) : (
        <div className="grid gap-4">
          {donations.map((donation) => (
            <div key={donation._id} className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold">{donation.foodDescription}</h3>
              <p><strong>Quantity:</strong> {donation.quantity}</p>
              <p><strong>Location:</strong> {donation.location}</p>
              <p><strong>Contact:</strong> {donation.contactNumber}</p>
              <p className="text-sm text-gray-500 mt-1">
                Submitted on {new Date(donation.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
