import Background, {Description, Title, Wrapper} from "../components/Background";
import SignInForm from "../components/SignInForm";

const UseInput = () => {
    return (
        <Wrapper>
            <Background />
            <Title>useInput Hook</Title>
            <Description>Create a hook to get input field's value</Description>
            <SignInForm />
        </Wrapper>
    );
};

export default UseInput;