function AllData() {
  const ctx = React.useContext(UserContext);
  let allUser = ctx.users;

  return (
    <div className="card-container">
      <Card
        bgcolor="info"
        header="All Data in Store"
        body={<dl>{JSON.stringify(allUser)}</dl>}
      />
      <Card bgcolor="info" body={<dl>{JSON.stringify(allUser)}</dl>} />
    </div>
  );
}
