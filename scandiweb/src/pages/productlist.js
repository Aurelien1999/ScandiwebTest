import './productlist.css'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import $ from "jquery";

export default function Productlist() {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }
  return (
    <div className="productlistcontainer">
        <div className='headerproduct'>
            <h2 className='titleheaderproduct'>Product List</h2>
            <div className='headerbutton'>
                <Link style={{textDecoration:"none"}} to="./addproduct">
                    <button className='buttonadd'> Add </button>
                </Link> 
                <button id='delete-product-btn'> Mass delete </button>
            </div>
        </div>
        <div className='productcase'>


            <div className='case'>
                <input
                    id='delete-checkbox'
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div className='casedivtext'>
                    <p>sku</p>
                    <p>name</p>
                    <p>prix</p>
                    <p>les dimensiosn nices</p>
                </div>
            </div>
            
            
        </div>
        <h5 className='lastsentence'>Scandiweb test assignment</h5>
    </div>
  );
}
