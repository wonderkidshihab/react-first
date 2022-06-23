import SkillWidget from "../../../../Widgets/SkillWidget/SkillWidget";
import './skills.css';
function Skills(props) {
    return (
        <div className="skills">
            <div className="skills-header">
                <h1>Skills</h1>
            </div>
            <SkillWidget
                title="Flutter"
                subtitle="Cross Platform Framework"
                image="https://iconape.com/wp-content/files/yb/61798/svg/flutter-logo.svg"
                text="I can write HTML5 code and I can use it to create web pages."

            />
            <SkillWidget
                title="NodeJs"
                subtitle="JavaScript Framework"
                image="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                text="I can write HTML5 code and I can use it to create web pages."

            />
            <SkillWidget
                title="React"
                subtitle="Frontend Web Framework"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                text="I can write HTML5 code and I can use it to create web pages."

            />
        </div>
    );
}

export default Skills;