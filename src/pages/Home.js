import { Card } from "./Context.js";
import bank from "./bank.png";
export function Home() {
  return (
    <div className="card-container">
      <Card
        bgcolor="light"
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={<img src={bank} className="img-fluid" alt="Responsive image" />}
      />
    </div>
  );
}
