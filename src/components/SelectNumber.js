import React from "react";

const SelectNumber = ({ setNumb, numb }) => {
    const handelChangeNumb = (e) => {
        setNumb(e.target.value);
    };

    return (
        <select onChange={handelChangeNumb} value={numb}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
        </select>
    );
};

export default SelectNumber;
