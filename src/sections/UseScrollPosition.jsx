import Background, {Description, Title, Wrapper} from "../components/Background";
import {useEffect, useState} from "react";

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener("scroll", updatePosition);

        return () => window.removeEventListener("scroll", updatePosition);
    })

    return scrollPosition;
}



const UseScrollPosition = () => {
    const position = useScrollPosition();
    console.log(position);

    return (
        <Wrapper>
            <Background />
            <Title>useScrollPosition Hook</Title>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales sapien in ligula rhoncus, eget imperdiet est condimentum. Nulla sed purus nisl. Donec ac luctus diam, eu finibus ipsum. Suspendisse potenti. Proin varius, sapien a aliquet placerat, velit magna aliquam risus, vitae maximus est lacus et arcu. Donec a vulputate massa. Curabitur justo tortor, dignissim ut diam quis, blandit consectetur diam. Nam ut ullamcorper magna, at vehicula ante. Sed in ornare lorem. Nullam volutpat consequat arcu, at laoreet arcu iaculis a.

                Praesent purus nibh, dapibus nec sollicitudin at, ultricies egestas lorem. Proin dapibus odio varius ultrices posuere. Maecenas non nisl at orci lobortis luctus eget nec tortor. Pellentesque id justo lacus. Nam volutpat cursus elit in pellentesque. Aenean sit amet nisl facilisis, maximus dui vitae, vehicula mi. Integer porta elit enim, ac volutpat quam maximus id. Vivamus viverra ac lectus at accumsan. Nam semper elit eleifend, porttitor leo nec, tempus eros. Vivamus at erat non augue molestie venenatis nec non augue. Sed laoreet ultrices venenatis.

                Vivamus eu elit iaculis, bibendum libero eu, accumsan tellus. Suspendisse commodo ex vel placerat lobortis. Praesent id auctor turpis. Maecenas at felis laoreet, cursus lorem ac, sagittis risus. Fusce sed sapien vitae neque pretium tincidunt et vel est. Phasellus tempus dui non tellus pulvinar, eu tristique est ullamcorper. Nullam viverra facilisis lacinia. Donec in ante justo. Suspendisse potenti.

                Donec in purus urna. Proin non consequat nulla. Nullam consequat, augue fringilla porta interdum, nisi elit condimentum justo, sit amet fermentum nisi mi at sem. Morbi ac augue libero. Sed ornare ligula vitae tortor efficitur interdum ut sit amet nisi. Nam sit amet iaculis ex. Ut aliquam blandit porttitor. Vivamus eget justo malesuada, viverra metus a, facilisis eros. Nunc euismod urna augue, in posuere massa venenatis non. Etiam mi risus, maximus nec nisi at, lacinia commodo justo. Aenean egestas, lacus convallis pharetra dignissim, ipsum felis fringilla sem, eget laoreet ex velit et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer suscipit urna nec quam rhoncus, id hendrerit quam scelerisque. Etiam pretium bibendum ex a auctor. Fusce rutrum enim vel eros bibendum commodo.

                Sed imperdiet sed felis id placerat. Nam vitae convallis nisi, tristique rhoncus nisi. Sed a nunc eu massa fermentum pharetra. Aliquam at aliquet sapien, nec faucibus arcu. Etiam commodo purus neque, a mollis dolor pretium id. Phasellus a eros aliquam, aliquam dolor nec, lobortis eros. Nullam sodales dictum felis et gravida. Fusce sagittis commodo feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Suspendisse pulvinar, lectus sed sollicitudin sodales, turpis est elementum est, sit amet finibus diam urna euismod odio. Quisque aliquet varius suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </Description>

        </Wrapper>
    );
};

export default UseScrollPosition;