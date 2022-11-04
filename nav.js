function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      {/* <a class="navbar-brand" href="#">
        BadBank
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> */}

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item home">
            <a class="nav-link" href="#">
              Bad Bank
            </a>
            <div className="page-description">Home Page</div>
          </li>
          <li class="nav-item create-account">
            <a class="nav-link" href="#/CreateAccount">
              Create Account
            </a>
            <div className="page-description">Create new account</div>
          </li>
          <li class="nav-item login">
            <a class="nav-link" href="#/CreateAccount">
              Login
            </a>
            <div className="page-description">login to your account</div>
          </li>
          <li class="nav-item deposit">
            <a class="nav-link" href="#/Deposit">
              Deposit
            </a>
            <div className="page-description">Deposit yourmoney</div>
          </li>

          <li class="nav-item withdraw">
            <a class="nav-link" href="#/Withdraw">
              Withdraw
            </a>
            <div className="page-description">Withdraw your money</div>
          </li>
          <li class="nav-item all-data">
            <a class="nav-link" href="#/AllData">
              AllData
            </a>
            <div className="page-description">Data can be tracked here</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
