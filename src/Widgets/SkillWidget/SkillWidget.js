import './skillWigdet.css';

function SkillWidget(props) {
    return ( 
        <div className="skill-widget">
            <div className="skill-widget-body">
                <div className="skill-widget-body-left">
                    <div className="skill-widget-body-left-image">
                        <img src={props.image} alt={props.title} />
                    </div>
                </div>
                <div className="skill-widget-body-right">
                    <div className="skill-widget-body-right-text">
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
            <div className="skill-widget-header">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
     );
}

export default SkillWidget;