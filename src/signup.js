import React ,{useState} from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


      const SignupInfo = () => {
      const userInfo = {
        username : username,
        password : password,
      }
      fetch("http://localhost:8080/signup",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(userInfo)
      }).then((response)=>{
        if(response.ok===true){
            alert("회원가입이 완료되었습니다.");
        }else{
            alert("회원가입이 실패되었습니다.");
        }
      })
      }
      return(
        <div>
            <label>
              사용자명:
              <input
                type="text"
       
                onChange={(e) => setUsername(e.target.value)}
              />
              비밀번호:
              <input
              type="password"
     
              onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={SignupInfo}>회원가입</button>
        </div>
      )



}
export default Signup;