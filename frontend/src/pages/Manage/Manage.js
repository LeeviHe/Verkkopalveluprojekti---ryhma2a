import axios from 'axios';
import './Manage.css';
import React, { useState, useEffect } from 'react';
import { CategoryList } from './Categorylist';
import { SubCategoryList } from './Subcategorylist';
import { toast } from 'react-toastify';

export default function Manage({ url }) {
    const [newCategory, setNewCategory] = useState("")
    const [newSubCategory, setNewSubCategory] = useState("")
    const [newSubCategoryCat, setNewSubCategoryCat] = useState("")
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const [addingCategory, setAddingCategory] = useState(false)
    const [addingSubCategory, setAddingSubCategory] = useState(false)

    const ToastAdd = () => {
        toast.success('Lisäys onnistui', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    function saveCategory(e) {
        e.preventDefault()
        const json = JSON.stringify({ name: newCategory })
        axios.post(url + 'products/addcategory.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setNewCategory('')
                setAddingCategory(false)
                setSelectedCategory(response.data)
                ToastAdd()
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }

    function saveSubCategory(e) {
        e.preventDefault()
        const json = JSON.stringify({ name: newSubCategory, id: newSubCategoryCat })
        axios.post(url + 'products/addsubcategory.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setNewSubCategory('')
                setAddingSubCategory(false)
                setSelectedSubCategory(response.data)
                ToastAdd()
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }

    function saveProduct(e) {
        e.preventDefault()
        const json = JSON.stringify({ name: newSubCategory, id: newSubCategoryCat })
        axios.post(url + 'products/addproduct.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setNewSubCategory('')
                setAddingSubCategory(false)
                setSelectedSubCategory(response.data)
                ToastAdd()
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }

    if (!addingCategory && !addingSubCategory) {
        return (
            <>
                <div className='container'>
                    <div className='manage-grid mt-5 mb-5'>

                        <div className='manage-category'>
                            <h3 className='mb-3'>Lisää uusi kategoria</h3>
                            <form onSubmit={saveCategory}>
                                <div>
                                    <label className='manage-label mb-1'>Kategorian nimi</label>
                                    <br />
                                    <input className='manage-input mb-2' type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                                </div>
                                <button type="submit">Tallenna</button>
                            </form>
                        </div>

                        <div className='manage-category'>
                            <h3 className='mb-3'>Lisää uusi alakategoria</h3>
                            <form onSubmit={saveSubCategory}>
                                <div>
                                    <label className="manage-label mb-1">Alakategorian nimi</label>
                                    <br />
                                    <input className='manage-input mb-2' type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)} />
                                </div>
                                <div>
                                    <label className="manage-label mb-2 mt-2">Kategoria &nbsp;</label>
                                    <CategoryList
                                        url={url}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                    />
                                </div>
                                <button type="submit">Tallenna</button>
                            </form>
                        </div>

                        <div className='manage-product'>
                            <h3>Lisää uusi tuote</h3>
                            <form onSubmit={saveProduct}>
                                <div>
                                    <label className="manage-label mb-1">Tuotemerkki</label>
                                    <br />
                                    <input className='manage-input mb-2' type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)} />
                                </div>
                                <div>
                                    <label className="manage-label mb-1">Tuotenimi</label>
                                    <br />
                                    <input className='manage-input mb-2' type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)} />
                                </div>
                                <div>
                                    <label className="manage-label mb-1">Tuotehinta</label>
                                    <br />
                                    <input className='manage-input mb-2' type="text" value={newSubCategory} onChange={(e) => setNewSubCategory(e.target.value)} />
                                </div>
                                <div>
                                    <label className="manage-label mb-2 mt-2">Kategoria &nbsp;</label>
                                    <CategoryList
                                        url={url}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                    />
                                </div>
                                {selectedCategory ?
                                    <div>
                                        <label className="manage-label mb-1">Alakategoria</label>
                                        <SubCategoryList
                                            url={url}
                                            selectedCategory={selectedCategory}
                                            selectedSubCategory={selectedSubCategory}
                                            setSelectedSubCategory={setSelectedSubCategory}
                                        />
                                    </div>
                                    : <span></span>}
                                <button type="submit">Tallenna</button>
                            </form>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
