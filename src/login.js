import React, { useState } from'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const LoginInfo = () => {
    const userInfo = {
      username : username,
      password : password,
    }
    fetch("http://localhost:8080/login",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(userInfo)
    })
      .then((res) => {return res.text();})
      .then((data) => {
         console.log(data);
       })
      }
  
  return (
    <div>
      <label>
        사용자명:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        비밀번호:
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={LoginInfo}>로그인</button>
    </div>
  );

}
export default Login;