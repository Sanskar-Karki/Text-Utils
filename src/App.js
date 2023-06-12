import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#454f52";
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
      {/*<BrowserRouter>*/}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        {/*<Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={*/}
        <TextForm heading="Enter the text below to Analyze" mode={mode} />
        {/* }
            />
          </Routes>*/}
      </div>
      {/*</BrowserRouter>*/}
    </>
  );
}

export default App;
