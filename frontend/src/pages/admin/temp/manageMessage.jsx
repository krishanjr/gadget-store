import BASE_URL from '../../utils/api';
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

const ManageMessages = () => {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL + "/messages/")
      .then((res) => {
        let data = res.data;
        setMessages(data);
        console.log(data);
      })
      .catch((err) => {
        setError("Failed to fetch messages.");
        console.error(err);
      });
  }, []);


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Id</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Subject</th>
              <th className="border p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(message => (
            <tr key={message.id}>
              <td className="border p-2">{message.id}</td>
              <td className="border p-2">{message.fullName}</td>
              <td className="border p-2">{message.emailAddress}</td>
              <td className="border p-2">{message.subject}</td>
              <td className="border p-2">{message.message}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMessages;

