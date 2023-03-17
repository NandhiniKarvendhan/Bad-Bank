function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
    setDisabled(true);
  }

  function validate(field, label) {
    if (!field) {
      setStatus(alert("Error " + label));
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field == password && field.length < 8) {
      setStatus(alert("password must have 8 characters"));
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();
    setShow(false);
  }

  return (
    <div className="card-container">
      <Card
        bgcolor={show ? "info" : "success"}
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              <Form
                label1="Name"
                type1="input"
                id1="name"
                placeholder1="Enter name.."
                value1={name}
                onChange1={(e) => {
                  setName(e.currentTarget.value);
                  setDisabled(false);
                }}
                label2="Email address"
                type2="email"
                id2="email"
                placeholder2="Enter email.."
                value2={email}
                onChange2={(e) => {
                  setEmail(e.currentTarget.value);
                  setDisabled(false);
                }}
                label3="Password"
                type3="input"
                id3="password"
                placeholder3="Enter password.."
                value3={password}
                onChange3={(e) => {
                  setPassword(e.currentTarget.value);
                  setDisabled(false);
                }}
                onClick={handleCreate}
                disabled={disabled}
                button="Create Account"
              ></Form>
            </>
          ) : (
            <>
              <h5>Success! You have created an account.</h5>
              <Form
                type1="hidden"
                type2="hidden"
                type3="hidden"
                onClick={clearForm}
                button="Add another account"
              ></Form>
            </>
          )
        }
      ></Card>
      <h6>
        Already have an account?{" "}
        <a id="link2" href="#Login">
          Log in
        </a>
      </h6>
    </div>
  );
}
