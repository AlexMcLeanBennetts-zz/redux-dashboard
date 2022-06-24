import RouterButton from "components/buttons/RouterButton"
import CardContainer from "components/utilities/CardPresentational/CardContainer"

function CallToAction({ imagePath, imageAlt, title, text, buttonPath, buttonText }) {
    return (
        <CardContainer>
            <div className="CTA-container flex flex-nowrap relative overflow-hidden bg-fuchsia-900 p-10">
                <div className="z-10 m-auto">
                    <img
                        src={imagePath}
                        alt={imageAlt}
                        className=''
                    />
                </div>
                <div className="z-10 pl-10">
                    <h2 className='text-white font-bold text-lg pb-3'>{title}</h2>
                    <p className="text-white pb-4">
                        {text}
                    </p>
                    <RouterButton
                        text={buttonText}
                        styles='white'
                        path={buttonPath}
                    />

                </div>
            </div>
        </CardContainer>
    )
}
export default CallToAction