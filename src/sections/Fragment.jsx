import Background, {Title, Wrapper} from "../components/Background";
import styled from "styled-components";
import React from "react";

function Fragment() {
    return (
        <Wrapper>
            <Background />
            <Title>Fragments</Title>
            <Dashboard />
        </Wrapper>
    );
}

const Dashboard = () => {
    return (
        <React.Fragment>
            <Graph />
            <Inspector />
        </React.Fragment>
    )
}

const Graph = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    height: 200px;
    margin: 20px;
`;

const Inspector = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    height: 200px;
    margin: 20px;
`;

export default Fragment;