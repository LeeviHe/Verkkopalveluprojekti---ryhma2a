import axios from 'axios';
import './Manage.css';
import React, { useState, useEffect } from 'react';
import { CategoryList } from './Categorylist';

export default function Manage({url}) {
    const [newCategory, setNewCategory] = useState("")
    const [newSubCategory, setNewSubCategory] = useState("")
    const [newSubCategoryCatid, setNewSubCategoryCatid] = useState("")
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
        const json = JSON.stringify({name: newSubCategory, id: newSubCategoryCatid})
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
            alert(error.response === undefined ? error + "testoi" : error.response.data.error)
        })
    }

    if (!addingCategory && !addingSubCategory) {
        return (
            <>
            <h3>Manage categories</h3>
            <div>
                <label>Category</label>
                <CategoryList
                url = {url}
                selectedCategory= {selectedCategory}
                setSelectedCategory = {setSelectedCategory}
                selectedSubCategory = {selectedSubCategory}
                setSelectedSubCategory = {setSelectedSubCategory}
                />
                <button className='btn btn-dark' type ="button" onClick={()=> setAddingCategory(true)}>Add category</button>
                <button className='btn btn-dark' type ="button" onClick={()=> setAddingSubCategory(true)}>Add subcategory</button>
            </div>
            </>
        )
    } else if (addingCategory && !addingSubCategory) {
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
            </>
        )
    } else if (!addingCategory && addingSubCategory) {
        return (
            <>
            <h3>Add new subcategory</h3>
            <form onSubmit={saveSubCategory}>
                <div>
                    <label>Subcategory name</label>
                    <input type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)}/>
                </div>
                <div>
                    <label>Subcategory categoryid</label>
                    <input type="text" value={newSubCategoryCatid} onChange={(e) => setNewSubCategoryCatid(e.target.value)}/>
                </div>
                <button type="button" onClick={() => setAddingSubCategory(false)}>Cancel</button>
                <button type="submit">Save</button>
            </form>
            </>
        )
    }
}