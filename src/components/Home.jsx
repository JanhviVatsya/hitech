import React from "react";
import styled from "styled-components";
import Leftside from "./Leftside"; // Adjust the path as necessary
import Main from "./Main"; // Adjust the path as necessary
import Rightside from "./Rightside"; // Adjust the path as necessary

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hi-Tech 👋- </a>
        </h5>
        <p>
        Empower your team and accelerate career growth within your company effortlessly.
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  background-image: url("/images/back.png");
  background-size: auto;

`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-decoration: underline;
    display: inline-block;
  }

  h5, p {
    display: inline;
    font-size: 14px;
  }

  h5 {
    color: #fdfeff;
    margin-right: 5px;
    a {
      font-weight: 700;
      text-decoration: none; // Remove underline from link
    }
  }

  p {
    color: #000306;
    font-weight: 500;
    /* text-decoration: underline; */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
    span {
      flex-direction: column;
    }
    h5, p {
      text-align: center;
    }
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
