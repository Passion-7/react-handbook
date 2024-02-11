import Background, {Description, Title, Wrapper} from "../components/Background";
import {useEffect, useState} from "react";
import styled from "styled-components";

const FetchFromApi = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();

                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData();
    })

    return (
        <Wrapper>
            <Background />
            <Title>Fetch Data from an Api</Title>
            <Paragraph>{advice}</Paragraph>
        </Wrapper>
    );
};

const Paragraph = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
`

export default FetchFromApi;