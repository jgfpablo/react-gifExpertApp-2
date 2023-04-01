import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import SelectNumber from "./components/SelectNumber";

const GiftExpertApp = () => {
    const [categories, setCategories] = useState([
        "OnePunchMan",
        "Dragon Ball",
        "Samurai X",
    ]);

    const [numb, setNumb] = useState(10);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <SelectNumber setNumb={setNumb} numb={numb} />
            <hr />

            <ul>
                {categories.map((category, index) => {
                    return (
                        <GifGrid category={category} numb={numb} key={index} />
                    );
                })}
            </ul>
        </>
    );
};

export default GiftExpertApp;
