function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balnce: 100 });
    setShow(false);
  }

  return (
    <>
      <Card
        bgcolor={show ? "secondary" : "success"}
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                id="name"
                className="form-control"
                placeholder="Enter name.."
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              ></input>
              <br />
              Email address
              <br />
              <input
                type="input"
                id="email"
                className="form-control"
                placeholder="Enter email.."
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              ></input>
              <br />
              Password
              <br />
              <input
                type="input"
                id="password"
                className="form-control"
                placeholder="Enter password.."
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              ></input>
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success! You have created an account</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Add another account
              </button>
            </>
          )
        }
      ></Card>
      <h6>
        Already have an account? <a href="#Login">Log in</a>
      </h6>
    </>
  );
}
