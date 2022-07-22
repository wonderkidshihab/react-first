import {pages, buttons, categories} from "../../DummyData/dummyDatas";
import CategoriesSection from "./Sections/categoriesSection";

import NavBar from "../../Components/Layout/NavBar";

function HomePage(props) {
    

    return ( 
        <>
            <NavBar pages={pages} 
            buttons={buttons} 
             />
             <CategoriesSection categories={categories} />
        </>
     );
}

export default HomePage;