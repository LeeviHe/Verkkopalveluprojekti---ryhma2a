import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { UNSAFE_DataRouterContext, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import darr from '../../images/ion-icon/chevron-down-outline.svg';

const URL = 'http://localhost:3001/backend/';

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
    axios.get(URL + 'products/getsubcategories.php')
      .then((response) => {
        const json = response.data;
        setSubCategories(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
  }, [params])

  function showSub(catnum, subcatcatnum, subcatnum, subcatname) {
    if (catnum === subcatcatnum) {
      return (
        <div className="sidebar flex-shrink-0 sub-list-item collapse" id={"home-collapse" + catnum}>
          <ul className="btn-toggle-nav list-unstyled">
            <li key={subcatnum}>
              <Link className='sidebar-select collapsed' to=
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
      <div className="sidebar flex-shrink-0">
        <ul className="list-unstyled ps-0">

          <div className='d-flex justify-content-start sidebar-header'> Tuotealueet </div>

          {categories.map(category => (
            <li className='mt-2'>

              <button className="btn btn-toggle d-flex sidebar-btn align-items-center justify-content-between">

                {<Link className='sidebar-select'
                  to={'/kategoriat/' + category.category_id}>
                  {category.categoryname}
                </Link>}

                <span className='collapsed' data-bs-toggle="collapse" data-bs-target={"#home-collapse" + category.category_id} aria-expanded="false">
                  <img className="arr-icon" src={darr} alt="arrow-down" key={category.category_id} />
                </span>

              </button>

              {
                subcategories.map(subcategory => (
                  <div key={subcategory.subcategory_id}>
                    {showSub(category.category_id, subcategory.category_id, subcategory.subcategory_id, subcategory.subcategoryname)}
                  </div>
                ))
              }

            </li>
          ))}
        </ul>
      </div>
    </>
  )
}