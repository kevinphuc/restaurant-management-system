import './components.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import {react, useEffect, useState} from 'react';

const baseURL = `http://localhost:5000/api/food`;

function Menu() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch(`${baseURL}`);
        const data = await res.json();
        setFood(data.food);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFood();
  }, []);

  const handleDelete = async (id) => {
    try {
        await axios.delete(`${baseURL}/delete/${id}`)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <div>
        {
          food.map((f) => {
            return(
                <div className="menu" key={f.fid}>
                  <h3>{f.name}</h3>
                  <span>${f.price}</span>
                  <button className='delete' onClick={() => handleDelete(f.fid)}>Delete</button>
                  <button className='update'><Link to={`/menu/update/${f.fid}`}>Update</Link></button>
                </div>
              )
          })
        }
      </div>
        <div className="button-container">
            <button className="add-food-button">
                <Link to="/menu/add">Add new food</Link>
            </button>
        </div>
    </div>
  );
}

export default Menu;