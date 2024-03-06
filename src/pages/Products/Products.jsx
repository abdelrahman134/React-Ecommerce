import React, { useState } from 'react'
import Lists from '../../components/Lists/Lists';
import { useParams } from 'react-router-dom';
import "./Products.scss"
import useFetch from '../../hooks/useFetch';
export default function Products() {
  const {id}=useParams()
  const [maxPrice,setMaxPrice]=useState([])
  const [sort,setSort]=useState("asc")
  const [selectedBox,setSelectedBox]=useState([])
    const { data, loading, error } = useFetch(
      `/subcategories?[filters][categories][id][$eq]=${id}`
    );
const handleChange=(e)=>{
  const value=e.target.value
  const isChecked=e.target.checked
  setSelectedBox(
    isChecked
      ? [...selectedBox, value]
      : selectedBox.filter((item) => item !== value)
  );

}


  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice || 1000}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price Lowest first</label>
          </div>{" "}
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price Highest first</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="catImg"
        />
        <Lists id={id} maxPrice={maxPrice} sort={sort} subCats={selectedBox} />
      </div>
    </div>
  );
}
