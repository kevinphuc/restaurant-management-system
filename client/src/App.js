import Menu from "./components/menu.js"
import AddFood from "./components/addFood.js"
import UpdateFood from "./components/updateFood.js"
import NavBar from "./components/Navbar.jsx";
import Login from "./components/login.js"
import Base from "./components/base.js"
import Bill from "./components/customer/bill.js"
import MenuCustomer from "./components/customer/menu_customer.js";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export const clientURL = `http://localhost:3000`;

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/base" element={<Base />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu_customer" element={<MenuCustomer />} />
          <Route path="/menu/add" element={<AddFood />} />
          <Route path="/menu/update/:id" element={<UpdateFood />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;