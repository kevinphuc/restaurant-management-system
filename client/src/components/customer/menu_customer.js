// import './menu_customer.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { react, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuCustomer() {
    const [food, setFood] = useState([]);
    const [addedFood, setAddedFood] = useState([]);
    const navigate = useNavigate();

    const addFood = (newFood) => {
        setAddedFood([...addedFood, newFood]);
    };

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/food");
                const data = await res.json();
                setFood(data.food);
            } catch (error) {
                console.log(error);
            }
        };
        fetchFood();
    }, []);

    const handleAdd = (id, name, price) => {
        setAddedFood((prevAddedFood) => {
            const existingFoodIndex = prevAddedFood.findIndex(f => f.fid === id);
            if (existingFoodIndex !== -1) {
                // If food item exists, update its quantity
                const updatedFood = [...prevAddedFood];
                updatedFood[existingFoodIndex] = {
                    ...updatedFood[existingFoodIndex],
                    quantity: updatedFood[existingFoodIndex].quantity + 1,
                };
                return updatedFood;
            } else {
                const newFood = {
                    fid: id,
                    name: name,
                    price: price,
                    ETA: null,
                    quantity: 1,
                };
                return [...prevAddedFood, newFood];
            }
        });

        if (!addedFood.some(f => f.fid === id)) {
            const newFood = {
                fid: id,
                name: name,
                price: price,
                ETA: null,
                quantity: 1,
            };
            addFood(newFood);
        }
    };

    const handleDelete = (id) => {
        setAddedFood((prevAddedFood) =>
            prevAddedFood.filter(food => food.fid !== id)
        );
    };

    const handleOrder = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/course/add_food_course", addedFood);
            navigate("/bill", { state: res.data.course_id });
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Our menu</h1>
            <div className="menu grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {/* <div 
                className="fixed w-full justify-center items-center min-h-screen font-bold lg:px-32 px-5 text-5xl"
            >
                Menu
            </div> */}
                {
                    food.map((f) => (
                        <div className="border p-4 rounded-md shadow-md flex flex-col" key={f.id} style={{ color: '#708238' }}>
                            <h3 className="text-lg font-semibold">{f.name}</h3>
                            <p className="text-sm">{f.description}</p>
                            <span className="block mt-auto font-bold">${f.price}</span>
                            <button 
                                className="mt-auto px-6 py-1 border-2 border-backgroundColor text-backgroundColor hover:bg-backgroundColor hover:text-white transition-all rounded-md" 
                                onClick={() => handleAdd(f.id, f.name, f.price)}
                            >
                                Add
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="mt-10 w-full lg:w-1/2 space-y-5">
                <h2 className="text-2xl font-bold">Your order:</h2>
                {
                    addedFood.map((f) => (
                        <div className="border p-4 rounded-md shadow-md" key={f.fid} style={{ color: '#708238' }}>
                            <h3 className="text-lg font-semibold">{f.name}</h3>
                            <span className="block mt-2 font-bold">${f.price}</span>
                            <p className="mt-1">Quantity: {f.quantity}</p>
                            <button className="mt-auto px-6 py-1 border-2 border-backgroundColor text-backgroundColor hover:bg-backgroundColor hover:text-white transition-all rounded-md" onClick={() => handleDelete(f.fid)}>Delete</button>
                        </div>
                    ))
                }
                <button className="mt-auto px-6 py-1 border-2 border-backgroundColor text-backgroundColor hover:bg-backgroundColor hover:text-white transition-all rounded-md" onClick={handleOrder}>Place order</button>
            </div>
        </div>

    );
}

export default MenuCustomer;
