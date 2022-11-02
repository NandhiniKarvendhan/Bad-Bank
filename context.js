const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

// function Card(props) {
//   function classes() {
//     const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
//     const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
//     return "card mb-3 " + bg + txt;
//   }

//   return (
//     <div className={classes()} style={{ maxWidth: "18rem" }}>
//       <div className="card-header">{props.header}</div>
//       <div className="card-body">
//         {props.title && <h5 className="card-title">{props.title}</h5>}
//         {props.text && <p className="card-text">{props.text}</p>}
//         {props.body}
//         {props.status && <div id="createStatus">{props.status}</div>}
//       </div>
//     </div>
//   );
// }

function BankForm(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "form mb-3 " + bg + txt;
  }

  return (
    <form className={classes()}>
      <div className="form-header">{props.header}</div>
      <hr />
      <div className="mb-3">
        <label for="exampleInputName1" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="exampleInputName1" />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-outline-light">
        Submit
      </button>
    </form>
  );
}
