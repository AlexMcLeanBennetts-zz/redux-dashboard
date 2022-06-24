import CallToAction from 'components/callToAction/callToAction'
import multicarImg from 'assets/svg/multi-car.png';

function CallToActionContainer() {
    let title = "Save £50 on each additional car with out Multicar deal"
    let text = "As an existing customer of 1st CENTRAL, you can get a £50 discount for each additional vehicle you or anyone in your household insures with us directly through our website."
    let buttonPath = '/multicar'
    let buttonText = "Get a multicar quote"
    let imageAlt = 'multicar quote'

    return (
        <CallToAction
            title={title}
            text={text}
            buttonPath={buttonPath}
            buttonText={buttonText}
            imagePath={multicarImg}
            imageAlt={imageAlt}
        />
    )
}

export default CallToActionContainer;