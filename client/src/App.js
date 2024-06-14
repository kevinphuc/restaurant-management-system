import Menu from "./components/menu.js"
import AddFood from "./components/addFood.js"
import UpdateFood from "./components/updateFood.js"

import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";

function App() {

  return (
    <div className="">
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu/add" element={<AddFood/>}/>
        <Route path="/menu/update/:id" element={<UpdateFood/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;