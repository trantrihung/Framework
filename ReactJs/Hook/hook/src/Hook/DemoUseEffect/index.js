import React, { useState, useEffect } from "react";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoUseEffect(props) {
  let [number, setNumber] = useState(1);
  const handleIncrease = () => {
    setNumber(number + 1);
  };

  //là hàm chạy sau khi render || sẽ chạy cả 2 didmount và didupdate trong mọi trường hợp
  // useEffect(() => {
  //   console.log("didmount");
  // });

  // cách viết thay thế cho componentdidmout cho []
  useEffect(() => {
    console.log("didmount");
  }, []);

  // cách viết thay thế cho componentdidupdate
  useEffect(() => {
    console.log("didupdate");
    return () => {
      console.log("willmount");
    };
  }, [number]);

  console.log("render");
  return (
    <div>
      <div className="card">
        <img
          style={{ width: 250, height: 250 }}
          className="card-img-top"
          src="https://cdn141.picsart.com/326064119132201.jpg"
          alt="abc"
        />

        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">{number} tim</p>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleIncrease}>
        Tang
      </button>

      {number === 1 ? <ChildUseEffect /> : ""}
    </div>
  );
}
