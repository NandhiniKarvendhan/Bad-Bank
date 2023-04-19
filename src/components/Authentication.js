import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";

export const Authentication = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
        setUserEmail(user["email"]);
        // console.log(user["email"]);
        return user["email"];
      } else {
        setAuthenticatedUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {authenticatedUser === null ? (
        <>
          <li className=" create-account">
            <a className="nav-link" href="#/CreateAccount">
              Create Account
            </a>
            <div className="page-description">Create an account</div>
          </li>
          <li className="nav-item login">
            <a className="nav-link" href="#/Login">
              Login
            </a>
            <div className="page-description">login to your account</div>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item deposit ">
            <a className="nav-link" href="#/Deposit">
              Deposit
            </a>
            <div className="page-description">Deposit your money</div>
          </li>
          <li className="nav-item withdraw">
            <a className="nav-link" href="#/Withdraw">
              Withdraw
            </a>
            <div className="page-description">Withdraw your money</div>
          </li>
          <li className="nav-item balance">
            <a className="nav-link" href="#/Balance">
              Balance
            </a>
            <div className="page-description">Check your balance</div>
          </li>
          <li className="nav-item all-data">
            <a className="nav-link" href="#/AllData">
              AllData
            </a>
            <div className="page-description">Data can be tracked here</div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" onClick={userSignOut}>
              Sign Out [{userEmail}]
            </a>
            <div className="page-description">Create an account</div>
          </li>
        </>
      )}
    </>
  );
};
