function Deposit() {
  const ctx = React.useContext(UserContext);
  let amt = JSON.stringify(ctx.users[0]["balance"]);
  const [disabled, setDisabled] = React.useState(true);
  const [deposit, setDeposit] = React.useState("");
  const [total, setTotal] = React.useState(amt);
  const [show, setShow] = React.useState(true);
  const handleChange = (event) => {
    setDeposit(event.target.value);
    event.preventDefault();
    setDisabled(false);
    if (/^\d+$/.test(event.target.value) == true) {
      setDeposit(event.target.value);
      event.preventDefault();
    } else {
      setDeposit("");
      return alert("Enter positive Number");
    }
  };

  const handleSubmit = (event) => {
    setTotal(Number(total) + Number(deposit));

    event.preventDefault();
    setShow(false);
    ctx.users.push({ balance: Number(deposit) + Number(total) });
  };

  function clearForm() {
    setDeposit("");
    setShow(true);
    setDisabled(true);
  }
  return (
    <div className="card-container">
      <Card
        bgcolor={show ? "secondary" : "success"}
        txtcolor="white"
        header="Deposit"
        body={
          show ? (
            <>
              <h2>Balance is ${total}</h2>
              <Form
                label1="Deposit"
                type1="input"
                id1="amount"
                placeholder="Enter amount.."
                value1={deposit}
                onChange1={handleChange}
                type2="hidden"
                type3="hidden"
                button="Deposit"
                onClick={handleSubmit}
                disabled={disabled}
              ></Form>
            </>
          ) : (
            <>
              <h6>Success! You have deposited ${deposit}.</h6>
              <h2>Balance is {total}</h2>
              <Form
                type1="hidden"
                type2="hidden"
                type3="hidden"
                onClick={clearForm}
                button="Deposit Again"
              ></Form>
            </>
          )
        }
      ></Card>
    </div>
  );
}
