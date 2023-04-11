// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { CreateAccount } from "./pages/CreateAccount";
import { Login } from "./pages/Login";
import { Deposit } from "./pages/Deposit";
import { Withdraw } from "./pages/Withdraw";
import { Balance } from "./pages/Balance";
import { AllData } from "./pages/AllData";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/CreateAccount" element={<CreateAccount />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Deposit" element={<Deposit />}></Route>
          <Route path="/Withdraw" element={<Withdraw />}></Route>
          <Route path="/Balance" element={<Balance />}></Route>
          <Route path="/AllData" element={<AllData />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
