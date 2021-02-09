import React, { useState, useEffect } from "react";

export default function ChildUseEffect() {
  let [number, setNumber] = useState(1);
  console.log("render Child component");

  useEffect(() => {
    console.log("didupdate childcomponent");
    return () => {
      console.log("willunmount childcomponent");
    };
  }, [number]);
  useEffect(() => {
    console.log("didmout childcomponent");
  }, []);

  return (
    <div>
      <textarea></textarea>
      <button className="btn btn-success d-block">gui</button>
    </div>
  );
}
