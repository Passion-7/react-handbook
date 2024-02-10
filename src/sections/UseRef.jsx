import Background, {Button, Title, Wrapper} from "../components/Background";
import {useEffect, useRef} from "react";

function UseRef() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref) {
            ref.current.click()
        }
    });
    return (
        <Wrapper>
            <Background/>
            <Title>useRef Hook</Title>
            <Button ref={ref} onClick={() => {alert("You Clicked!")}}>Click Me</Button>
        </Wrapper>
    );
}

export default UseRef;