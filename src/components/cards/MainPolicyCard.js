import { Link } from "react-router-dom"
import CardContainer from "components/cards/CardComponent"
import RouterButton from "components/buttons/RouterButton"

function MainPolicyCard() {
    return (
        <CardContainer>
            <div className="w-full bg-fuchsia-900 p-4 flex justify-between items-center">
                <div className="icon w-20 rounded-full inline-block relative bg-fuchsia-600"></div>
                <div className="w-7/12">
                    <p className="font-sans text-xl font-bold text-white leading-6">
                        Save money when you make changes online in Your Account
                    </p>
                </div>
                <div>
                    <RouterButton
                        text='Make A Change'
                        path='/amend-policy-details'
                        styles='bg-white text-fuchsia-900 whitespace-nowrap px-5 py-2 rounded hover:shadow-lg hover:scale-110'
                    />
                </div>
            </div>
        </CardContainer>
    )
}

export default MainPolicyCard