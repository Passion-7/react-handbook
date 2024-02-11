import Background, {Title, Wrapper} from "../components/Background";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

function lazyLoad() {
    return (
        <Wrapper>
            <Background />
            <Title>Lazy Loading</Title>
            <LazyLoad offset={200} height={200}>
                <Image src="https://images.ctfassets.net/ooa29xqb8tix/2KiUooJBmI26N6u5gr2rlm/e2bb070640fe2778e1a58d160335cbe7/React_Hooks_handbook_800x600_cover_new.png?w=400&q=50" />
            </LazyLoad>
            <LazyLoad offset={100} height={200}>
                <Image src="https://images.ctfassets.net/ooa29xqb8tix/2KiUooJBmI26N6u5gr2rlm/e2bb070640fe2778e1a58d160335cbe7/React_Hooks_handbook_800x600_cover_new.png?w=400&q=50" />
            </LazyLoad>
            <LazyLoad offset={-100} height={200}>
                <Image src="https://images.ctfassets.net/ooa29xqb8tix/2KiUooJBmI26N6u5gr2rlm/e2bb070640fe2778e1a58d160335cbe7/React_Hooks_handbook_800x600_cover_new.png?w=400&q=50" />
            </LazyLoad>
        </Wrapper>
    );
}

const Image = styled.img`
    margin: 20px;
    height: 200px;
`

export default lazyLoad;