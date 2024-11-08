import Hero from "./pages/Hero";
import Notes from "./pages/Notes";
import Layout from "./components/Layout";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NoteDetailsPage from "./pages/NoteDetailsPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="/notes" element={<Notes />} /> 
        <Route path="/noteDetails/:noteId" element={<NoteDetailsPage />} />
        </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

