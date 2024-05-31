// src/components/Register.js
import React, { useState } from 'react';
import api from '../api';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/users/register', formData);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
            />
            <button type="submit">Registrar</button>
        </form>
    );
};

export default Register;