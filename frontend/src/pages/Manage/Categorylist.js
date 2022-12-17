import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function CategoryList({url, selectedCategory, setSelectedCategory, selectedSubCategory, setSelectedSubCategory}) {

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
        console.log(categories.filter(category => category.categoryname))
        setSelectedCategory(categories.filter(category => category.categoryname === value))
        console.log(selectedCategory[0].category_id)
    }
    return (
        <select value={selectedCategory?.category_id} onChange={(e) => onCategoryChange(e.target.value)}>
            {categories.map((category) =>(
                <option key={category.categoryname} value={category.categoryname}>{category.categoryname}</option>
            ))}
        </select>
    )
} 