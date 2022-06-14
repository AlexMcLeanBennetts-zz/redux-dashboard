import { useGetPolicyDataQuery } from "store/api/apiSlice";
import MainTitle from "components/titles/mainTitle";
import PageContainer from "components/layout/PageContainer";
import MainPolicyCardContainer from "components/cards/mainPolicyCardContainer/MainPolicyCardContainer";


function Main() {

    const { data: policyData } = useGetPolicyDataQuery();
    const firstName = policyData?.policyHolder.name ? policyData.policyHolder.name.split(' ')[0] : "Guest";

    return (
        <PageContainer>
            <MainTitle name={firstName} />
            <MainPolicyCardContainer />
        </PageContainer>
    )
}

export default Main;