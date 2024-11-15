import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";



const Logout = () => {

    const navigate= useNavigate()


    
    const handleClick = async () => {
       
          localStorage.clear();
          navigate("/login");
        
      };


    return (
        <Button onClick={handleClick}>
          <BiPowerOff />
        </Button>
      );}
 
export default Logout;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
    transition: 0.3s ease-in-out;
  &:hover{
  background-color:#5C417F;
  }
  svg {
    font-size: 1.2rem;
    color: #ebe7ff;
  }
`;