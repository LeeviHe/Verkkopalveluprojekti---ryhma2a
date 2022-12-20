import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function CategoryList({url, selectedCategory, setSelectedCategory}) {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            if (json) {
                if (selectedCategory === null) {
                    setSelectedCategory(json[0])
                }
                setCategories(json)
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
    }, [selectedCategory])
    
    function onCategoryChange(value) {
        const filtered = categories.find(index => index.category_id == value)
        setSelectedCategory(filtered)
    }
    return (
        <select value={selectedCategory?.category_id} onChange={(e) => onCategoryChange(e.target.value)}>
            {categories.map((category) =>(
                <option key={category.category_id} value={category.category_id}>
                    {category.categoryname}
                </option>
            ))}
        </select>
    )
} 