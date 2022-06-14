import { Link } from "react-router-dom";

function Button({
    path,
    text,
    icon,
    styles,
    disabled,
}) {
    return (
        <Link to={path}>
            <button
                className={styles}
                disabled={disabled}
            >
                {text}
                {icon != null && <span className="material-icons">{icon}</span>}
            </button>
        </Link>
    );
}

export default Button;