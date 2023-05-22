import React from "react"
import Styled from "styled-components"
import {BiPhoneCall} from "react-icons/bi"
import {CgMail} from "react-icons/cg"
import {SiFacebook} from "react-icons/si"
import {AiFillTwitterCircle} from "react-icons/ai"
import {RiInstagramLine, RiMessage2Line} from "react-icons/ri"
import {GrLocation} from "react-icons/gr"


const Footer = () =>{
    return(
        <Body>
            <Container1>
                <Wrapper1>
                    <Box>
                        <Text>Ready To Build Your Community?</Text>
                        <Button>Get Started For Free</Button>
                    </Box>
                </Wrapper1>
            </Container1>
            <Container2>
                <Wrapper2>
                    <Huddle>
                       <Logo>
                         <RiMessage2Line style={{color:"white",height:30, width:40}}/>
                          <H1>Huddle</H1>
                        </Logo>
                        <Locate>
                            <GrLocation/>
                            <div>why is my lorem txt not working here,is it that it
                                doesnt work in react or i am not doing it right?
                            </div>
                        </Locate>
                        <Tel>
                            <BiPhoneCall/>
                            <div>243-8032763275</div>
                        </Tel>
                        <Mail>
                            <CgMail/>
                            <p>faithuko@huddle.com</p>
                        </Mail>
                    </Huddle>
                    <About>
                      <p>About Us</p>
                      <p>What We Do</p>
                      <p>FAQ</p>
                    </About>
                    <Care>
                      <p>Career</p>
                      <p>Blog</p>
                      <p>Contact Us</p>
                    </Care>
                    <Icons>
                      <Div>
                        <SiFacebook />
                        <AiFillTwitterCircle/>
                        <RiInstagramLine />
                      </Div>
                      <small>Copyright 2018 Huddle.All rights reserved.</small>
                    </Icons>
                </Wrapper2>
            </Container2>
        </Body>
    )
}

export default Footer;

const Body = Styled.div`
   height:100vh;
   width:100%;
//    background-color:green;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`;
const Container1 = Styled.div`
     height:50%;
     width:100%;
    //  background-color:yellow;
     display:flex;
     align-items:center;
     justify-content:center; 
 `;
 const Wrapper1 =Styled.div`
   height:200px;
   width:550px;
   background-color:gainsboro;
   display:flex;
   align-items:center;
   justify-content:center; 
   margin-top:240px;
   position:absolute;
   border-radius:0.5rem;

  //  :hover{
  //   cursor:pointer;
  //   background:linear-gradient(45deg,pink,blue,whitesmoke);
  /* } */
`;
const Box = Styled.div`
  height:120px;
  width:400px;
//   background-color:darkgoldenrod;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center; 
`;
const Text = Styled.div`
   font-size:25px;
   font-weight:bold;
`;
const Button = Styled.button`
   height:50px;
   width:250px;
   background-color:violet;
   color:white;
   display:flex;
   align-items:center;
   justify-content:center; 
   padding:15px 30px;
   font-size:17px;
   border:none;
   border-radius:1.5rem;
   margin-top:20px;
`;
const Container2 = Styled.div`
    height:50%;
    width:100%;
    background-color:darkblue;
    display:flex;
    align-items:center;
    justify-content:center;
 `;
const Wrapper2 = Styled.div`
    height:70%;
    width:90%;
    // background-color:aqua;
    display:flex;
    justify-content:space-between;
    /* position: fixed;  */
`;
const Huddle = Styled.div`
   height:100%;
   width:35%;
//    background-color:violet;
`;
// const Huddle2 = Styled.div`

// img{
// height:30px;
// width:120px;
// }
// `;
const Logo = Styled.div`
  height:50px;
  width:130px;
  /* background-color:coral; */
  display:flex;
  align-items:center;
  justify-content:center;
`;
const H1 = Styled.div`
  color:white;
  font-size:30px;
  font-family: poppins;
`;
const Locate = Styled.div`
  height:90px;
  width:100%;
  /* background-color:aqua;   */
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:white;
`;
const Tel = Styled.div`
  height:40px;
  width:45%;
//   background-color:green; 
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:white;
`;
const Mail = Styled.div`
  height:40px;
  width:45%;
//   background-color:pink; 
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:white;
  `;
const About = Styled.div`
   height:50%;
   width:10%;
  //  background-color:grey;
   margin-top:50px;
   color:white;
`;
const Care = Styled.div`
   height:50%;
   width:10%;
  //  background-color:blueviolet;
   margin-top:50px;
   color:white;
`;
const Icons = Styled.div`
   height:72%;
   width:25%;
   /* background-color:crimson;  */
   margin-top:50px;
   color:white;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
`;
const Div = Styled.div`
  height:30px;
   width:100px;
   /* background-color:magenta; */
   display:flex;
   justify-content:space-between;
`;
