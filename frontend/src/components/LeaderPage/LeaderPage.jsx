import React from "react";
import { observer } from "mobx-react";
import LeaderInfo from "./LeaderInfo/LeaderInfo";
import Branches from "./Branches/Branches";

const LeaderPage = observer(() => {

    return (
        <>
           <LeaderInfo/>
            <Branches/>
        </>
    );
});

export default LeaderPage;
