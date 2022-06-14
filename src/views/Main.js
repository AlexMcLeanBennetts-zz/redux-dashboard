import { useGetPolicyDataQuery } from "store/api/apiSlice";
import MainTitle from "components/titles/mainTitle";
import PageContainer from "components/layout/PageContainer";
import MainPolicyCard from "components/cards/MainPolicyCard";


function Main() {

    const { data: policyData } = useGetPolicyDataQuery();
    const firstName = policyData?.policyHolder.name ? policyData.policyHolder.name.split(' ')[0] : "Guest";

    return (
        <PageContainer>
            <MainTitle name={firstName} />
            <MainPolicyCard />
        </PageContainer>
    )
}

export default Main;