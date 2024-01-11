import React from 'react';
import './SlideHome.css'
import { Carousel } from 'antd';
import Apple from '../../assets/productImage/apple.png'

const SlideHome = () =>{
    //@Todo
    const dataSlide = [
        {
            title: "Mac Book 2021",
            description: "good product in 2021",
            image: Apple,
            bg_color:"red"
        },
        {
            title: "Mac Book 2022",
            description: "good product in 2022",
            image: Apple,
            bg_color:"pink"
            
        },
        {
            title: "Mac Book 2023",
            description: "good product in 2023",
            image: Apple,
            bg_color:"grey"
        }
        
    ]
    return (
        <div>
           <Carousel autoplay autoplaySpeed={500}>
            
            {
                dataSlide.map((item,index)=>{
                    return(
                        <div key={index} className='itemSlide'>
                        <img src={item.image} width={300} height={200}></img>
                        <h1>{item.title}</h1>
                        <h>{item.description}</h>

                    </div>
                    )
                })
            }
        </Carousel>
        </div>
    )
}

export default SlideHome;

{/* <div className='itemSlide'>
            <h1>Content 1</h1>
            </div>
            <div className='itemSlide'>
            <h1>Content 2</h1>
            </div>
            <div className='itemSlide'>
            <h1>Content 3</h1>
            </div>
            <div className='itemSlide'>
            <h1>Content 4</h1>
            </div> */}