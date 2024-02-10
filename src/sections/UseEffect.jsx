import Background, {Button, Title, Wrapper} from "../components/Background";
import {useEffect, useState} from "react";

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count]);

    return (
        <Wrapper>
            <Background />
            <Title>useEffect Hook</Title>
            <Button onClick={() => {setCount(count + 1)}}>You click {count} times</Button>
        </Wrapper>

    )
}

export default UseEffect;