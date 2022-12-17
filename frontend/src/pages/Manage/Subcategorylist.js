import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function SubCategoryList({url, selectedCategory, selectedSubCategory, setSelectedSubCategory}) {

    const [subCategories, setSubCategories] = useState([])

    useEffect(() =>{
        axios.get(url + 'products/getsubcategories.php')
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

    }, [selectedSubCategory])

    function onSubCategoryChange(value) {
        setSelectedSubCategory(subCategories.filter(subcategory => subcategory.subcategoryname === value))
    }

    function showSub(categorytesti, subcat, name) {
        if (categorytesti === subcat) {
          return(name)
          } 
      }

    return (
        
        <select value={selectedSubCategory?.id} onChange={(e) => onSubCategoryChange(e.target.value)}>
        {subCategories.map((subcategory) =>(   
                <option key={subcategory.subcategory_id} value={subcategory.subcategoryname}>
                    {showSub(selectedCategory?.category_id, subcategory.category_id, subcategory.subcategoryname)}
                </option>
        ))}</select>
        
        
    )
} 