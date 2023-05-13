import React from "react";
import NavigationBar from "../../components/navBar";
import "./login.css";
import sendDatas from "./sendDatas";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const onClick = () => {
    if (email.length > 0 && password.length > 0) {    
  sendDatas(email, password);
    } else {
        alert("Please fill in the fields" + email.length + password.length);
    }
  };
  return (
    <>
      <NavigationBar />
      <div className="login">
        <span className="login_span">
          <h1>Login</h1>
          <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={onClick}>Log in</button>
        </span>
      </div>
    </>
  );
}
export default Login;
