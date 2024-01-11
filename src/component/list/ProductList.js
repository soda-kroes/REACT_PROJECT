import React from 'react'
import { Rate } from 'antd';
import { AiFillHeart } from "react-icons/ai";

function ProductList(props) {
  return (
    // static 
    // <div style={{padding:10, backgroundColor: 'pink', marginTop:10}}>
    //     <div>Macbook 2020</div>
    //     <div>Price: 1600$</div>
    //     <div>512 SSD, 8 GB</div>
    // </div>
    
    //dynamic
    <div style={{padding:10, backgroundColor: 'pink', marginTop:10,borderRadius:10}}>
    <img src={props.image} width={"70%"} ></img>
    <div style={{padding:10}}>
    <div style={{ display:'flex', justifyContent:'space-between', fontSize:20}}>
    <div style={{fontSize:18}}><b>{props.name}</b></div>
    <AiFillHeart />
    </div>
  
    <div><b>{props.price+"$"}</b></div>
   <div><b>{props.description}</b></div>
    </div>
   <Rate />

</div>
    
  )
}

export default ProductList