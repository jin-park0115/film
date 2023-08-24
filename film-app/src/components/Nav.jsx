import React from "react";
import { css, styled } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { logoutUser } from "../store/auth";

const Nav = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(()=> {
      dispatch(logoutUser());
      alert('로그아웃되었습니다.');
      localStorage.removeItem('user')
    }).catch((error) => {
      console.error('로그아웃 중 오류 발생:' ,error);
    })
  }

  return( 
    <MenuBar>
      <Menu>
        <Link to='/'>
          <LogoImgWrap>
            <LogoImg src="/img/flim_1.svg" alt="logo img"/>
          </LogoImgWrap>
        </Link>
        <Link to='/search'>
          <Search>검색</Search>
        </Link>
        {user ? (
          <LoggedInUser onClick={handleLogout}>{user.email}님</LoggedInUser>
        ) : (
          <Link to='/login'>
            <Login>로그인</Login>
          </Link>
        )}
      </Menu>
    </MenuBar>
  )
};

export default Nav

const theSame = css`
  font-weight: 700;
  cursor: pointer;
  color: white;
`
const LogoImgWrap = styled.div`
  width: 28px;
  height: 34px;
`

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`

const MenuBar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #292727;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;
  flex-wrap: wrap;
`
const Menu = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Search = styled.div`
  ${theSame}
`
const Login = styled.div`
  ${theSame}
`

const LoggedInUser = styled.div`
  ${theSame}
`