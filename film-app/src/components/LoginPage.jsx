import { useEffect, useState } from "react"
import { styled } from "styled-components"
const User = {
  email: 'test@gmail.com',
  pw: 'Test1234@!~'
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailVaild] = useState(false);
  const [pwVaild, setpwVaild] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^(([^<>\.,;:\s@"]+(\.[^<>()\[\].,;:\s@"] +)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if(regex.test(email)) {
      setEmailVaild(true);
    } else{
      setEmailVaild(false);
    };
  }

  const handlePw = (e) => {
    setPw(e.target.value)
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(regex.test(pw)){
      setpwVaild(true)
    }else{
      setpwVaild(false)
    };
  }

  const onClickconfirmButton = () => {
    if(email === User.email && pw === User.pw){
      alert('로그인에 성공했습니다.')
    } else{
      alert('등록되지 않은 회원입니다.')
    }
  }

  useEffect(() => {
    if(emailValid && pwVaild){
      setNotAllow(false);
      return;
    }
    setNotAllow(true);

  },[emailValid,pwVaild])

  return(
    <Page>
      <TitleWrap>
        이메일과 비밀번호를
        <br/>
        입력해주세요.
      </TitleWrap>
      <LoginWrap>
        <InputTitle>이메일 주소</InputTitle>
        <InputWrap>
          <Input placeholder="이메일을 입력해주세요." value={email} onChange={handleEmail}/>
        </InputWrap>
        <ErrorMsg>
          {
            !emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )
          }
        </ErrorMsg>
        <InputTitle style={{marginTop: "26px"}}>비밀번호</InputTitle>
        <InputWrap>
          <Input placeholder="비밀번호 6자리 이상" type="password" value={pw} onChange={handlePw}/>
        </InputWrap>
        <ErrorMsg>
          {
            !pwVaild && pw.length > 0 && (
              <div>비밀번호를 올바르게 입력해주세요.</div>
              )
            }
        </ErrorMsg>
      </LoginWrap>

      <Button onClick={onClickconfirmButton} disabled={notAllow}>확인</Button>
    </Page>
  )
}

export default LoginPage

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background-color: #cdcdcd;
  height: 100%;
  width: 40%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
`

const TitleWrap = styled.div`
  margin-top: 82px;
  font-weight: 700;
  font-size: 24px;
`

const LoginWrap = styled.div`
  flex: 1;
` 

const InputTitle = styled.div`
  font-size: 12px;
  margin-top: 14px;
  font-weight: 700;
`

const InputWrap = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 12px;
  padding: 16px;
  &:focus-within{
    border: 1px solid #0e0e0e;
    border-radius: 5px;
  }
`

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 17px;
  &::placeholder{
    color: #dbdbdb;
  }
`

const ErrorMsg = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: red;
`

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #0e0e0e;
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
  &:disabled{
    background-color: #dbdbdb;
    color: #0e0e0e;
  }
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background-color: #353333;
  }
`
