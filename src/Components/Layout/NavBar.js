import closse from '../../assets/close.png';
import logo from '../../assets/Logo.png';
import search from '../../assets/Search.png';
import TextButton from '../Widgets/TextButton';
function NavBar(props) {
    return (
        <>
            <div className="w-full bg-white flex flex-row justify-between p-5">
                <div className="flex flex-row items-center">
                    <div>
                        <img className="h-8 " src={logo} alt="logo" />
                    </div>
                    <TextButton text="Sell on Shopka" onClick={props.onLogin} />
                    <TextButton text="Register" onClick={props.onRegister} />
                </div>

                <div className='flex flex-row w-1/2'>
                    <div className=' bg-slate-200 rounded-full w-2/4 h-10 flex flex-row justify-between items-center'>
                        <img className="h-4 w-4 mx-4" src={search} alt="search" />
                        <input className="bg-transparent border-none w-full h-full text-sm focus-visible:border-none focus:border-none outline-none" type="text" placeholder="e.g. Books" />
                        <img className="h-6 w-6 rounded-full mx-4" src={closse} alt="close" />
                    </div>
                    <TextButton text="Consumer Electronics" onClick={props.onCart}  />
                </div>
                <div className="flex flex-row items-center">
                
                    <TextButton text="Sign In" onClick={props.onLogin}  className='border border-solid border-gray-400 mr-4' />
                    <TextButton text="My Cart" onClick={props.onCart} className='border border-solid border-gray-400' />
                    <img className="h-8 w-8 rounded-full mx-4" src="https://avatars.githubusercontent.com/u/56557098?v=4" alt="logo" />
                </div>
            </div>
        </>
    );
}

export default NavBar;