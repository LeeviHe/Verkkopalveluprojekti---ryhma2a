import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function SubCategoryList({url, selectedCategory, selectedSubCategory, setSelectedSubCategory}) {

    const [subCategories, setSubCategories] = useState([])

    useEffect(() =>{
        axios.get(url + 'products/getmanagesub.php/' + selectedCategory?.category_id)
        .then((response) => {
            const json = response.data;
            if (json) {
                if (selectedSubCategory === null) {
                    setSelectedSubCategory(json[0])
                }
                setSubCategories(json)
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
    }, [selectedCategory, selectedSubCategory])

    function onSubCategoryChange(value) {
        const filtered = subCategories.find(index => index.subcategory_id == value)
        setSelectedSubCategory(filtered)
    }
    return (
        <select value={selectedSubCategory?.subcategory_id} onChange={(e) => onSubCategoryChange(e.target.value)}>
            {subCategories.map((subcategory) => (
                <option key={subcategory.subcategory_id} value={subcategory.subcategory_id}>
                    {subcategory.subcategoryname}
                </option>
                ))}
        </select>
    )
} 