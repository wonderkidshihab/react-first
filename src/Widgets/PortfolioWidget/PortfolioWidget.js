function PortfolioWidget(props) {
    return (

        <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 md:w-1/4">
            <a href={props.href}>
                <img className="rounded-t-lg p-10" src={props.image} alt="" />
            </a>
            <div className="p-5">
                <a href={props.href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.subtitle}</p>
                {props.tags?.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">{tag}</span>
                ))}
            </div>
        </div>

    );
}

export default PortfolioWidget;