import { Card, Form } from "../components/context/Context.js";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, useAuth } from "../config/firebase-config";
export function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const currentUser = useAuth();

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
    setDisabled(true);
  }

  function validate(field, label) {
    if (!field) {
      setStatus(alert("Error " + label));
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field === password && field.length < 8) {
      setStatus(alert("password must have 8 characters"));
      return false;
    }
    return true;
  }

  function handleCreate() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        if (userCred) {
          console.log(userCred);
          console.log(userCred["_tokenResponse"]["idToken"]);
          var idToken = userCred["_tokenResponse"]["idToken"];
          fetch(`/account/create/${name}/${email}/${password}`, {
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
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    setShow(false);
  }

  return (
    <div className="card-container">
      <Card
        bgcolor={show ? "info" : "success"}
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              <Form
                label1="Name"
                type1="input"
                id1="name"
                placeholder1="Enter name.."
                value1={name}
                onChange1={(e) => {
                  setName(e.currentTarget.value);
                  setDisabled(false);
                }}
                label2="Email address"
                type2="email"
                id2="email"
                placeholder2="Enter email.."
                value2={email}
                onChange2={(e) => {
                  setEmail(e.currentTarget.value);
                  setDisabled(false);
                }}
                label3="Password"
                type3="input"
                id3="password"
                placeholder3="Enter password.."
                value3={password}
                onChange3={(e) => {
                  setPassword(e.currentTarget.value);
                  setDisabled(false);
                }}
                onClick={handleCreate}
                disabled={disabled}
                button="Create Account"
              ></Form>
            </>
          ) : (
            <>
              <h6>
                Success {name}! <br />
                You have created an account.{currentUser?.email}
              </h6>
              <Form
                type1="hidden"
                type2="hidden"
                type3="hidden"
                onClick={clearForm}
                button="Add another account"
              ></Form>
            </>
          )
        }
      ></Card>
      <h6>
        Already have an account?{" "}
        <a id="link2" href="#/Login">
          Log in
        </a>
      </h6>
    </div>
  );
}
