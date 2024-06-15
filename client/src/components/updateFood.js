import React from 'react'
import axios from 'axios'

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

const baseURL = `http://localhost:5000/api/food`;

const UpdateFood = () => {

    const [food, setFood] = useState({
        name: "",
        price: null
    })

    const navigate = useNavigate()
    const location = useLocation();

    const handleChange = (e) => {
        setFood(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const id = location.pathname.split('/')[3]
        try {
            await axios.post(`${baseURL}/update/${id}`, food)
            navigate("/menu")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='form'>
            <h1>Update Food</h1>
            <input type="text" placeholder='Food name' onChange={handleChange} name="name"></input>
            <input type="float" placeholder='price' onChange={handleChange} name="price"></input>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default UpdateFood