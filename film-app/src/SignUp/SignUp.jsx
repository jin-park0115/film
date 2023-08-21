import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate();


  const join = async () => {
    setErrorMsg('');

    try{
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password)     
      console.log(user)
      alert('회원가입 되었습니다.')
      navigate('/')
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

  const onClickGoLogin = () => {
    navigate('/login')
  }
  return(
    <Page>
      <Title>회원가입</Title>
      <FormWrap>
        <Label>이메일</Label>
        <InputWrap>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="ID"
          />
        </InputWrap>
        <Label>비밀번호</Label>
        <InputWrap>
          <Input
            type="password"
            placeholder="대문자와 특수문자를 사용, 6글자이상"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="PW"
          />
        </InputWrap>
      </FormWrap>
      <Button onClick={join}>회원가입하기</Button>
      <Button onClick={onClickGoLogin}>LogIn</Button>
      {errorMsg && <p style={{ color: 'red'}}>{errorMsg}</p>}
    </Page>
  )
}

const Page = styled.div`
  position: absolute;
  top:10%;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid white;
  box-shadow: 6px -7px 4px 3px #535151;
  height: 100%;
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  color: white;
  margin: 20px 0px 20px 20px;
`
const FormWrap = styled.div`
  flex: 1;
`

const InputWrap = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  padding: 16px;
  &:focus-within{
    border: 1px solid #0e0e0e;
  }
`

const Label = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 24px;
`

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 4px;
`
export default SignUp