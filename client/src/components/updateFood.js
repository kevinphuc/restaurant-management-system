import React from 'react'
import axios from 'axios'
import { react, useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const UpdateFood = () => {

    const [food, setFood] = useState({
        name: "",
        description: "",
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
            await axios.post("http://localhost:5000/api/food/update/" + id, food)
            navigate("/menu")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-cols h-screen items-center'>
            <div className='mx-auto rounded-xl px-6 py-1 border-2 border-backgroundColor text-backgroundColor'>
                <div>
                    <h1>Update Food</h1>
                    <input type="text" placeholder='Food name' onChange={handleChange} name="name"></input>
                    <input type="text" placeholder='Food description' onChange={handleChange} name="description"></input>
                    <input type="float" placeholder='price' onChange={handleChange} name="price"></input>
                </div>
                <button onClick={handleClick}>Update</button>
            </div>
        </div>
    )
}

export default UpdateFood