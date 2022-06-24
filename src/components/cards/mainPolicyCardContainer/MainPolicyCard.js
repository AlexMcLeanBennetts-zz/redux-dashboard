import CardContainer from "components/utilities/CardPresentational/CardContainer"
import RouterButton from "components/buttons/RouterButton"
import PolicyStatus from "components/utilities/PolicyStatus"
import SmallH2 from "components/titles/Smallh2"
import CardFlexContainer from "components/utilities/CardPresentational/CardFlexContainer"
import BoldH3 from "components/titles/BoldH3"

function MainPolicyCard({
    carDetails,
    policyDetails,
    formattedStartDate,
    formattedEndDate,
    carMakeAndModelTextFormatted,
    NCBTextFormatted,
    policyNumberFormatted
}) {
    return (
        <CardContainer>
            <div className="w-full bg-fuchsia-900 p-4 flex justify-between items-center">
                <div className="icon icon-account w-20 rounded-full inline-block relative bg-fuchsia-600"></div>
                <div className="w-7/12">
                    <p className="font-sans text-xl font-bold text-white leading-6">
                        Save money when you make changes online in Your Account
                    </p>
                </div>
                <div>
                    <RouterButton
                        text='Make A Change'
                        path='/amend-policy-details'
                        styles='white'
                    />
                </div>
            </div>
            <CardFlexContainer>
                <div className='w-6/12'>
                    <div className="flex items-center">
                        <div className='w-28 h-28 inline-block relative rounded bg-gray-300'>
                            <div className='icon icon-car'></div>
                        </div>
                        <div className="px-8">
                            <SmallH2>Your Car</SmallH2>
                            <p className='mb-3'>{carMakeAndModelTextFormatted}</p>
                            <p className="bg-amber-300 py-2 px-4 rounded">{carDetails.registration}</p>
                        </div>
                    </div>

                    <RouterButton
                        text="View policy details"
                        styles='bg-slate-200 hover:bg-slate-300 text-fuchsia-900 rounded py-3 px-5 mx-auto mt-10'
                        path='/policy'
                    />
                </div>
                <div className='w-6/12'>
                    <div>
                        <div>
                            <PolicyStatus start={policyDetails?.start} end={policyDetails?.end} />
                            <p data-testid='policyNumber' className='mb-3'><span className='font-bold'>Policy Number:</span> {policyNumberFormatted}</p>
                        </div>
                        <div className="mb-3">
                            <BoldH3>Policy start and end date</BoldH3>
                            <p>{formattedStartDate} - {formattedEndDate}</p>
                        </div>
                        <div>
                            <BoldH3>No Claims Discount</BoldH3>
                            <p data-testid='NCB-text'>{NCBTextFormatted}</p>
                        </div>
                    </div>
                </div>
            </CardFlexContainer>
        </CardContainer>
    )
}

export default MainPolicyCard