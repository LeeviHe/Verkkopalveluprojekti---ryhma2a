import axios from 'axios'
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Products({url}) {
  const [categoryName,setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();
  
  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
        const json = response.data;
        setCategoryName(json.category);
        setProducts(json.products);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])

  return (
    <div>
    <h3>Products for {categoryName}</h3>
    <div className="container grid-container pt-4">

      <>
      <Sidebar />
      </>
      
      <div id="products" className="row list-group" >
        <div className="row">
          {products.map(product => (
        <div className="item  col-4" key={product.productid}>
          <div className="thumbnail">
            <img className="group list-group-image" src="" alt="" />
            <div className="caption">
              <h4>{product.productname}</h4>
              <p className="group inner list-group-item-text">
                Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <div className="row">
                <div className="col-">
                  <p className="lead">
                    {product.price}</p>
                </div>
                <div className="col-">
                  <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>))}
        </div>
      </div>
    </div>
    </div>
  )
}