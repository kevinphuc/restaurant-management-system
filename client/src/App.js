import axios from 'axios'

import {react, useEffect, useState} from 'react';

function App() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    const fetchFood = async () => {
      console.log("Running")
      try {
        const res = await fetch("http://localhost:5000/api/food");
        console.log(res);
        const data = await res.json();
        setFood(data.food);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFood();
  }, []);


  return (
    <div>
      {
        food.map((f) => {
          return(
              <div key={f.fid}>
                <h1>{f.fid}</h1>
                <h1>{f.name}</h1>
                <h1>{f.price}</h1>
              </div>
            )
        })
      }
    </div>
  );
}

export default App;
