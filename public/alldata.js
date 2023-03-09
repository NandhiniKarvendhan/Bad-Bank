function AllData() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        setData(JSON.stringify(data));
        console.log(data);
      });
  }, []);

  return (
    <div className="card-container">
      <Card bgcolor="info" header="All Data in Store" body={data} />
    </div>
  );
}
