import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import Country from "./Pages/Country";


function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path=":country" element={<Country />} />
    <Route path="*" element={<NoPage />} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
