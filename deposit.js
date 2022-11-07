function Deposit() {
  const [amount, setAmount] = React.useState(0);
  const [deposit, setDeposit] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const handleChange = (event) => {
    setDeposit(event.target.value);
    event.preventDefault();

    // isNaN() method for number returns false, for negative numbers is used
    if (/^\d+$/.test(event.target.value) == true) {
      setDeposit(event.target.value);
      event.preventDefault();
    } else {
      setDeposit("");
      return alert("Enter positive Number");
    }
  };

  const handleSubmit = (event) => {
    setTotal(total + amount + Number(deposit));

    setAmount(total);
    event.preventDefault();
    setShow(false);
  };

  function clearForm() {
    setAmount(0);
    setDeposit("");
    setShow(true);
  }
  return (
    <div className="card-container">
      <Card
        bgcolor="secondary"
        txtcolor="white"
        header="Deposit"
        body={
          show ? (
            <>
              <h2>Balance is {total}</h2>
              <br />
              Deposit
              <br />
              <input
                type="input"
                id="amount"
                className="form-control"
                placeholder="Enter amount.."
                value={deposit}
                onChange={handleChange}
              ></input>
              <br />
              <button
                type="submit"
                className="btn btn-outline-light"
                onClick={handleSubmit}
              >
                Deposit
              </button>{" "}
            </>
          ) : (
            <>
              <h5>Success! You have deposited {deposit}</h5>
              <h2>Balance is {total}</h2>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Deposit Again
              </button>
            </>
          )
        }
      ></Card>
    </div>
  );
}
