function Login() {
  return (
    <>
      <Card
        bgcolor="primary"
        header="Login to your account"
        body={
          <>
            Email
            <br />
            <input
              type="input"
              id="email"
              className="form-control"
              placeholder="Enter email.."
            ></input>
            <br />
            Password <br />
            <input
              type="input"
              id="password"
              className="form-control"
              placeholder="Enter password.."
            ></input>
            <br />
            <button type="submit" className="btn btn-outline-light">
              Login
            </button>
          </>
        }
      ></Card>
      <h6>
        Don't have an account?<a href="#CreateAccount">Sign up</a>{" "}
      </h6>
    </>
  );
}
