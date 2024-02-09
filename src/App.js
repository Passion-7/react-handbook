import './App.css';
import styled from "styled-components";

import backgroundImage from "./images/background.png";

function App() {
    return (
        <Wrapper>
            <Background src={backgroundImage} alt="background" />
            <Title>Hello React</Title>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding-top: 150px;
    margin: 0 auto;
    display: grid;
    justify-items: center;
`

export const Title = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    color: white;
    line-height: 48px;
    font-size: 40px;
    text-align: center;
`

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
    top: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
`

export default App;
