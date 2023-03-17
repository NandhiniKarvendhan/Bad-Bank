function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item home">
              <a className="nav-link" href="#">
                Bad Bank
              </a>
              <div className="page-description">Home Page</div>
            </li>
            <li className="nav-item create-account">
              <a className="nav-link" href="#/CreateAccount">
                Create Account
              </a>
              <div className="page-description">Create an account</div>
            </li>
            <li className="nav-item login">
              <a className="nav-link" href="#/Login">
                Login
              </a>
              <div className="page-description">login to your account</div>
            </li>
            <li className="nav-item deposit">
              <a className="nav-link" href="#/Deposit">
                Deposit
              </a>
              <div className="page-description">Deposit your money</div>
            </li>

            <li className="nav-item withdraw">
              <a className="nav-link" href="#/Withdraw">
                Withdraw
              </a>
              <div className="page-description">Withdraw your money</div>
            </li>
            <li className="nav-item balance">
              <a className="nav-link" href="#/Balance">
                Balance
              </a>
              <div className="page-description">Check your balance</div>
            </li>
            <li className="nav-item all-data">
              <a className="nav-link" href="#/AllData">
                AllData
              </a>
              <div className="page-description">Data can be tracked here</div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
