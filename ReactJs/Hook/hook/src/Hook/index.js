import React, { useState } from "react";

export default function Hook(props) {
  // (1): this.state = {};
  // (2): setState(newState);
  let [state, setState] = useState({ like: 0 });
  console.log(state.like);
  const handleLike = () => {
    setState({
      like: state.like + 1,
    });
  };

  return (
    <div>
      <div className="card text-left">
        <img
          className="card-img-top"
          style={{ height: "250px", width: "250px" }}
          src="https://cdn141.picsart.com/326064119132201.jpg"
          alt="hinhanh"
        />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p style={{ color: "red" }}>{state.like} tim </p>
        </div>
      </div>
      <button className="btn btn-danger" onClick={handleLike}>
        tang Tim
      </button>
    </div>
  );
}
