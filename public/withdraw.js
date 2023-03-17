function Withdraw() {
  const [disabled, setDisabled] = React.useState(true);
  const [withdraw, setWithdraw] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  const handleSubmit = (event) => {
    {
      // console.log(Number(withdraw));

      fetch(`/account/update/${email}/-${withdraw}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            const data = JSON.parse(text);
            // console.log("JSON:", data);
            // console.log(data["value"]);
            // let balanceLink = <a id='link" href="#Balance"> balance </a>;
            if (withdraw <= data.value["balance"]) {
              setStatus(`Success! You have withdrawn $${withdraw}.`);
            } else {
              setStatus("Withdraw failed! Insufficient balance.");
            }
          } catch (err) {
            console.log("err:", text);
            setStatus("Withdraw failed");
          }
        });
      event.preventDefault();
      setShow(false);
    }
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
                onChange2={(e) => {
                  setWithdraw(e.currentTarget.value);
                  setDisabled(false);
                }}
                type3="hidden"
                onClick={handleSubmit}
                disabled={disabled}
                button="Withdraw"
              ></Form>
            </>
          ) : (
            <>
              <h6>{status}</h6>
              <br />
              <h6>
                Check{" "}
                <a id="link1" href="#Balance">
                  balance
                </a>
              </h6>
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
