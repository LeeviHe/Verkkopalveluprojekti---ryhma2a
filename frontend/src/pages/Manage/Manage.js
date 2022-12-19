import axios from 'axios';
import './Manage.css';
import React, { useState, useEffect } from 'react';
import { CategoryList } from './Categorylist';
import { SubCategoryList } from './Subcategorylist';
import { ToastContainer, toast } from 'react-toastify';

export default function Manage({url}) {


    const [newCategory, setNewCategory] = useState("")
    const [newSubCategory, setNewSubCategory] = useState("")

    const [addManage, setAddmanage] = useState(false)
    const [addingSubcategory, setAddingSubcategory] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const [selectedSubCategoryCat, setSelectedSubCategoryCat] = useState(null)

    const [products, setProducts] = useState ([])
    const [brand, setBrand] = useState ('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')

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
                setSelectedCategory(response.data)
                ToastAdd()
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }

    function saveSubCategory(e) {
        e.preventDefault()
        const json = JSON.stringify({ name: newSubCategory, id: selectedSubCategoryCat.category_id })
        console.log(json)
        axios.post(url + 'products/addsubcategory.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setNewSubCategory('')
                setSelectedSubCategoryCat(null)
                ToastAdd()
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }

    /*useEffect(() => {
        if (selectedCategory !== null) {
            axios.get(url + 'products/getproducts.php/' + selectedCategory.category_id)
            .then((response) => {
                const json = response.data;
                if (json) {
                    setProducts(json.products);
                }
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
        }}, [url, selectedCategory]) */
    function saveProduct(e) {
        e.preventDefault()
        if (showToggle) {
            const json = JSON.stringify({brand: brand, name: productName, price: price, catid: selectedCategory.category_id, subcatid: selectedSubCategory.subcategory_id})
            axios.post(url + 'products/addproduct.php', json, {
            headers: {
                'Content-Type' : 'application/json'}})
            .then((response) => {
            setBrand('')
            setProductName('')
            setPrice('')
        }) .catch(error => {
            alert(error.response === undefined ? error: error.response.data.error)
        })
        
    } else {
            const json = JSON.stringify({brand: brand, name: productName, price: price, catid: selectedCategory.category_id})
            axios.post(url + 'products/addproduct.php', json, {
                headers: {
                    'Content-Type' : 'application/json'}})
                .then(response => {
                setBrand('')
                setProductName('')
                setPrice('')
                ToastAdd()
            })    
            .catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
            
        }
    }
    const [showToggle, setShowToggle] = useState(false);
    const toggleSub = (e) => {
        setShowToggle(!showToggle);
      };
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
                                    <input className='manage-input mb-2' 
                                    type="text" value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)} 
                                    required/>
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
                                    <input className='manage-input mb-2' 
                                    type="text" value={newSubCategory} 
                                    onChange={(e) => setNewSubCategory(e.target.value)} 
                                    required/>
                                </div>
                                <div>
                                    <label className="manage-label mb-2 mt-2">Kategoria &nbsp;</label>
                                    <CategoryList
                                        url={url}
                                        selectedCategory={selectedSubCategoryCat}
                                        setSelectedCategory={setSelectedSubCategoryCat}
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
                                    <input className='manage-input mb-2'
                                    type="text" value={brand} 
                                    onChange={(e) => setBrand(e.target.value)} 
                                    required/>
                                </div>
                                <div>
                                    <label className="manage-label mb-1">Tuotenimi</label>
                                    <br />
                                    <input className='manage-input mb-2' 
                                    type="text" 
                                    value={productName} 
                                    onChange={(e) => setProductName(e.target.value)} 
                                    required/>
                                </div>
                                <div>
                                    <label className="manage-label mb-1">Tuotehinta</label>
                                    <br />
                                    <input className='manage-input mb-2' 
                                    type="text" 
                                    value={price} 
                                    onChange={(e) => setPrice(e.target.value)} 
                                    required/>
                                </div>
                                <div>
                                    <label className="manage-label mb-2 mt-2">Kategoria &nbsp;</label>
                                    <CategoryList
                                        url={url}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                    />
                                </div>
                                <div className='checkbox'>
                                    <input id='checkbox' type="checkbox" onChange={toggleSub}/>
                                    <label style={{
                                    color: "black"
                                    }}
                                    for="checkbox">
                                    Haluan lisätä tuotteen alakategoriaan. 
                                    </label>
                                </div>
                                {showToggle ?
                                <div>
                                    <label className="manage-label mb-1">Alakategoria &nbsp;</label>
                                    <SubCategoryList
                                        url={url}
                                        selectedCategory={selectedCategory}
                                        selectedSubCategory={selectedSubCategory}
                                        setSelectedSubCategory={setSelectedSubCategory}
                                    />
                                </div> : <span></span>}
                                <button type="submit">Tallenna</button>
                            </form>
                        </div>

                    </div>
                </div>
            </>
        )
    }