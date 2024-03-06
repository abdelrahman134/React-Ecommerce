import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./FeaturedProducts.scss"
import axios from "axios"
import useFetch from "../../hooks/useFetch";
export default function FeaturedProducts({ type }) {
  
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type + " product"}`
  );
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          facere, dolorem hic, expedita iusto, rem quos numquam blanditiis eaque
          odio eos libero vitae distinctio saepe laboriosam obcaecati? Quisquam,
          possimus obcaecati?
        </p>
      </div>
      <div className="bottom">
        {error ? "someting went wrong":
        loading ? "..loading" :
            data?.map(item=>(
                <Cards item={item} key={item.id}/>
            ))
        }
      </div>
    </div>
  );
}
