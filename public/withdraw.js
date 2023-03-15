function Withdraw() {
  const [disabled, setDisabled] = React.useState(true);
  const [withdraw, setWithdraw] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(true);

  // const handleChange = (event) => {
  //   setWithdraw(event.target.value);
  //   event.preventDefault();
  //   if (Number(event.target.value) > Number(total)) {
  //     setWithdraw("");
  //     setDisabled(true);
  //     return alert("Balance is low");
  //   } else {
  //     setDisabled(false);
  //   }
  //   if (/^\d+$/.test(event.target.value) == true) {
  //     setWithdraw(event.target.value);
  //     event.preventDefault();
  //   } else {
  //     setWithdraw("");
  //     return alert("Enter positive Number");
  //   }
  // };

  const handleSubmit = (event) => {
    {
      // setTotal(Number(total) - Number(withdraw));
      console.log(Number(withdraw));
      // console.log(Number(total));

      event.preventDefault();
      setShow(false);
    }
    // ctx.users.push({ balance: Number(total) - Number(withdraw) });
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
                // onChange2={handleChange}
                type3="hidden"
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
              {/* <h2>Balance is ${total}.</h2> */}
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
