import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import PageNavigator from "./routes/PageNavigator";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <PageNavigator/>
    </BrowserRouter>
  );
}

const Container = styled.div`

`
export default App;
