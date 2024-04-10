import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Index";
export default function App() {
  return (
    <>
<<<<<<< Updated upstream
      <RouterProvider router={router} />
=======
    {/* <Hamburger/> */}
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    
>>>>>>> Stashed changes
    </>
  );
}
