import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Search from "./components/Search/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exacts={true} element={<Home />}></Route>
          <Route path={"/search"} element={<Search />}></Route>
          {/* <Route path={"/"} exacts={true} element={<Search />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
