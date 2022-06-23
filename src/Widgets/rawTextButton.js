import './rawTextButton.css';
function RawTextButton(props) {
    return (
        <button className="rawTextButton" onClick={() => {
            props.onClick();
        }
        }>
            {props.title}
        </button>
    );
}

export default RawTextButton;