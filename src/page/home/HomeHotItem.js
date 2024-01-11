import React from 'react'
import {Row,Col} from 'antd'
import Apple from '../../assets/productImage/apple.png'
import ProductList from '../../component/list/ProductList'

function HomeHotItem(props) {
    const data = [
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"red",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"pink",
            price:2000,
            description:"good product"
            
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"grey",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"red",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"pink",
            price:2000,
            description:"good product"
            
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"grey",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"pink",
            price:2000,
            description:"good product"
            
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"grey",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"red",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"pink",
            price:2000,
            description:"good product"
            
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"grey",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"red",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"pink",
            price:2000,
            description:"good product"
            
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"grey",
            price:2000,
            description:"good product"
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"pink",
            price:2000,
            description:"good product"
            
        },
        {
            name: "Mac Book 2021",
            image: Apple,
            bg_color:"grey",
            price:2000,
            description:"good product"
        },
        
    ]
  return (
    <div>
        <div style={{fontSize:30, fontWeight:'bold', marginTop:10, backgroundColor:'red', width:280, textAlign:'center', borderRadius:10, color:'whitesmoke', padding:10, marginTop:50}}>Hot Product New</div>
        <Row gutter={10}>
           {
            data.map((item,index)=>{
                return(
                    <Col key={index} xs={{span:24}} md={8} lg={6} xl={4}>
                        <ProductList 
                           image = {item.image}
                            name= {item.name}
                            price= {item.price}
                            description= {item.description}
                        />
                    </Col>
                )
            })
           }
        </Row>
     

    </div>
  )
}

export default HomeHotItem

   {/* <Row>
            <Col span={6}>
                <h1>1</h1>
            </Col>
            <Col span={6}>
                <h1>2</h1>
            </Col>
            <Col span={6}>
                <h1>3</h1>
            </Col>
            <Col span={6}>
                <h1>4</h1>
            </Col>
            
        </Row>
        <hr />
        <Row gutter={10}>
            <Col span={12}>
                <h1 style={{backgroundColor:'red'}}>1</h1>
            </Col>
            <Col span={12}>
                <h1 style={{backgroundColor:'red'}}>2</h1>
            </Col>
        </Row> */}