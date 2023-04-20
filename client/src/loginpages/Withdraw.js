import { Card, Form } from "../components/context/Context.js";
import { useState } from "react";
import { useAuth } from "../config/firebase-config";
export function Withdraw() {
  const [disabled, setDisabled] = useState(true);
  const [withdraw, setWithdraw] = useState("");
  // const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const currentUser = useAuth();
  const email = currentUser?.email;
  const handleSubmit = (event) => {
    // console.log(Number(withdraw));

    fetch(`account/${email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          console.log(data);
          if (withdraw <= data[0]["balance"]) {
            handleChange();
            setStatus(`Success! You have withdrawn $${withdraw}.`);
          } else {
            setStatus("Withdraw failed! Insufficient balance.");
          }
        } catch (err) {
          console.log("err:", text);
          setStatus("Withdraw failed");
        }
      });

    const handleChange = () => {
      fetch(`/account/update/${email}/${-withdraw}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            // const data = JSON.parse(text);
          } catch (err) {
            console.log("err:", text);
            setStatus("Withdraw failed");
          }
        });
    };
    event.preventDefault();
    setShow(false);
  };

  function clearForm() {
    setWithdraw("");
    setShow(true);
    // setDisabled(true);
  }
  return (
    <div className="card-container">
      <Card
        bgcolor="success"
        txtcolor="white"
        header="Withdraw"
        body={
          show ? (
            <>
              <Form
                type1="hidden"
                label2="Withdraw"
                type2="input"
                id2="amount"
                placeholder2="Enter amount.."
                value2={withdraw}
                onChange2={(e) => {
                  setWithdraw(e.currentTarget.value);
                  setDisabled(false);
                }}
                type3="hidden"
                onClick={handleSubmit}
                button="Withdraw"
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
