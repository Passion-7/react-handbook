import Background, {Title, Wrapper} from "../components/Background";
import styled from "styled-components";
import NavigationButton from "../components/NavigationButton";

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
    grid-template-columns: repeat(4, auto );
`

const  menuData = [
    {
        title: "Courses",
        image: "https://designcode.io/images/icons/courses.svg"
    },
    {
        title: "Tutorials",
        image: "https://designcode.io/images/icons/tutorials.svg"
    },
    {
        title: "Livestreams",
        image: "https://designcode.io/images/icons/livestreams.svg"
    },
    {
        title: "Pricing",
        image: "https://designcode.io/images/icons/pricing.svg"
    }
]

export default LoadLocalData;