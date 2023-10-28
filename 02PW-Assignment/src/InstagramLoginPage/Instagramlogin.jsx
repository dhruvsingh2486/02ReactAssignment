import React, { useState } from "react";



function Instagram({setIsLogin}) {
 
  return (





    <div>




<br></br>



      <div id="LoginIsActive"
        style={{
          border: "1px solid black",
          width: "370px",
          margin: "auto",
          marginTop: "50px",
          textAlign: "center",
          height:"460px"
        }}
      >
        <img src="../images/first.png" alt="Instagram logo" />
        <div>
          <input
            style={{
              width: "300px",
              height: "30px",
              padding: "10px",
              color: "graytext",
              fontWeight: "500",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "grey 1px solid",
              outline:"none"
            }}
            placeholder="Phone number, username, or email"
          />
          <br />
          <input
            style={{
              width: "300px",
              height: "30px",
              padding: "10px",
              color: "graytext",
              fontWeight: "500",
              borderRadius: "4px",
              border: "grey 1px solid",
              outline:"none"
            }}
            placeholder="Password"
          />
        </div>
        <br />
        <button
       
          style={{
            fontWeight: "700",
            width: "325px",
            height: "40px",
            backgroundColor: "rgb(62, 154, 240)",
            borderRadius: "12px",
            border: "none",
            color: "white",
          }}
          onClick={() => setIsLogin(false)}
        >
          Log In
        </button>

        <h4 style={{fontFamily:"sans-serif", marginTop:"40px"}}>Don't have account? <span style={{color:"rgb(62, 154, 240)"}}>Sign up</span></h4>
      </div>
    </div>
  );
}

export default Instagram;
