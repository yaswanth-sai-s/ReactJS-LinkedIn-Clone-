import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="./images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <Form>
                        <Field>
                            <Texta>
                            <input type="email" name="email" placeholder="Note: No need to enter Credentials" className="emailinput"/>
                            <input type="Password" name="Password" placeholder="Note: Hit Sign in Or Sign in with Google" className='emailinput' />

                            </Texta>
                           <Forget>Forget Password?</Forget>
                            
                            <Fieldb>
                                <h3><Link to="/home" className='Redirect' >Sign in</Link></h3>
                            </Fieldb>
                            
                        </Field>
                    <Google>
                        <img src="./images/google.svg" alt="" />
                        <h3><Link to="/home" className='Redirect1'>Sign in with Google</Link></h3>
                    </Google>
                    </Form>
                    <img className="Test1" src='./images/login-hero.svg' alt="" />

                </Hero>
            </Section>
            <div className='explore'>

            </div>
        </Container>
    );
};

const Container = styled.div`
   background-color: white;
    padding: 0px;
`;



const Nav = styled.nav`
    max-width:1230px;
    margin:auto;
    padding:1px 0 16px;
    display:flex;
    align-items:center;
    position:relative;
    justify-content:space-between;
    flex-wrap: nowrap;
    &> a{
        width: 135px;
        height:34px;
        @media(max-width:767px){
            padding:0 5px;
        }
    }
    @media (max-width:520px) {
      text-align: center;
      
    }

       
`;




const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 8px;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    font-weight: 500;
    width: auto;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;

    }
    
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    padding: 15px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    
    &:hover{
        background-color: rgba(112,181,249,0.15);
        color: #0a66c2;
        text-decoration: none;
    }
   
`;
const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 35px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1228px;
    align-items: center;
    margin: auto;
    @media (max-width:767px) {
        margin: auto;
        min-height: 0px;

    }

`;


const Hero = styled.div`
    width: 100%;
    
    h1{
        padding-bottom: 0;
        width: 45%;
        font-size: 46px;
        color: rgba(148,95,80,255);
        font-weight: 100;
        line-height: 70px;
        @media(max-width:768px){
            text-align: center;
            font-size: 22px;
            width: 100%;
            line-height: 2;
            font-weight: lighter;
        }
       
    }
    .Test1{
        @media (min-width:767px){
            margin-left: 370px;
            margin-bottom: 200px;
            
        }
        
        text-align: right;
        width: 100%;
        height: 560px;
        position:absolute;
        bottom: -2px;
        
        @media (max-width:767px){
            border-radius: 38rem 21rem 3rem 3rem;
            display: block;
            margin-left: auto;
            margin-right: auto;
            align-content: center;
            max-width: 374px;
            max-height: 214px;
            top:230px;
            width: initial;
            position: initial;
            height: initial;
            
        }

        


    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    
    @media (min-width:767px){
        margin-top: 20px;
    }
    @media (max-width:767px){
        margin-top: 20px;
        padding: 2rem;
        margin: auto;
    }
`;


const Google = styled.button`
    z-index:1;
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center ;
    padding: 0%;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    transition-duration: 167ms;
    box-shadow: inset 0 0 0 0.1px #A8A8A8;
    @media (min-width:767px){
        padding-left: 75px;
    }
    

    img{
        padding-right: 10px;
        @media (max-width:767px) {
            padding-left:25%;
            height: 27px;
        }
        
    }

    .Redirect1{
        font-weight: lighter;
        font-family: sans-serif;
        transition-duration: 167ms;
    font-size: 18px;
    color: rgba(0,0,0,0.7);
    text-decoration:none;
        
    }

    h3{
        margin-right: 25%;
        
    }
    
    
    &:hover{
        background-color: rgba(207,207,207,0.25);
        color: rgba(0,0,0,0.85);
        text-decoration: none;
    }
`;


const Field = styled.div`
    
    margin-bottom: 30px;
    .emailinput {
    align-items: center;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
    height: 20px;
    width: 92%;
    border: 1px solid rgba(0,0,0,0.6);
    border-radius: 2px;
    background-color: transparent;
    padding: 11px 12px 10px;
    outline: none;
    margin: 5px;
    
    }

    
    
    
`;

const Fieldb = styled.button`
    
    
    justify-content: center;
    font-weight: lighter;
    color: white;
    background-color: rgba(10,102,194,0.9);
    align-items: center ;
    padding: 0%;
    height: 56px;
    width: 100%;
    border: 0px;
    border-radius: 28px;
    transition-duration: 167ms;
    box-shadow: #0a66c2;
    transition-duration: 167ms;
    font-size: 18px;
    margin-top: 12px;
    padding-top: 0%;

    .Redirect{
        font-weight: 100;
        color: white;
        text-decoration:none;
    }
    
    
    &:hover{
        background-color: rgba(10,102,194,1);
        color: white;
        text-decoration: none;
    }
`;


const Forget = styled.a`
        
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;

        font-weight: 100;
        font-size: 13px;
        text-decoration: none;
        border-radius: 2px;
        color: rgba(0,0,0,0.6);
        transition-duration: 167ms;
        &:hover{
            background-color: rgba(0,0,0,0.08);
            color: rgba(0,0,0,0.9);
            text-decoration: none;

    }
`;
    
const Texta = styled.div`
    margin-bottom: 10px;
`;

export default Login;