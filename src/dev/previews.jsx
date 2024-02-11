import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import UseState from "../sections/UseState";
import Background from "../components/Background";
import UseEffect from "../sections/UseEffect";
import UseRef from "../sections/UseRef";
import LoadLocalData from "../sections/LoadLocalData";
import NavigationButton from "../components/NavigationButton";
import FetchFromApi from "../sections/FetchFromApi";
import ToggleState from "../sections/ToggleState";
import SignInForm from "../components/SignInForm";
import UseInput from "../sections/UseInput";
import UseScrollPosition from "../sections/UseScrollPosition";
import UseOnScreen from "../sections/UseOnScreen";
import UseContext from "../sections/UseContext";
import Fragment from "../sections/Fragment";
import LazyLoad from "../sections/LazyLoad";
import ReactSuspense from "../sections/ReactSuspense";
import {AdviceCard} from "../components/AdviceCard";

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
            <ComponentPreview path="/FetchFromApi">
                <FetchFromApi/>
            </ComponentPreview>
            <ComponentPreview path="/ToggleState">
                <ToggleState/>
            </ComponentPreview>
            <ComponentPreview path="/SignInForm">
                <SignInForm/>
            </ComponentPreview>
            <ComponentPreview path="/UseInput">
                <UseInput/>
            </ComponentPreview>
            <ComponentPreview path="/UseScrollPosition">
                <UseScrollPosition/>
            </ComponentPreview>
            <ComponentPreview path="/UseOnScreen">
                <UseOnScreen/>
            </ComponentPreview>
            <ComponentPreview path="/UseContext">
                <UseContext/>
            </ComponentPreview>
            <ComponentPreview path="/Fragment">
                <Fragment/>
            </ComponentPreview>
            <ComponentPreview path="/LazyLoad">
                <LazyLoad/>
            </ComponentPreview>
            <ComponentPreview path="/ReactSuspense">
                <ReactSuspense/>
            </ComponentPreview>
            <ComponentPreview path="/AdviceCard">
                <AdviceCard/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;