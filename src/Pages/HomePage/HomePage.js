import Intro from "./Sections/Intro/Intro";
import Navbar from "./Sections/Navbar/Navbar";
import Portfolios from "./Sections/Portfolios/Portfolios";
import Skills from "./Sections/Skills/Skills";

function HomePage(props) {
    return (
        <div>
            <Navbar />
            <Intro />
            <Skills />
            <Portfolios />
        </div>

    );
}

export default HomePage;