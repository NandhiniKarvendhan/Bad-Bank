import { Card, Form } from "./Context.js";
import { useState, useEffect } from "react";

export function AllData() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        setData(JSON.stringify(data));
        console.log(data);
      });
  }, []);

  return (
    <div className="card-container">
      <Card bgcolor="info" header="All Data in Store" body={data} />
    </div>
  );
}
