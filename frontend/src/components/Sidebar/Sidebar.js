import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:3000/backend/'

export default function Sidebar() {
  const [categories, setCategories] = useState([])
  const [subcategories, setSubCategories] = useState([])

  let params = useParams();

  useEffect(() => {
    axios.get(URL + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
    if (params.categoryId != null && params.subcategoryId == null) {
      axios.get(URL + 'products/getsubcategories.php/' + params.categoryId)
        .then((response) => {
          const json = response.data;
          setSubCategories(json);
        }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
        })
    }
  }, [params])

  function showSub (catnum, subcatcatnum, subcatnum, subcatname) {
    if(catnum == subcatcatnum) {
      return ( 
        <div className="sidebar flex-shrink-0" id="home-collapse">
          <ul className="btn-toggle-nav small">
            <li key={subcatnum}>
              <Link className='sidebar-select' to=
              {'/kategoriat/' + subcatcatnum + '/' + subcatnum}>
              {subcatname}
              </Link>                    
            </li>
          </ul>
        </div>
      )
    }
  }
    return (
      <>
        <div>{categories.map(category => (
          <div className="sidebar flex-shrink-0">    
            <ul className="list-unstyled ps-0">
              <li class="mb-1" >   
                <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="" data-bs-target="#home-collapse" aria-expanded="true" key={category.categorynumber}>
                  {<Link className='sidebar-select' to=
                  {'/kategoriat/' + category.categorynumber}>
                  {category.categoryname}
                  </Link>}
                </button>
              </li>
              {subcategories.map(subcategory => (
                <div key = {subcategory.subcategorynumber}>
                  {showSub(category.categorynumber, subcategory.categorynumber, subcategory.subcategorynumber, subcategory.subcategoryname)}
                </div>
                ))}
            </ul>
          </div>
          ))}

       {/*<ul className="list-unstyled ps-0">
          <li class="mb-1">
            <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              Kesäkengät
            </button>
            <div className="collapse" id="home-collapse">
              <ul className="btn-toggle-nav small">
                <li className='sidebar-select'><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Tennarit</a></li>
                <li className='sidebar-select'><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Sandaalit</a></li>
              </ul>
            </div>
          </li>

          <li className="mb-1">
            <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 ">
              Talvikengät
            </button>
          </li>

          <li className="mb-1">
            <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              Juhlakengät
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav small">
                <li className='sidebar-select'><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Korkokengät</a></li>
                <li className='sidebar-select'><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Puvun kengät</a></li>
              </ul>
            </div>
          </li>

          <li className="mb-1">
            <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 ">
              Juoksuun
            </button>
          </li>

          <li className="mb-1">
            <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 ">
              <strong>ALE</strong>
            </button>
          </li>
              </ul>*/}
      </div>
    </>
  )
}