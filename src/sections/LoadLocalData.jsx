import Background, {Title, Wrapper} from "../components/Background";
import styled from "styled-components";
import NavigationButton from "../components/NavigationButton";
import menuData from "../data/menuData";

const LoadLocalData = () => {
    return (
        <Wrapper>
            <Background />
            <Title>Load Local JSON Data</Title>
            <ButtonWrapper>
                {menuData.map((data, index) => {
                    return (
                        <NavigationButton key={index} title={data.title} image={data.image} />
                    )
                })}
            </ButtonWrapper>
        </Wrapper>

    );
};

const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;
`

export default LoadLocalData;