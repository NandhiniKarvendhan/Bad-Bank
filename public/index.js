function Spa() {
  return (
    <HashRouter>
      <NavBar />

      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/CreateAccount" component={CreateAccount}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Deposit" component={Deposit}></Route>
        <Route path="/Withdraw" component={Withdraw}></Route>
        <Route path="/AllData" component={AllData}></Route>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
