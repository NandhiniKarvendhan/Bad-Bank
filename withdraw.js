function Withdraw() {
  const ctx = React.useContext(UserContext);
  let amt = JSON.stringify(ctx.users[0]["balance"]);
  const [disabled, setDisabled] = React.useState(true);
  const [withdraw, setWithdraw] = React.useState("");
  const [total, setTotal] = React.useState(amt);
  const [show, setShow] = React.useState(true);

  const handleChange = (event) => {
    setWithdraw(event.target.value);
    event.preventDefault();
    if (Number(event.target.value) > Number(total)) {
      setWithdraw("");
      setDisabled(true);
      return alert("Balance is low");
    } else {
      setDisabled(false);
    }
    if (/^\d+$/.test(event.target.value) == true) {
      setWithdraw(event.target.value);
      event.preventDefault();
    } else {
      setWithdraw("");
      return alert("Enter positive Number");
    }
  };

  const handleSubmit = (event) => {
    {
      setTotal(Number(total) - Number(withdraw));
      console.log(Number(withdraw));
      console.log(Number(total));

      event.preventDefault();
      setShow(false);
    }
    ctx.users.push({ balance: Number(total) - Number(withdraw) });
  };

  function clearForm() {
    setWithdraw("");
    setShow(true);
    setDisabled(true);
  }
  return (
    <div className="card-container">
      <Card
        bgcolor={show ? "secondary" : "success"}
        txtcolor="white"
        header="Withdraw"
        body={
          show ? (
            <>
              <h3>Balance is ${total}</h3>
              <Form
                label1="Withdraw"
                type1="input"
                id1="amount"
                type2="hidden"
                type3="hidden"
                placeholder1="Enter amount.."
                value1={withdraw}
                onChange1={handleChange}
                onClick={handleSubmit}
                disabled={disabled}
                button="Withdraw"
              ></Form>
            </>
          ) : (
            <>
              <h6>
                Success! Withdraw was processed. <br /> You have withdrawn $
                {withdraw}.
              </h6>
              <h2>Balance is ${total}.</h2>
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
