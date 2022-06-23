import './Intro.css';

function Intro(props) {
    return (
        <div className="intro">

            <img className="intro-image" src="https://avatars.githubusercontent.com/u/56557098?v=4" alt="Shihab Uddin" />


            <div className="intro-text">
                <h1>Shihab Uddin</h1>
                <h2>Software Engineer</h2>
                <p>I am a software engineer who is passionate about building web applications.</p>
            </div>


        </div>
    );
}

export default Intro;