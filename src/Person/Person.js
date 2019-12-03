import React from "react";
import styled from 'styled-components';
// import "./Person.css";

const StyledDiv = styled.div`
  border: 1px solid #eee;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 400px;
  text-align: center;
  margin: auto;
  display: block;

  @media (min-width: 500px) {
    width: 450px;
  }
`

const person = props => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />    
    </StyledDiv>
  );
};

export default person;
