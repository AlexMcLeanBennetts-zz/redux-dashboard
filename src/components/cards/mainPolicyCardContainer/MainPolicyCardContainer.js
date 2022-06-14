import moment from "moment";

import { useGetPolicyDataQuery } from "store/api/apiSlice";


import MainPolicyCard from "./MainPolicyCard";

function MainPolicyCardContainer() {

    const { data: policyData } = useGetPolicyDataQuery();
    const { car, policyDetails } = policyData

    let formattedStartDate = moment(policyDetails.start).format('Do MMM YY');
    let formattedEndDate = moment(policyDetails.end).format('Do MMM YY');

    let carMakeAndModelTextFormatted = (car.make && car.model) ?
        `${car.make} ${car.model}` :
        'Error: No car details found';

    let NCBTextFormatted = policyDetails.NCB > 0 ?
        `${policyDetails?.NCB} years` :
        '0';

    let policyNumberFormatted = policyData.policyNumber ?
        policyData.policyNumber :
        'Error: no policy number found';

    return (
        <MainPolicyCard
            carDetails={car}
            policyDetails={policyDetails}
            carMakeAndModelTextFormatted={carMakeAndModelTextFormatted}
            NCBTextFormatted={NCBTextFormatted}
            policyNumberFormatted={policyNumberFormatted}
            formattedStartDate={formattedStartDate}
            formattedEndDate={formattedEndDate}
        />
    )
}

export default MainPolicyCardContainer