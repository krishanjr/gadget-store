import BASE_URL from '../../utils/api';
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

const ManageUsers = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL + "/users/")
      .then((res) => {
        let data = res.data;
        setUsers(data);
        console.log(data);
      })
      .catch((err) => {
        setError("Failed to fetch users.");
        console.error(err);
      });
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`${BASE_URL}/users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user.");
    }
  };

    const toggleAdmin = async (id, currentStatus) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${id}`, {
        isAdmin: !currentStatus,
      });

      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, isAdmin: response.data.isAdmin } : user
        )
      );
    } catch (err) {
      console.error("Error updating admin status:", err);
      alert("Failed to update admin status.");
    }
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">FirstName</th>
              <th className="border p-2">LastName</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">IsAdmin</th>
              <th className="border p-2">DateOfBirth</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">city</th>
              <th className="border p-2">State</th>
              <th className="border p-2">ZipCode</th>
              <th className="border p-2">Country</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
            <tr key={user.id}>
              <td className="border p-2">{user.firstName}</td>
              <td className="border p-2">{user.lastName}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">              
                <input
                  type="checkbox"
                  checked={user.isAdmin}
                  onChange={() => toggleAdmin(user.id, user.isAdmin)}
                />
              </td>
              <td className="border p-2">{user.dateOfBirth}</td>
              <td className="border p-2">{user.gender}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.city}</td>
              <td className="border p-2">{user.state}</td>
              <td className="border p-2">{user.zipCode}</td>
              <td className="border p-2">{user.country}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

