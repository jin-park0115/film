import React from "react";
import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";

const Navbar = () => {
  const location = useLocation();


  return (
    <>
      {location.pathname !== '/login' && (
        <div>
          <Logo>
          </Logo>
          <Link to='/login'>
            <Login>로그인</Login>
          </Link>
          <Search type="text" placeholder="검색"/>
        </div>
      )}
      <div>
        <Rating>상영 종료된 영화</Rating>
        <Review>리뷰</Review>
      </div>
    </>
    
  )
};

const Logo = styled.h2`
  cursor: pointer;
  width: 37px;
  height: 37px;
`

const Login = styled.div`
  margin-top: 24px;
  width: 178px;
  height: 60px;
  color: #fff;
  border-top: 1px solid #0e0e0e;
  border-bottom: 1px solid #0e0e0e;
  line-height: 60px;
  padding-left: 20px;
  cursor: pointer;
`

const Search = styled.input`
  margin-top: 42px;
  width: 178px;
  height: 40px;
  background-color: #0e0e0e;
  border: none;
  font-size: 1rem;
  border-radius: 10px;
  padding-left: 20px;
  color: #fff;
  &:focus{
    outline: none;
    box-shadow: 0px 0px 4px #fff;
  }
`
const Rating = styled.div`
  width: 178px;
  height: 60px;
  background-color: #0e0e0e;
  color: #fff;
  line-height: 60px;
  border-radius: 10px;
  text-align: center;
`
const Review = styled.div`
  width: 178px;
  height: 60px;
  background-color: #0e0e0e;
  color: #fff;
  line-height: 60px;
  border-radius: 10px;
  margin-top: 24px;
  text-align: center;
`

export default Navbar