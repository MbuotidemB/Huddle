import React from "react"
import Styled from "styled-components"

const Hero = () =>{
    return(
        <Container>
            <Wrapper>
               <Left>
                  <H1>Build The Community<br/>
                      Your Fans Would Love
                  </H1>
                  <H3>
                      Huddle re-imagines the way we build communities.You have<br/>
                      a voice,but so does your audience.Create connections with<br/>
                      your users as you engage in genuine discussion.
                  </H3>
                  <Button>Get Started For Free</Button>
               </Left>
               <Right>
                   <img src="/dpagehuddle.jpg" alt=""/>
               </Right>
            </Wrapper>
        </Container>
    )
}

export default Hero;

const Container = Styled.div`
  height:90vh;
  width:100vw;
  /* background-color:peru;  */
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Wrapper = Styled.div`
   height:100%;
   width:90%;
   /* background-color:powderblue;   */
   display:flex;
   justify-content:space-between;
   align-items:center;
`;
const Left = Styled.div`
   height:60%;
   width:45%;
//    background-color:purple;
`;
const H1 = Styled.div`
   font-size:40px;
   font-weight:bold;
   font-family:poppins;
`;
const H3 = Styled.div`
   margin-top:40px;
   font-size:20px;
`;
const Button = Styled.button`
   margin-top:40px;
   background-color:violet;
   color:white;
   font-weight:bold;
   font-size:15px;
   padding: 15px 30px;
   border-radius:1rem;
   border:none;
`;
const Right = Styled.div`
   height:90%;
   width:50%;
//    background-color:pink;

   img{
    height:100%;
    width:100%;
   }
`;