import { Card, Form } from "../components/context/Context.js";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, useAuth } from "../config/firebase-config";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState("");
  const [authentication, setAuthentication] = useState(false);

  const currentUser = useAuth();

  // login with Email and Password
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        if (userCred) {
          setAuthentication(true);
          console.log(userCred["_tokenResponse"]["idToken"]);
          const idToken = userCred["_tokenResponse"]["idToken"];
          fetch(`/account/login/${email}/${password}`, {
            method: "GET",
            headers: {
              Authorization: idToken,
            },
          })
            .then((response) => response.text())
            .then((text) => {
              try {
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
    setShow(false);
  };

  // login with google
  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((userCred) => {
      if (userCred) {
        setAuthentication(true);
        console.log(userCred["_tokenResponse"]["idToken"]);
        const idToken = userCred["_tokenResponse"]["idToken"];
        const password = "none";
        const name = userCred["user"]["displayName"];
        const email = userCred["user"]["email"];
        fetch(`/account/googleLogin/${name}/${email}/${password}`, {
          method: "GET",
          headers: {
            Authorization: idToken,
          },
        })
          .then((response) => response.text())
          .then((text) => {
            try {
              setStatus(text);
            } catch (err) {
              console.log("err:", text);
              setStatus(text);
            }
          })
          .catch((error) => console.error(error));
      } else {
        console.warn("There is currently no logged in user.");
      }
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
                <h5>Welcome {currentUser?.email}</h5>
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
                ></Form>
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
                <br />
                <h6>
                  Don't have an account?
                  <a id="link1" href="#/CreateAccount">
                    Sign up
                  </a>
                </h6>
              </>
            ) : (
              <>
                <h5>{status}</h5>
                {currentUser?.email}
              </>
            )
          }
        ></Card>
      )}
    </div>
  );
}
