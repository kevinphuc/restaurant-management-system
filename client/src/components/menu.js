import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

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
      await axios.delete(`${baseURL}/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <div className="menu grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {
            food.map((f) => (
              <div className="border p-4 rounded-md shadow-md flex flex-col justify-between" key={f.id} style={{ color: '#708238' }}>
                <div>
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="text-sm">{f.description}</p>
                  <span className="block mt-2 font-bold">${f.price}</span>
                </div>
                <div className="flex justify-between mt-4 space-x-2">
                  <button
                    className="px-2 py-1 border-2 border-backgroundColor text-backgroundColor hover:bg-backgroundColor hover:text-white transition-all rounded-full"
                    onClick={() => handleDelete(f.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-2 py-1 border-2 border-backgroundColor text-backgroundColor hover:bg-backgroundColor hover:text-white transition-all rounded-full"
                  >
                    <Link to={`/menu/update/${f.fid}`}>Update</Link>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className=" justify-center">
        <button className="px-2 py-1 border-2 border-backgroundColor text-backgroundColor hover:bg-backgroundColor hover:text-white transition-all rounded-full">
          <Link to="/menu/add">Add new food</Link>
        </button>
      </div>
    </>
  );
}

export default Menu;
