function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [disabled, setDisabled] = React.useState(true);
  const [status, setStatus] = React.useState("");

  function handleSubmit() {
    console.log(email, password);
    if (!password) {
      alert("please enter password");
      setDisabled(false);
    }
    fetch(`/account/login/${email}/${password}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);

          console.log("JSON:", data);
          setStatus(" ");
        } catch (err) {
          console.log("err:", text);
          setStatus(text);
        }
      });
    setShow(false);
  }
  return (
    <div className="card-container">
      <Card
        bgcolor={show ? "primary" : "success"}
        header="Login to your account"
        body={
          show ? (
            <>
              <Form
                label1="Email"
                type1="input"
                id1="email"
                placeholder1="Enter email.."
                onChange1={(e) => {
                  setEmail(e.currentTarget.value);
                  setDisabled(false);
                }}
                label2="Password"
                type2="input"
                id2="password"
                placeholder2="Enter password.."
                onChange2={(e) => {
                  setPassword(e.currentTarget.value);
                  setDisabled(false);
                }}
                type3="hidden"
                button="Login"
                onClick={handleSubmit}
                disabled={disabled}
              ></Form>
              <br />
              <h6>
                Don't have an account?
                <a id="link" href="#CreateAccount">
                  Sign up
                </a>
              </h6>
            </>
          ) : (
            <>
              <h5>{status}</h5>
            </>
          )
        }
      ></Card>
    </div>
  );
}
