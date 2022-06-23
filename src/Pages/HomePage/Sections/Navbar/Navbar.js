import RawTextButton from '../../../../Widgets/rawTextButton';
import './navbar.css';
function Navbar(props) {
    return (
        <div className='navBar'>
            <div className='navName'>
                <h1>ShihabUddin</h1>
            </div>
            <div className='navMenu'>
                <RawTextButton title="Home" onClick={() => { console.log("Home clicked") }} />
                <RawTextButton title="Blog" onClick={() => { console.log("Home clicked") }} />
                <RawTextButton title="Portfolio" onClick={() => { console.log("Home clicked") }} />
                <RawTextButton title="News" onClick={() => { console.log("Home clicked") }} />
                <RawTextButton title="About me" onClick={() => { console.log("Home clicked") }} />
            </div>
        </div>
    );
}

export default Navbar;