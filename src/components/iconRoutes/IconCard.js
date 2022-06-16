import { Link } from "react-router-dom";
import CardContainer from "components/utilities/CardPresentational/CardContainer";

function IconCard({ path, title, imgPath }) {
    return (
        <CardContainer>
            <Link to={path}>
                <button className="p-6 rounded hover:scale-105 hover:bg-gray-100 hover:cursor-pointer" aria-label={title}>
                    <div className="bg-fuchsia-900 p-4 rounded-full mb-4">
                        <img className='h-24 w-24' src={imgPath} alt={title}></img>
                    </div>
                    <h2 className="text-center text-xl font-bold italic text-fuchsia-900">{title}</h2>
                </button>
            </Link>
        </CardContainer>
    )
}

export default IconCard