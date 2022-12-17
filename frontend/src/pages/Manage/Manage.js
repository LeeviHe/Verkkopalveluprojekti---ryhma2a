import axios from 'axios';
import './Manage.css';
import React, { useState, useEffect } from 'react';
import { CategoryList } from './Categorylist';
import { SubCategoryList } from './Subcategorylist';

export default function Manage({url}) {
    const [newCategory, setNewCategory] = useState("")
    const [newSubCategory, setNewSubCategory] = useState("")
    const [newSubCategoryCat, setNewSubCategoryCat] = useState("")
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const [addingCategory, setAddingCategory] = useState(false)
    const [addingSubCategory, setAddingSubCategory] = useState(false)

    function saveCategory(e) {
        e.preventDefault()
        const json = JSON.stringify({name: newCategory})
        axios.post(url + 'products/addcategory.php', json, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('')
            setAddingCategory(false)
            setSelectedCategory(response.data)
        }) .catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
    }

    function saveSubCategory(e) {
        e.preventDefault()
        const json = JSON.stringify({name: newSubCategory, id: newSubCategoryCat})
        axios.post(url + 'products/addsubcategory.php', json, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewSubCategory('')
            setAddingSubCategory(false)
            setSelectedSubCategory(response.data)
        }) .catch(error => {
            alert(error.response === undefined ? error: error.response.data.error)
        })
    }

    function saveProduct(e) {
        e.preventDefault()
        const json = JSON.stringify({name: newSubCategory, id: newSubCategoryCat})
        axios.post(url + 'products/addproduct.php', json, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewSubCategory('')
            setAddingSubCategory(false)
            setSelectedSubCategory(response.data)
        }) .catch(error => {
            alert(error.response === undefined ? error: error.response.data.error)
        })
    }

    if (!addingCategory && !addingSubCategory) {
        return (
            <>
            <h3>Add new category</h3>
            <form onSubmit={saveCategory}>
                <div>
                    <label>Category name</label>
                    <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                </div>
                <button type="button" onClick={() => setAddingCategory(false)}>Cancel</button>
                <button type="submit">Save</button>
            </form>
            <h3>Add new subcategory</h3>
            <form onSubmit={saveSubCategory}>
                <div>
                    <label>Subcategory name</label>
                    <input type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)}/>
                </div>
                {/*<div>
                    <label>Category</label>
                    <CategoryList
                    url = {url}
                    selectedCategory= {selectedCategory}
                    setSelectedCategory = {setSelectedCategory}
                    />
                </div>*/}
                <div>
                    <input type="text" value={newSubCategoryCat} onChange={(e) => setNewSubCategoryCat(e.target.value)}/>
                </div>
                <button type="button" onClick={() => setAddingSubCategory(false)}>Cancel</button>
                <button type="submit">Save</button>
            </form>
            <h3>Add products</h3>
            <form onSubmit={saveProduct}>
                <div>
                    <label>Brand</label>
                    <input type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)}/>
                </div>
                <div>
                    <label>Product name</label>
                    <input type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)}/>
                </div>
                <div>
                    <label>Product price</label>
                    <input type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)}/>
                </div>            
                <div>
                    <label>Category</label>
                    <CategoryList
                    url = {url}
                    selectedCategory= {selectedCategory}
                    setSelectedCategory = {setSelectedCategory}
                    />
                </div>
                {selectedCategory ?             
                <div>
                    <label>Subcategory</label>
                    <SubCategoryList
                    url = {url}
                    selectedCategory = {selectedCategory}
                    selectedSubCategory = {selectedSubCategory}
                    setSelectedSubCategory = {setSelectedSubCategory}
                    />
                </div>
                : <span></span>}
                <button type="submit">Save</button>
            </form>
            </>
        )
}
}