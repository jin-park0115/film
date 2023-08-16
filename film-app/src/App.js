import React from 'react';
import styled from 'styled-components'
import NavBar from './components/Navbar';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUp from './SignUp/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav>
          <NavBar/>
        </Nav>
        <Routes>
          <Route path='/' exact={'/'} element={<Main/>} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
        <SignUp/>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.body`
  width: 100%;
  height: 100vh;
  background-color: #3e3c3c;
  position: relative;
`

const Nav = styled.nav`
  width: 228px;
  height: 100vh;
  background-color: #393838;
  box-shadow: 1px 0px 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export default App;
