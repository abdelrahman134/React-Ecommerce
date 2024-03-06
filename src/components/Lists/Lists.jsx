import { Card } from '@mui/material';
import React from 'react'
import Cards from '../Cards/Cards';
import "./Lists.scss"
import useFetch from '../../hooks/useFetch';
export default function Lists({subCats,maxPrice,sort,id}) {
 console.log(sort,maxPrice);
   const { data, loading, error } = useFetch(
     `/products?populate=*&[filters][categories][id]=${id}${subCats.map(
       (item) => `&[filters][subcategories][id][$eq]=${item}`
     )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
   );

  return (
    <div className="list">
        {data?.map(item=>(
            <Cards item={item} key={item.id}/>
        ))}
    </div>
  )
}
