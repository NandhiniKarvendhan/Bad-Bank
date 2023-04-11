import { Card, Form } from "./Context.js";
import { useState } from "react";
export function Withdraw() {
  const [disabled, setDisabled] = useState(true);
  const [withdraw, setWithdraw] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    {
      // console.log(Number(withdraw));

      fetch(`account/find/${email}`)
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
              const data = JSON.parse(text);
            } catch (err) {
              console.log("err:", text);
              setStatus("Withdraw failed");
            }
          });
      };
      event.preventDefault();
      setShow(false);
    }
  };

  function clearForm() {
    setWithdraw("");
    setShow(true);
    setDisabled(true);
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
                label1="Email"
                type1="input"
                id1="email"
                value1={email}
                placeholder1="Enter email.."
                onChange1={(e) => {
                  setEmail(e.currentTarget.value);
                  setDisabled(false);
                }}
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
                disabled={disabled}
                button="Withdraw"
              ></Form>
            </>
          ) : (
            <>
              <h6>{status}</h6>
              <br />
              <h6>
                Check{" "}
                <a id="link1" href="#/Balance">
                  balance
                </a>
              </h6>
              <Form
                type1="hidden"
                type2="hidden"
                type3="hidden"
                onClick={clearForm}
                button="Withdraw Again"
              ></Form>
            </>
          )
        }
      ></Card>
    </div>
  );
}
