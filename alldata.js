function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <div className="card-container">
      <Card
        bgcolor="info"
        header="All Data in Store"
        body={<dl>{JSON.stringify(ctx.users)}</dl>}
      />
    </div>
  );
}
