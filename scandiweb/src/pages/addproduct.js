import './addproduct.css'
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import $ from "jquery";

export default function Addproduct() {
    const form = useRef();
    const [selectedOption, setSelectedOption] = useState("");
    const [result, setResult] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
  };
  return (
    <div className="productlistcontainer">
        <form id='product_form' action="http://localhost:8000/server.php" method="post" onSubmit={(e) => handleSumbit(e)}>
        <div className='headerproduct'>
            <h2 className='titleheaderproduct'>Product Add</h2>
            <div className='headerbutton'>
                <button type="submit" className='buttonsave'> Save </button>
                <Link style={{textDecoration:"none"}} to="../">
                    <button className='buttoncancel'> Cancel </button>
                </Link> 
              
            </div>
        </div>
        <div className='divaddproductform'>
                <div className='divlabelforminput'>
                    <label>SKU</label>
                    <input id="sku" type="text" placeholder="#sku" name="sku_n"  required/> 
                </div>
                <div className='divlabelforminput'>
                    <label>NAME</label>
                    <input id="name" type="text" placeholder="#name" name="name_n" required />
                </div>
                <div className='divlabelforminput'>
                    <label>PRICE ($)</label>
                    <input id="price" type="number" placeholder="#price" name="price_n" />
                </div>
            <label>
            Type switcher :
            <select name="frog" id='productType'value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Type Switcher</option>
                <option value="DVD">DVD</option>
                <option value="Book">Book</option>
                <option value="Furniture">Furniture</option>
            </select>
            </label>
            {selectedOption === "DVD" &&
            <div id="DVD">
                <div className='divlabelforminput'>
                    <label>Size (MB)</label>
                    <input id="size" type="number" placeholder="#size" name="DVD_n"  required/> 
                </div>
                <p className='textbottom'>*Please provide the size in MB format</p>
            </div>
            }
            {selectedOption === "Book" &&
            <div id="Book">
                <div className='divlabelforminput'>
                    <label>Weight (KG)</label>
                    <input id="weight" type="number" placeholder="#weight" name="Book_n"  required/> 
                </div>
                <p className='textbottom'>*Please provide the weight in Kg format</p>
            </div>
            }
            {selectedOption === "Furniture" &&
                <div id="Furniture">
                    <div className='divlabelforminput'>
                        <label>Height (CM)</label>
                        <input id="height" type="number" placeholder="#height" name="heightF_n"  required/> 
                    </div>
                    <div className='divlabelforminput'>
                        <label>Width (CM)</label>
                        <input id="width" type="number" placeholder="#width" name="widthF_n"  required/> 
                    </div>
                    <div className='divlabelforminput'>
                        <label>Length (CM)</label>
                        <input id="length" type="number" placeholder="#length" name="lengthF_n"  required/> 
                    </div>
                    <p className='textbottom'>*Please provide dimensions in HxWxL format</p>
                </div>
            }
        </div>
        </form>
        <h5 className='lastsentence'>Scandiweb test assignment {result}</h5>
    </div>
  );
}