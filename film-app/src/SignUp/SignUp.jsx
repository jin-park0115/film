import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const join = async () => {
    setErrorMsg('');

    try{
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password)     
      console.log(user)
      setEmail('')
      setPassword('')
    } catch (error) {
      switch (error.code){
        case 'auth/weak-password':
          setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
          break;
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다');
          break;
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입되어 있는 계정입니다');
          break;
      }
    }
  }
  return(
    <div>
      <h2>회원가입</h2>
      <input
        type="email"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={join}>회원가입하기</button>
      {errorMsg && <p style={{ color: 'red'}}>{errorMsg}</p>}
    </div>
  )
}

export default SignUp