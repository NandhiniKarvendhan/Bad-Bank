import { Card, Form } from "../components/context/Context.js";
import { useState } from "react";
import { useAuth } from "../config/firebase-config";

export function Balance() {
  // const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const currentUser = useAuth();
  const email = currentUser?.email;
  const handleSubmit = () => {
    console.log(email);
    fetch(`/account/balance/${email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          // const data = JSON.parse(text);
          console.log(text);
          setStatus(text);
        } catch (err) {
          console.log("err:", text);
          setStatus(text);
        }
      });
    setShow(false);
  };
  return (
    <div className="card-container">
      <Card
        bgcolor="success"
        txtcolor="white"
        header="Balance"
        body={
          show ? (
            <>
              {/* <Form
                type1="hidden"
                type2="hidden"
                type3="hidden"
                onClick={handleSubmit}
                button="Check Balance"
              ></Form> */}
              {handleSubmit}
            </>
          ) : (
            <>
              <h6>{status}</h6>
              <br />
              {/* <h6>
                      Check{" "}
                      <a id="link1" href="#Balance">
                        balance
                      </a>
                    </h6> */}
            </>
          )
        }
      ></Card>
      {/* <button>
        <a id="link1" href="#/Deposit">
          Deposit &nbsp; &#8811;
        </a>
      </button>
      <br /> <br />
      <button>
        <a id="link1" href="#/Withdraw">
          Withdraw &nbsp; &#8811;
        </a>
      </button> */}
    </div>
  );
}
