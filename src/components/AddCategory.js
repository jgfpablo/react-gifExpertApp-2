import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="search..."
                type={"text"}
                value={inputValue}
                onChange={(e) => {
                    handleInputChange(e);
                }}
            />
        </form>
    );
};

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
