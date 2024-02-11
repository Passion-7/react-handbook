import styled from "styled-components";
import {useState} from "react";

const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}


function SignInForm() {
    const email = useInput("");
    const password = useInput("");

    const submit = (event) => {
        event.preventDefault();
        console.log("email: ", email.value);
        console.log("password: ", password.value);
    }

    return (
        <FormWrapper onSubmit={submit}>
            <Title>Sign In</Title>
            <Input placeholder="Email" {...email} />
            <Input placeholder="Password" type="password" value={password.value} onChange={password.onChange} />
            <Button type="submit">Sign In</Button>
        </FormWrapper>
    );
}

const FormWrapper = styled.form`
    display: grid;
    justify-content: center;
    gap: 20px;
    padding-bottom: 50px;
`

const Title = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    text-align: center;
`

const Input = styled.input`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    padding: 10px 20px;
    background-blend-mode: overlay;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.4);

    :focus {
        outline: none;
    }
`;

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export default SignInForm;