import React from "react";
import LoginForm from "../components/Login/LoginForm";
import loginImg from "../assets/images/login.jpg";

function Login() {
  // const backgroundImage = {
  //   backgroundImage: `url(${loginImg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center bg-blue-700 bg-opacity-50`}
      // style={backgroundImage}
    >
      <div className="w-6/12 px-10 flex justify-center items-center max-sm:w-full">
        <LoginForm />
      </div>

      <div className="w-6/12 flex justify-center items-center max-sm:hidden">
        <img src={loginImg} alt="" className="h-screen" />
      </div>
    </div>
  );
}

export default Login;
