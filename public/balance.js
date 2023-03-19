function Balance() {
  // const [withdraw, setWithdraw] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  const handleSubmit = () => {
    console.log(email);
    fetch(`/account/balance/${email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          // const data = JSON.parse(text);
          console.log(text);
          setStatus(text);
        } catch (err) {
          console.log("err:", text);
          setStatus(text);
        }
      });
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
                onClick={handleSubmit}
                button="Check Balance"
              ></Form>
            </>
          ) : (
            <>
              <h6>{status}</h6>
              <br />
              {/* <h6>
                Check{" "}
                <a id="link1" href="#Balance">
                  balance
                </a>
              </h6> */}
            </>
          )
        }
      ></Card>
      <button>
        <a id="link1" href="#Deposit">
          Deposit &nbsp; &#8811;
        </a>
      </button>
      <br />
      <button>
        <a id="link1" href="#Withdraw">
          Withdraw &nbsp; &#8811;
        </a>
      </button>
    </div>
  );
}
