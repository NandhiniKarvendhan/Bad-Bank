function Deposit() {
  // let amt = JSON.stringify(ctx.users[0]["balance"]);
  const [email, setEmail] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  // const [deposit, setDeposit] = React.useState("");
  const [amount, setAmount] = React.useState();
  const [show, setShow] = React.useState(true);
  // const handleChange = (event) => {
  //   setDeposit(event.target.value);
  //   event.preventDefault();
  //   setDisabled(false);
  //   if (/^\d+$/.test(event.target.value) == true) {
  //     setDeposit(event.target.value);
  //     event.preventDefault();
  //   } else {
  //     setDeposit("");
  //     return alert("Enter positive Number");
  //   }
  // };

  const handleSubmit = (event) => {
    // setTotal(Number(total) + Number(deposit));
    fetch(`/account/update/${email}/${amount}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);

          console.log("JSON:", data);
          // setStatus(" ");
        } catch (err) {
          console.log("err:", text);
          // setStatus(text);
        }
      });
    event.preventDefault();
    setShow(false);
    // ctx.users.push({ balance: Number(deposit) + Number(total) });
  };

  function clearForm() {
    setEmail("");

    setShow(true);
    setDisabled(true);
  }
  return (
    <div className="card-container">
      <Card
        bgcolor={show ? "warning" : "success"}
        txtcolor="white"
        header="Deposit"
        body={
          show ? (
            <>
              {/* <h2>Balance is ${total}</h2> */}
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
                label2="Deposit"
                type2="input"
                id2="amount"
                placeholder2="Enter amount.."
                value2={amount}
                onChange2={(e) => {
                  setAmount(e.currentTarget.value);
                }}
                type3="hidden"
                button="Deposit"
                onClick={handleSubmit}
                disabled={disabled}
              ></Form>
            </>
          ) : (
            <>
              <h6>Success! You have deposited ${amount}.</h6>
              {/* <h2>Balance is {total}</h2> */}
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
