import Background, {Description, Title, Wrapper} from "../components/Background";
import React, {Suspense, useEffect, useState} from "react";

const AdviceCard = React.lazy(() => import("../components/AdviceCard"));

const ReactSuspense  = () => {
    return (
        <Wrapper>
            <Background />
            <Title>React Suspense</Title>
            <Suspense fallback={<p>Loading advice...</p>}>
                <AdviceCard />
            </Suspense>
        </Wrapper>
    );
};

export default ReactSuspense;