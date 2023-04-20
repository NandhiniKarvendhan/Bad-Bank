import { Card, Form } from "../components/context/Context.js";
import { useState } from "react";
import { useAuth } from "../config/firebase-config";
export function Deposit() {
  // const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState();
  const [show, setShow] = useState(true);
  const currentUser = useAuth();
  const email = currentUser?.email;
  const handleSubmit = (event) => {
    fetch(`/account/update/${email}/${amount}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          // const data = JSON.parse(text);
          // console.log("JSON:", data.value);
          // console.log(JSON.stringify(data.value["balance"]));
          setStatus(`Success! You have deposited $${amount}.`);
        } catch (err) {
          console.log("err:", text);
          setStatus(text);
        }
      });
    event.preventDefault();
    setShow(false);
  };

  function clearForm() {
    setAmount("");
    setShow(true);
    // setDisabled(true);
  }
  return (
    <div className="card-container">
      <Card
        bgcolor={show ? "warning" : "success"}
        txtcolor="white"
        header="Deposit"
        body={
          show ? (
            <>
              <Form
                type1="hidden"
                label2="Deposit"
                type2="input"
                id2="amount"
                placeholder2="Enter amount.."
                value2={amount}
                onChange2={(e) => {
                  setAmount(e.currentTarget.value);
                  setDisabled(false);
                }}
                type3="hidden"
                button="Deposit"
                onClick={handleSubmit}
                disabled={disabled}
              ></Form>
            </>
          ) : (
            <>
              <h6>{status}</h6>
            </>
          )
        }
      ></Card>
    </div>
  );
}
