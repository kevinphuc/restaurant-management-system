import './App.css';
import Menu from "./components/menu.js"
import AddFood from "./components/addFood.js"
import UpdateFood from "./components/updateFood.js"


import {react} from 'react';
import { BrowserRouter,
  Routes,
  Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu/add" element={<AddFood/>}/>
        <Route path="/menu/update/:id" element={<UpdateFood/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;