function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h1>AllData</h1>;{JSON.stringify(ctx)};
    </>
  );
}

function Home() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h1>Home</h1>
      {JSON.stringify(ctx)};
    </>
  );
}
