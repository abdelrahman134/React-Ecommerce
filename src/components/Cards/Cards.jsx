import React from 'react'
import { Link } from 'react-router-dom'
import "./Cards.scss"
export default function Cards({item}) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              "http://localhost:1337" + item?.attributes.img.data.attributes.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              "http://localhost:1337" +
              item?.attributes.img2?.data?.attributes?.url
            }
            
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>$20</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}
