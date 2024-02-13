import React from 'react';
import {PlannerProvider} from "../../../providers/PlannerProvider/PlannerProvider";
import PlannerView from "./PlannerView";

const Planner = () => {
    return (
        <PlannerProvider>
            <PlannerView/>
        </PlannerProvider>
    );
};

export default Planner;