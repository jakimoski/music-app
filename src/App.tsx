import { router } from "./router/router";
import "./styles/main.scss";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
