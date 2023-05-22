import React from "react"
import Styled from "styled-components"

const Card = (props) =>{
    return( 
        <Container>
            <Wrapper align={props.align}>
                <Left>
                    <H1>{props.h1}</H1>
                    <H2>{props.h2}</H2>
                </Left>
                <Right>
                    <img src={props.img} alt=""/>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Card;

const Container = Styled.div`
  height:90vh;
  width:100vw;
//   background-color:aqua;
  /* box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Wrapper = Styled.div`
  height:100%;
  width:90%;
//   background-color:magenta;
 
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:${({align}) =>align}
`;
const Left = Styled.div`
  height:40%;
  width:45%;
//   background-color:purple;
  margin-top: 30px;
`;
const H1 = Styled.div`
   font-size:40px;
   font-weight:bold;
   font-family:poppins;
`;
const H2 = Styled.div`
   margin-top:20px;
   font-size:20px;
`;
const Right = Styled.div`
   height:90%;
   width:50%;
      background-color:pink;

  img{
      height:100%;
      width:100%;
    }
`;