import "./button.scss";

const Button = ({ variant, children, onClick }) => {
    return (
        <button onClick={onClick} className={`btn btn-${variant}`}>
            {children}
        </button>
    );
};

export default Button;
