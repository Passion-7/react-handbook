import Background, {Title, Wrapper} from "../components/Background";
import React, {createContext, useContext, useState} from "react";
import styled from "styled-components";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const initialState = {
    theme: themes.light,
    setTheme: () => {
    }
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(themes.light);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

function UseContext() {
    return (
        <ThemeProvider>
            <Wrapper>
                <Background/>
                <Title>useContext Hook</Title>
                <Button />
                <Subtitle />
            </Wrapper>
        </ThemeProvider>

    );
}

function Button() {
    const { theme, setTheme} = useTheme();
    const StyledButton = styled.button`
      background: ${(props) => props.background};
      color: ${(props) => props.color};
      padding: 12px;
      border: none;
      border-radius: 30px;
      font-weight: bold;
      font-family: Segoe UI, sans-serif;
      display: grid;
      justify-self: center;
      cursor: pointer;
    `;

    return (
        <StyledButton
            color={theme.foreground}
            background={theme.background}
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
        >
        I am styled by theme context!
        </StyledButton>
    )
}

function Subtitle() {
    const { theme } = useTheme();

    const MySubtitle = styled.p`
      color: black;
      font-weight: bold;
      font-family: Segoe UI, sans-serif;
    `;

    return (
        <MySubtitle>
            My current theme is {theme.background === "#eeeeee" ? "light" : "dark"}
        </MySubtitle>
    );
}

export default UseContext;