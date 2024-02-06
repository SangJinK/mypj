import React, { useState } from'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 실제로는 여기에서 서버로 로그인 요청을 보내고 결과를 처리합니다.
    // 임시로 간단하게 사용자명과 비밀번호가 일치하는 경우 로그인 성공으로 가정합니다.
    if (username === 'user' && password === 'password') {
      console.log('success');
    } else {
      console.log('fail');
    }
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
      <button onClick={handleLogin}>로그인</button>
    </div>
  );

}
export default Login;