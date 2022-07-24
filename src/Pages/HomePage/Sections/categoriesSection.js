import { useEffect, useState } from "react";




function CategoriesSection(props) {
    const categoriesData = [
        {
            id: 1,
            name: "Consumer Electronics",
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            subCategories: [
                {
                    id: 1,
                    name: "Mobile Phones",
                    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    subCategories: [
                        {
                            id: 1,
                            name: "Samsung",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 2,
                            name: "Apple",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 3,
                            name: "OnePlus",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Laptops",
                    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    subCategories: [
                        {
                            id: 1,
                            name: "Samsung",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 2,
                            name: "Apple",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 3,
                            name: "OnePlus",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: "Fashion",
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            subCategories: [
                {
                    id: 1,
                    name: "Clothing",
                    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    subCategories: [
                        {
                            id: 1,
                            name: "T-Shirts",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 2,
                            name: "Shirts",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 3,
                            name: "Pants",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Shoes",
                    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit",
                    subCategories: [
                        {
                            id: 1,
                            name: "Sneakers",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 2,
                            name: "Boots",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 3,
                            name: "Sneakers",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            name: "Home & Kitchen",
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            subCategories: [
                {
                    id: 1,
                    name: "Furniture",
                    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMD",
                    subCategories: [
                        {
                            id: 1,
                            name: "Tables",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 2,
                            name: "Chairs",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                        {
                            id: 3,
                            name: "Sofas",
                            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        },
                    ],
                },
            ],
        },
    ];

    const { categories } = categoriesData;
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubCategory, setActiveSubCategory] = useState(null);

    const handleCategoryClick = (category) => {
        if (activeCategory?.id === category.id) {
            setActiveCategory(null);
            return;
        }



        setActiveCategory(category);
        setActiveSubCategory(null);
    }

    const handleSubCategoryClick = (subCategory) => {
        setActiveSubCategory(subCategory);
    }





    return (
        <>
            <div className="w-10/12 mx-auto p-10">
                <div className="flex flex-wrap">
                    {categoriesData.map(category => (
                        <div className="p-2" key={category.id}>
                            <Category
                                category={category}
                                activeCategory={activeCategory}
                                activeSubCategory={activeSubCategory}
                                handleCategoryClick={handleCategoryClick}
                                handleSubCategoryClick={handleSubCategoryClick}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default CategoriesSection;


function Category(props) {
    const { category, activeCategory, activeSubCategory, handleCategoryClick, handleSubCategoryClick } = props;
    const { id, name, image, subCategories } = category;
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (activeCategory && activeCategory.id === id) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [activeCategory, id]);

    return (
        <button onClick={() => {
            handleCategoryClick(category);
        }}>
            <div className={"flex flex-col items-center p-1" + isActive == true ? "bg-blue-100" : ""}>
                <img src={image} alt={name} className={"w-14 h-14 rounded-full"} />
                <div className="text-center">
                    <h3 className="text-sm font-bold mt-3">{name}</h3>
                </div>
            </div>
            {/* {isActive && (
                    <div className="flex flex-col">
                        {subCategories.map(subCategory => (
                            <div className="flex justify-between items-center" key={subCategory.id}>
                                <div className="flex items-center">
                                    <img src={subCategory.image} alt={subCategory.name} className="w-10 h-10 rounded-full mr-2" />
                                    <span className="text-sm font-semibold">{subCategory.name}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm font-semibold">{subCategory.subCategories.length}</span>
                                    <img src="
                                https://img.icons8.com/color/48/000000/chevron-right.png" alt="chevron-right" className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                )} */}
            {/* <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={image} alt={name} className="w-10 h-10 rounded-full mr-2" />
                        <span className="text-sm font-semibold">{name}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-semibold">{subCategories.length}</span>
                        <img src="https://img.icons8.com/color/48/000000/chevron-right.png" alt="chevron-right" className="w-4 h-4 ml-2" />
                    </div>
                </div> */}
        </button>
    );
}


function SubCategory(props) {
    const { subCategory, activeSubCategory, handleSubCategoryClick } = props;
    const { id, name, image, subCategories } = subCategory;
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (activeSubCategory && activeSubCategory.id === id) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [activeSubCategory, id]);

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <img src={image} alt={name} className="w-10 h-10 rounded-full mr-2" />
                <span className="text-sm font-semibold">{name}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm font-semibold">{subCategories.length}</span>
                <img src="https://img.icons8.com/color/48/000000/chevron-right.png" alt="chevron-right" className="w-4 h-4 ml-2" />
            </div>
        </div>
    );
}