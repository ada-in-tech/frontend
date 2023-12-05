import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import UserTable from '../components/common/UserTable';
import '../styles/components.css';

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`/api/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <h1>User Management</h1>
            <UserTable data={users} onDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default UserManagementPage;
