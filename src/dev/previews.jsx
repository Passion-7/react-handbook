import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import UseState from "../sections/UseState";
import Background from "../components/Background";
import UseEffect from "../sections/UseEffect";
import UseRef from "../sections/UseRef";
import LoadLocalData from "../sections/LoadLocalData";
import NavigationButton from "../components/NavigationButton";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/UseState">
                <UseState/>
            </ComponentPreview>
            <ComponentPreview path="/Background">
                <Background/>
            </ComponentPreview>
            <ComponentPreview path="/UseEffect">
                <UseEffect/>
            </ComponentPreview>
            <ComponentPreview path="/UseRef">
                <UseRef/>
            </ComponentPreview>
            <ComponentPreview path="/LoadLocalData">
                <LoadLocalData/>
            </ComponentPreview>
            <ComponentPreview path="/NavigationButton">
                <NavigationButton/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;