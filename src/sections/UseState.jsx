import Background, {Button, Title, Wrapper} from "../components/Background";
import {useState} from "react";


function UseState() {
    const [count, setCount] = useState(0);

    return (
        <Wrapper>
            <Background title="Test"/>
            <Title>useState Hook</Title>
            <Button onClick={() => setCount(count + 1)}>You click {count} times</Button>
        </Wrapper>
    );
}

export default UseState;