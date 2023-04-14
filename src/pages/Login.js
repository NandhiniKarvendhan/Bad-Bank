import { Card, Form } from "./Context.js";
import { useState } from "react";

// import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/firebase-config";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState("");
  const [authentication, setAuthentication] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    // currentUser.getIdToken().then((idToken) => {
    //   console.log("idToken:", idToken);
    // });
  });
  // login with Email and Password
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        if (userCred) {
          setAuthentication(true);
          console.log(userCred["_tokenResponse"]["idToken"]);
          const idToken = userCred["_tokenResponse"]["idToken"];
          // async () => {
          //   let response = await fetch("/account/login/${email}/${password}", {
          //     method: "GET",
          //     headers: {
          //       Authorization: idToken,
          //     },
          //   });
          //   let text = await response.text();
          //   console.log("response:", response);
          // };
          fetch(`/account/login/${email}/${password}`, {
            method: "GET",
            headers: {
              Authorization: idToken,
            },
          })
            .then((response) => response.text())
            .then((text) => {
              try {
                // const data = JSON.parse(text);
                // console.log("JSON:", data);
                setStatus(text);
              } catch (err) {
                console.log("err:", text);
                setStatus(text);
              }
            });
        } else {
          console.warn("There is currently no logged in user.");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    if (!password) {
      alert("please enter password");
      setDisabled(false);
    }
    // fetch(`/account/login/${email}/${password}`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: idToken,
    //   },
    // })
    //   .then((response) => response.text())
    //   .then((text) => {
    //     try {
    //       // const data = JSON.parse(text);
    //       // console.log("JSON:", data);
    //       setStatus(text);
    //     } catch (err) {
    //       console.log("err:", text);
    //       setStatus(text);
    //     }
    //   });
    setShow(false);
  };

  // login with google
  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((userCred) => {
      if (userCred) {
        setAuthentication(true);
      }
      console.log(userCred);
    });
  };

  return (
    <div className="card-container">
      {authentication ? (
        <>
          <Card
            bgcolor={show ? "primary" : "success"}
            body={
              <>
                <h5>Welcome {user.email}</h5>
                <button>
                  <a id="link1" href="#/Deposit">
                    Deposit &nbsp; &#8811;
                  </a>
                </button>
                <br /> <br />
                <button>
                  <a id="link1" href="#/Withdraw">
                    Withdraw &nbsp; &#8811;
                  </a>
                </button>
              </>
            }
          ></Card>
        </>
      ) : (
        <Card
          bgcolor={show ? "primary" : "success"}
          header="Login to your account"
          body={
            show ? (
              <>
                <Form
                  label1="Email"
                  type1="input"
                  id1="email"
                  placeholder1="Enter email.."
                  onChange1={(e) => {
                    setEmail(e.currentTarget.value);
                    setDisabled(false);
                  }}
                  label2="Password"
                  type2="input"
                  id2="password"
                  placeholder2="Enter password.."
                  onChange2={(e) => {
                    setPassword(e.currentTarget.value);
                    setDisabled(false);
                  }}
                  type3="hidden"
                  id3="login"
                  button="Login"
                  onClick={handleSubmit}
                  disabled={disabled}
                ></Form>{" "}
                <br />
                <button
                  type="submit"
                  id="loginWithGoogle"
                  className="btn btn-light"
                  onClick={loginWithGoogle}
                >
                  Login with Google
                </button>
                <br />
                <h6>
                  Don't have an account?{" "}
                  <a id="link1" href="#/CreateAccount">
                    Sign up
                  </a>
                </h6>
              </>
            ) : (
              <>
                <h5>{status}</h5>
                {user.email}
              </>
            )
          }
        ></Card>
      )}
    </div>
  );
}
