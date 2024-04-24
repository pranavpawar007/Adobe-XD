import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./pages/Home";
import  Login  from "./components/Login";
import Register  from "./components/Register";
import AccountSetting from "./components/AccountSettings";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <>
     <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<AccountSetting />} />
        
        </Routes>
      </BrowserRouter>
      </AppContainer>
    </>
  );
}

export default App;
