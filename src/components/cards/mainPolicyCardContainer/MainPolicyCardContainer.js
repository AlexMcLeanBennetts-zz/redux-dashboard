import moment from "moment";

import { useGetPolicyDataQuery } from "store/api/apiSlice";


import MainPolicyCard from "./MainPolicyCard";

function MainPolicyCardContainer() {

    const { data: policyData } = useGetPolicyDataQuery();
    if (policyData) {
        let formattedStartDate = moment(policyData.policyDetails.start).format('Do MMM YY');
        let formattedEndDate = moment(policyData.policyDetails.end).format('Do MMM YY');

        let carMakeAndModelTextFormatted = (policyData.car.make && policyData.car.model) ?
            `${policyData.car.make} ${policyData.car.model}` :
            'Error: No car details found';

        let NCBTextFormatted = policyData.policyDetails.NCB > 0 ?
            `${policyData.policyDetails?.NCB} years` :
            '0';

        let policyNumberFormatted = policyData?.policyNumber ?
            policyData.policyNumber :
            'Error: no policy number found';




        return (
            <MainPolicyCard
                carDetails={policyData.car}
                policyDetails={policyData.policyDetails}
                carMakeAndModelTextFormatted={carMakeAndModelTextFormatted}
                NCBTextFormatted={NCBTextFormatted}
                policyNumberFormatted={policyNumberFormatted}
                formattedStartDate={formattedStartDate}
                formattedEndDate={formattedEndDate}
            />
        )
    }
}

export default MainPolicyCardContainer