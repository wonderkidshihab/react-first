import { useEffect, useState } from 'react';

function CategoriesSection(props) {
    const { categories } = props;
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    useEffect(() => {
        setActiveCategory(categories[0]);
    }
        , [categories]);

    const handleClick = (category) => {
        setActiveCategory(category);
    }

    return (
        <>
            <div className="container mx-auto mt-10">
                <h1 className="text-center text-2xl font-bold mb-5">Categories</h1>
                <div className="flex flex-row justify-center">
                    {categories.map((category, index) => {
                        return (
                            <div className={category === activeCategory ? "flex flex-col items-center justify-center bg-slate-200 rounded-lg p-4 m-2" : "flex flex-col items-center justify-center bg-white rounded-lg p-4 m-2 border-solid border-2 border-slate-100"} key={index}>
                                <span className='text-4xl'>
                                    {category.icon}
                                </span>
                                <a className="text-slate-500"
                                    onClick={() => handleClick(category)}
                                >{category.name}</a>
                            </div>
                        );
                    }
                    )}
                </div>
            </div>

        </>
    );
}

export default CategoriesSection;