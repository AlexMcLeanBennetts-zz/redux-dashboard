import IconCard from "components/iconRoutes/IconCard"
import quoteSVG from "assets/svg/quotes.svg"
import documentsSVG from "assets/svg/documents.svg"
import paymentsSVG from "assets/svg/payments.svg"
import claimsSVG from "assets/svg/policy.svg"

function IconRouteContainer({ }) {
    return (
        <ul className="flex justify-between">
            <li>
                <IconCard path="/quotes" imgPath={quoteSVG} title='Quotes' />
            </li>
            <li>
                <IconCard path="/documents" imgPath={documentsSVG} title='Documents' />
            </li>
            <li>
                <IconCard path="/payments" imgPath={paymentsSVG} title='Payments' />
            </li>
            <li>
                <IconCard path="/claims" imgPath={claimsSVG} title='Claims' />
            </li>
        </ul>
    )
}

export default IconRouteContainer