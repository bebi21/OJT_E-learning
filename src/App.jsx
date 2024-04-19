import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/Index";
import BlockDeails from "./page/blockDetails/BlockDeails";
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
