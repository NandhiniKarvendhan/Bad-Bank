import { Card } from "../components/context/Context.js";
import bank from "./bank.png";
export function Home() {
  return (
    <div className="card-container">
      <Card
        className="custom-card"
        bgcolor="light"
        txtcolor="danger"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={<img src={bank} className="img-fluid" alt="Responsive image" />}
      />
    </div>
  );
}
