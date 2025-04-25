import React, { useState } from "react";
import Login from "./login/login";
import Register from "./register/register";

const Auth = () => {
  const [login, setLogin] = useState("login");
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="flex  items-center gap-5 text-2xl font-medium">
        <h1
          onClick={() => setLogin("login")}
          className={`cursor-pointer ${login === "login" && "text-[red]"}`}
        >
          Login
        </h1>
        <span className="w-1 h-5 bg-[red]"></span>
        <h2
          onClick={() => setLogin("register")}
          className={`cursor-pointer ${login !== "login" && "text-[red]"}`}
        >
          Register
        </h2>
      </div>
      {/* <Login/> 
      <Register/> */}
      {login === "login" ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;
