import styled from "styled-components";

import backgroundImage from "../images/background.png";

function Background() {
    return (
        <BackgroundImg src={backgroundImage} alt="background"/>
    );
}

export const Wrapper = styled.div`
    padding-top: 150px;
    margin: 0 auto;
    display: grid;
    justify-items: center;
`;

export const Title = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    color: white;
    line-height: 48px;
    font-size: 40px;
    text-align: center;
`;

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

const BackgroundImg = styled.img`
    top: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
`;

export const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    
    :focus {
        outline: none;
    }
`

export default Background;