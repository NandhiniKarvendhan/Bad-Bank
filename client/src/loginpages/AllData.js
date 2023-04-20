import { Card } from "../components/context/Context.js";
import { useState } from "react";
import { useAuth } from "../config/firebase-config";
import { deleteUser } from "firebase/auth";

export function AllData() {
  const [data, setData] = useState("");
  const [disabled, setDisabled] = useState(false);
  const currentUser = useAuth();
  const email = currentUser?.email;

  fetch(`/account/${email}`)
    .then((response) => response.json())
    .then((data) => {
      setData(JSON.stringify(data));
    });

  const handleSubmit = () => {
    deleteUser(currentUser)
      .then(() => {
        setData(`Your account is deleted`);
        setDisabled(true);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email);
    fetch(`/account/remove/${email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          // const data = JSON.parse(text);
          console.log(text);
          // setStatus(text);
        } catch (err) {
          console.log("err:", text);
          // setStatus(text);
        }
      });
    // setShow(false);
  };

  return (
    <div className="card-container">
      <Card
        bgcolor="info"
        header="All Data in Store"
        body={
          <>
            {data}
            <br />
            <button
              className="btn btn-light"
              onClick={handleSubmit}
              disabled={disabled}
            >
              Delete your account
            </button>
          </>
        }
      />
    </div>
  );
}
