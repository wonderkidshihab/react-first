function Button(props) {
    return (
        <button className="btn btn-primary" onClick={() => {
            props.onClick();
        }}>
            {props.title}
        </button>
    );
}

export default Button;