import { useLocation } from 'react-router-dom';
import { react, useEffect, useState } from 'react';
// import './menu_customer.css';


function Bill() {
    const { state } = useLocation()
    const course_id = state

    const [food, setFood] = useState([]);

    let bill_total = 0

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/course/" + course_id);
                const data = await res.json();
                setFood(data.food);
            } catch (error) {
                console.log(error);
            }
        };
        fetchFood();
    }, []);

    return (
        <div className='flex flex-cols h-screen items-center'>
            <div className='mx-auto rounded-xl px-6 py-1 border-2 border-backgroundColor text-backgroundColor'>
                <div class="header">
                    <h1>Restaurant Name</h1>
                    <p>123 Apple St, City, Country</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div class="bill-details">
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                food.map((f) => {
                                    const total = f.price * f.quantity
                                    bill_total += total
                                    return (
                                        <tr>
                                            <td>{f.name}</td>
                                            <td>${f.price}</td>
                                            <td>{f.quantity}</td>
                                            <td>${total.to}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="total">
                    <p><strong>Total: ${bill_total.toFixed(2)}</strong></p>
                </div>
                <div class="footer">
                    <p>Thank you for dining with us!</p>
                </div>
            </div>
        </div>
    )
}

export default Bill