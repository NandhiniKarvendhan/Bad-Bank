export function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

export function Form(props) {
  return (
    <form>
      <label>{props.label1}</label>
      <input
        type={props.type1}
        id={props.id1}
        className="form-control"
        placeholder={props.placeholder1}
        value={props.value1}
        onChange={props.onChange1}
      ></input>

      <label>{props.label2}</label>
      <input
        type={props.type2}
        id={props.id2}
        className="form-control"
        placeholder={props.placeholder2}
        value={props.value2}
        onChange={props.onChange2}
      ></input>

      <label>{props.label3}</label>
      <input
        type={props.type3}
        id={props.id3}
        className="form-control"
        placeholder={props.placeholder3}
        value={props.value3}
        onChange={props.onChange3}
      ></input>
      <br />
      <button
        type="submit"
        className="btn btn-light"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.button}
      </button>
    </form>
  );
}
