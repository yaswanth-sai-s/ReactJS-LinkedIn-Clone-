import styled from "styled-components";
import LeftSide from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";



const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5><a>Hello Webviewer Welcome to </a></h5>
                <p>Linkedin-Clone</p>
            </Section>
            <Layout>
                <LeftSide />
                <Main/>
                <Rightside/>
            </Layout>
        </Container>
    )
}

const Container = styled.div`

    
    max-width: 98%;
    @media (min-width:767px){
        margin: 0px 200px;
    }
   
    padding-top: 65px;
   

`;

const Content = styled.div`
    max-width:1128px ;
    margin-left: auto;
    margin-right: auto;

`;


const Section = styled.section`
    min-height: 50px;
    box-sizing: content-box;
    text-align: center;
    display: flex;
    justify-content: center;
    h5{
        color: #0a66c2;
        font-size: 14px;
        a{
            font-weight: 500;
        }
    }

    p{
        font-size: 14px;
        color:#434649;
        font-weight: 500;

        @media (min-width:767px){
            padding-left: 5px;
    }
        
    }

    @media (max-width:767px){
        flex-direction: column;
        padding: 0 5px;
    }

`;


const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
    column-gap: 25px;
    row-gap:25px;
    grid-template-rows: auto;
    
    @media (max-width:767px){
        display: flex;
        flex-direction: column;
    }


`;


export default Home;