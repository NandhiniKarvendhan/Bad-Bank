function Spa() {
  return (
    <HashRouter>
      <Nav></Nav>
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Nandhu",
              email: "nandhu@gmail.com",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <Route path="/" exact component={Home}></Route>
        <Route path="/CreateAccount" component={CreateAccount}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Deposit" component={Deposit}></Route>
        <Route path="/Withdraw" component={Withdraw}></Route>
        <Route path="/Balance" component={Balance}></Route>
        <Route path="/AllData" component={AllData}></Route>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
