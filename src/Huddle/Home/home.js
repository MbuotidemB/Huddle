import React from "react"
// import Header from "../Header/header"
import Hero from "../Hero/hero"
import Styled from "styled-components"
import Card from  "../Card/card"
import Footer from "../Footer/footer"

const Home = (props) =>{
    return(
        
        <Container>
            {/* <Header/> */}
            <Hero/>
            <Card align="row" img="/2standinghuddle.jpg" h1="Grow Together" h2="Generate meaningful discussion with your audience
                        and build a strong,loyal community.Think of the insightful conversation you miss out on with a feedback form"/>
            <Card align="row-reverse" img="/3sittedhuddle.jpg" h1="Flowing Conversations" h2="You wouldn't paiginate a conversation in real life,
                        so why do it online?Our threads have just-in-time loading for a more natural flow."/>
            <Card align="row" img="3peoplehuddle.jpg" h1="Your Users" h2="It takes no time at all to integrate Huddle with your app's
                        authentication solution.This means,once signed in to 
                        your app,your users can start chatting immediately."/>
            <Footer/>
        </Container>
        

    )
}

export default Home;

const Container = Styled.div`
   height:100vh;
   width:100vw;
   background-image:url(/bg1huddle.jpg);
   background-color:powderblue;
`;
