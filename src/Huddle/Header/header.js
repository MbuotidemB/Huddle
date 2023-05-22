import React from "react"
import Styled from "styled-components"
import {Link} from "react-router-dom";

const Header = () =>{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <img src="/huddlelogo.jpg" alt=""/>
                </Left>
                <Right>
                   <Mid>
                       <Navs to="/">Home</Navs>
                       <Navs to="/About">About</Navs>
                       <Navs to="/Contact">Contact</Navs>
                       <Navs to="/Services">Services</Navs>
                   </Mid>
                   <Button>Try it Free </Button>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Header;

const Container = Styled.div`
   height:10vh;
   width:100vw;
   background-color:powderblue;  
   display:flex;
   justify-content:center;
`;
const Wrapper = Styled.div`
  height:10vh;
  width:94%;
  background-color:powderblue; 
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:fixed;
`;
const Left = Styled.div`
  height:70%;
  width:10%;
//   background-color:grey;
  display:flex;
  justify-content:flex-start;
  align-items:center;

  img{
    height:20px;
    width:100px;
  }
`;
const Right = Styled.div`
  height:90%;
  width:55%;
//   background-color:brown;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const Mid = Styled.div`
  height:80%;
  width:60%;
//   background-color:blue;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const Navs = Styled(Link)`
   font-size:20px;
//    font-weight:bold;
   text-decoration:none;
   color:black;

   :hover{
    transform: scale(1.07)
    /* text-decoration: 2px underline grey; */
   }
`;
const Button = Styled.div`
//   height:50px;
//   width:100px;
  border-radius:1rem;
  padding:8px 25px;
  background-color:gainsboro;
  display:flex;
  justify-content:center;
  align-items:center;

  :hover{
    background-color:magenta;
    transition:all 2;
    cursor:pointer;
  }
`;