function TextButton(props) {
    return (
        <>
            <button className={"bg-white text-gray-400 font-bold py-2 px-4 rounded-lg " + props.className} 
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </>
    );
}

export default TextButton;