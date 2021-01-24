import React, { useState, useEffect } from "react";

export default function DemoHook() {
  const [count, setCount] = useState(0);
  const [agree, setAgree] = useState(false);

  const increaseCount = () => {
    if (agree) {
      setCount(count + 1);
    }
  };
  useEffect(() => {
    console.log("useEffect run!!!");
  });

  useEffect(() => {
    console.log("useEffect Didmount 1!");
  }, []);

  const agreeChange = () => {
    setAgree(true);
  };

  useEffect(() => {
    console.log("Didmount change");
  }, [agree]);

  return (
    <div>
      <h1>Demo hook</h1>
      <button className="btn btn-success" onClick={increaseCount}>
        Increase count
      </button>
      <button className="btn btn-success" onClick={agreeChange}>
        Agree Increase count
      </button>
      <h1 className="display-4">Count: {count}</h1>
    </div>
  );
}
