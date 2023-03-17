function Balance() {
  // const [withdraw, setWithdraw] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  const handleSubmit = () => {
    console.log(email);
    setShow(false);
  };
  return (
    <div className="card-container">
      <Card
        bgcolor="success"
        txtcolor="white"
        header="Balance"
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
                }}
                type2="hidden"
                type3="hidden"
                nClick={handleSubmit}
                button="Check Balance"
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

      <a id="link2" href="#Deposit">
        Deposit
      </a>
      <br />
      <a id="link2" href="#Withdraw">
        Withdraw
      </a>
    </div>
  );
}
