import React from 'react'
import "./Footer.scss"
export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2 className="title">Categories</h2>
          <span>Woment</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesouries</span>
          <span>new arrivale</span>
        </div>
        <div className="item">
          <h2 className="title">Links</h2>
          
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2 className="title">About</h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            id consectetur optio expedita laborum, quasi architecto praesentium
            ipsum ipsam esse, blanditiis maiores obcaecati tempora rerum,
            officia enim repellendus! Necessitatibus, odit!
          </span>
        </div>
        <div className="item">
          <h2 className="title">Content</h2>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            officiis voluptatem quisquam repudiandae facere? Et eius odio illum
            provident aliquid ducimus, voluptates ipsum vitae veritatis neque
            eos officiis laboriosam magnam.
          </span>
        </div>
      </div>
      <div className="bottem">
        <div className="left">
          <span className="logo">3rayk store</span>
          <span className="copyright">Copyright 2023. All Right Reserved</span>
        </div>
        <div className="right">
          {" "}
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}
