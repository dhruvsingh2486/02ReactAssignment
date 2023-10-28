import React from "react";
import { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);

  function incrementHandle() {
    setCounter(Counter + 1);
  }

  function decrementHandle() {
    setCounter(Counter - 1);
  }

  return (
    <div
      style={{
        borderRadius: "25px",
        width: "1140px",
        height: "450px",
        backgroundColor: "#fbe5e9",
        textAlign: "center",
        paddingTop: "7%",
      }}
    >
      <div
        style={{
          width: "588px",
          height: "320px",
          backgroundColor: "#f95b5b",
          marginLeft: "25%",
          borderRadius: "20px",
          paddingTop: "80px",
          color: "white",
          fontSize: "35px",
        }}
      >
        <h2>{Counter}</h2>
        <button
          onClick={incrementHandle}
          style={{
            height: "80px",
            width: "200px",
            marginRight: "30px",
            fontSize: "30px",
          }}
        >
          Increment
        </button>
        <button
          onClick={decrementHandle}
          style={{ fontSize: "30px", height: "80px", width: "200px" }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
