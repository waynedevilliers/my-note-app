import Hero from "./pages/Hero";
import Layout from "./components/Layout";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

