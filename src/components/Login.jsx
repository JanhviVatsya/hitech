import React, { useEffect } from "react";
import styled from "styled-components";
import { signInAPI } from "../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.user && navigate("/home");
  }, [props.user]);

  return (
    <Container>
      <Nav>
        <a href="/index.html">
          <img src="/images/hcl.png" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to our HCLTech Community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <ButtonWrapper>
            <LoginButton onClick={() => props.signIn()}>Login</LoginButton>
          </ButtonWrapper>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
  
`;

const Nav = styled.nav`
  max-width: 100%;
  margin: auto;
  padding: 12px 0 50px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    max-width: 150px;
    height: auto;
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
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
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    width: 700px;
    height: 670px;
    position: absolute;
    top: 20px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  display: flex;
  flex-direction: column;
  align-items: center; // Center the contents horizontally
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const Input = styled.input`
  height: 56px;
  width: 100%;
  padding: 0 20px;
  border-radius: 28px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 20px;

  &:focus {
    outline: none;
    border-color: #0a66c2;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%; // Ensure the wrapper takes full width to align the button properly
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  max-width: 450px; // Increase this value to make the button wider
  border-radius: 28px;
  background-color: #0a66c2;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition-duration: 167ms;
  margin-top: 20px; // Add margin-top to create spacing below the input fields

  &:hover {
    background-color: #084b9a;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signInAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
