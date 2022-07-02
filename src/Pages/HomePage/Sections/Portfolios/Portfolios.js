import PortfolioWidget from '../../../../Widgets/PortfolioWidget/PortfolioWidget';
import './portfolios.css';
function Portfolios(props) {
    return (
        <div className='bg-slate-100'>
            <h1 className='text-slate-800 font-sans text-4xl font-bold text-center py-10'>
                Portfolios</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4 px-10 mb-10">
                <PortfolioWidget
                    title="The Borak"
                    subtitle="A ridesharing and e-commerce platform"
                    tags={['Flutter', 'Firebase', 'MySQL', 'REST Api']}
                    image="https://www.theborak.com/assets/web2/img/borak-logo.png"
                />
                <PortfolioWidget
                    title="The Borak"
                    subtitle="A ridesharing and e-commerce platform"
                    tags={['Flutter', 'Firebase', 'MySQL', 'REST Api']}
                    image="https://www.theborak.com/assets/web2/img/borak-logo.png"
                />
                <PortfolioWidget
                    title="The Borak"
                    subtitle="A ridesharing and e-commerce platform"
                    tags={['Flutter', 'Firebase', 'MySQL', 'REST Api']}
                    image="https://www.theborak.com/assets/web2/img/borak-logo.png"
                />
                <PortfolioWidget
                    title="The Borak"
                    subtitle="A ridesharing and e-commerce platform"
                    tags={['Flutter', 'Firebase', 'MySQL', 'REST Api']}
                    image="https://www.theborak.com/assets/web2/img/borak-logo.png"
                />
            </div>
            <a className=' bg-slate-800 rounded-full px-3 py-1 text-md font-semibold text-white mx-auto mt-2 text-center '>
                View More
            </a>
        </div>
    );
}

export default Portfolios;