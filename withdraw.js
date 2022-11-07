function Withdraw() {
  return (
    <div className="card-container">
      <Card
        bgcolor="dark"
        txtcolor="white"
        header="Withdraw"
        title="Balance is zero"
        body={
          <>
            <br />
            Withdraw
            <br />
            <input
              type="number"
              id="amount"
              className="form-control"
              placeholder="Enter amount.."
            ></input>
            <br />
            <button type="submit" className="btn btn-outline-light">
              Withdraw
            </button>
          </>
        }
      ></Card>
    </div>
  );
}
