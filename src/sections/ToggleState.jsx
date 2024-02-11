import Background, {Description, Title, Wrapper} from "../components/Background";
import menuData from "../data/menuData";
import NavigationButton from "../components/NavigationButton";
import styled from "styled-components";
import {useState} from "react";

function ToggleState() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper>
            <Background/>
            <Title>Toggle a State </Title>
            <Description>Toggle a menu open and closed, and back again</Description>
            <NavigationButton onClick={() => setIsOpen(!isOpen)}
                              title="Menu"
                              image="https://designcode.io/images/icons/courses.svg" />
            {isOpen && (
                <NavigationWrapper>
                    {menuData.map((menu, index) => {
                        return (
                            <NavigationButton key={index}
                                              title={menu.title}
                                              image={menu.image}/>
                        );
                    })}
            </NavigationWrapper>
            )}
        </Wrapper>
    );
}

const NavigationWrapper = styled.div`
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    padding: 20px 20px;
`;

export default ToggleState;