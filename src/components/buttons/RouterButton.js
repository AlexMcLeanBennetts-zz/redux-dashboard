import { Link } from "react-router-dom";

function RouterButton({
    path,
    text,
    icon,
    styles,
    disabled,
}) {
    let formatedStyles;
    if (styles === 'white') {
        formatedStyles = "bg-white text-fuchsia-900 whitespace-nowrap px-5 py-2 rounded hover:shadow-lg hover:scale-110"
    }
    return (
        <Link to={path}>
            <button
                className={formatedStyles}
                disabled={disabled}
            >
                {text}
                {icon != null && <span className="material-icons">{icon}</span>}
            </button>
        </Link>
    );
}

export default RouterButton;