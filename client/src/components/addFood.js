import React from 'react'
import axios from 'axios'
import {react, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

const baseURL = `http://localhost:5000/api/food`;

const AddFood = () => {
    const [food, setFood] = useState({
        fid:"",
        name:"",
        price: null
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFood(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        try {
            await axios.post(`${baseURL}/create`, food)
            navigate("/menu")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='form'>
            <h1>Add New Food</h1>
            <input type="text" placeholder='Food ID' onChange={handleChange} name="fid"></input>
            <input type="text" placeholder='Food name' onChange={handleChange} name="name"></input>
            <input type="float" placeholder='price' onChange={handleChange} name="price"></input>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddFood