function Spa() {
  return (
    <HashRouter>
      <h1>Welcome to BadBank</h1>
      <Nav></Nav>
      <hr />
      <UserContext.Provider
        value={{
          users: [{ name: "Nandhu", email: "nandhu@gmail.com", balance: 100 }],
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
