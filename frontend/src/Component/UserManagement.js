import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/adminService';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await getUsers();
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user._id !== id));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Manage Users</h1>
      <div>
        {users.map(user => (
          <div key={user._id} className="mb-4">
            <div className="p-4 border rounded">
              <h2 className="text-2xl">{user.email}</h2>
              <button onClick={() => handleDelete(user._id)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
