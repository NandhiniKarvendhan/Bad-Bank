// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { CreateAccount } from "./pages/CreateAccount";
import { Login } from "./pages/Login";
import { Deposit } from "./loginpages/Deposit";
import { Withdraw } from "./loginpages/Withdraw";
import { Balance } from "./loginpages/Balance";
import { AllData } from "./loginpages/AllData";
import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./components/context/AuthContext";

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
