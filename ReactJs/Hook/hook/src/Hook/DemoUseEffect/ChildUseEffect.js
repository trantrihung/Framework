import React, { useState, useEffect, memo } from "react";

function ChildUseEffect(props) {
  // let [number, setNumber] = useState(1);
  console.log("render Child component");

  // useEffect(() => {
  //   console.log("didupdate childcomponent");
  //   return () => {
  //     console.log("willunmount childcomponent");
  //   };
  // }, [number]);
  // useEffect(() => {
  //   console.log("didmout childcomponent");
  // }, []);

  return (
    <div>
      <textarea></textarea>
      <button className="btn btn-success d-block">gui</button>
    </div>
  );
}

export default memo(ChildUseEffect);
