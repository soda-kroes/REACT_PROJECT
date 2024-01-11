import './Layout.css'
import LOGO from '../../assets/logo/img3.jpg'

import {useNavigate} from "react-router-dom"
import { Outlet } from 'react-router-dom'
import { Col, Row, Space } from 'antd'
import { AiFillAndroid,AiFillApple  } from "react-icons/ai";
import { FaTelegram ,FaFacebook,FaYoutube ,FaTiktok } from "react-icons/fa";

const Layout = () =>  {

    //@TODO
    const navigate = useNavigate();

    const handleOnClickMenu = (routeName) =>{
        navigate(routeName);
    }

    // const handleOnClickGoToBackend = () =>{
    //     window.location.href='/dashboard';
    // }
    const dataFollow = [
        {
            name:'Facebook',
            icon: <FaFacebook className='itemMenu'/> ,
            link: 'https://web.facebook.com/?_rdc=1&_rdr'
        },
        {
            name:'Youtube',
            icon: <FaYoutube className='itemMenu'/> ,
            link: 'https://www.youtube.com/watch?v=UIrHpOEiGLg&list=PLl3j4yf5ATl-hXJAYS_gFbx7pC3dS6xnu&index=29'
        },
        {
            name:'Tik Tok',
            icon: <FaTiktok className='itemMenu'/> ,
            link: 'https://www.youtube.com/watch?v=UIrHpOEiGLg&list=PLl3j4yf5ATl-hXJAYS_gFbx7pC3dS6xnu&index=29'
        },
        {
            name:'Telegram',
            icon: <FaTelegram className='itemMenu'/> ,
            link: 'https://www.youtube.com/watch?v=UIrHpOEiGLg&list=PLl3j4yf5ATl-hXJAYS_gFbx7pC3dS6xnu&index=29'
        }

    ];

    return(
       <div>
          <div className="mainHeader">
            <div className='branchContain'>
                <img  className="img_logo" src={LOGO} style={{width:80, height:80} }></img>
                <div>
                    <div className="txtBranch">Computor Cambodia</div>
                    <div className="txtSubBranch">Build Your IT SKill</div>
                </div>
            </div>
           
            <div className='menuContain'>
                <ul className="menu">
                    <li onClick={()=>handleOnClickMenu("/")} className="menu_item">Home</li>
                    <li onClick={()=>handleOnClickMenu("/about")} className="menu_item">About</li>
                    <li onClick={()=>handleOnClickMenu("/product")} className="menu_item">Product</li>
                    <li onClick={()=>handleOnClickMenu("/category")} className="menu_item">Category</li>
                    <li onClick={()=>handleOnClickMenu("/login")} className="menu_item">Login</li>
                    <li onClick={()=>handleOnClickMenu("/dashboard")} className="menu_item">To Backend</li>
                </ul>
            </div>
        </div>
        <Outlet />
        {/* Footer */}
        <div style={{marginTop:10, backgroundColor:'black', padding:'50px 10%'}}>
           <Row>
           <Col span={8} style={{padding:'15px'} }>
                <div className='txtTitle'>Computor Shop Cambodia</div>
                <div className='txtSub' style={{marginTop:10}}>New Information Technogy</div>
                <div className='txtSub'>Build IT SKill</div>
                <img src={LOGO} width={130} height={130} />
             </Col>

             <Col span={8} style={{padding:15}}>
                <div className='txtTitle'>Cambodia App</div>
                <a href='https://play.google.com/store/games?hl=en&gl=US' target='_blank' className='itemMenu'>
                    <Space>
                    <AiFillAndroid style={{marginTop:10}} /><div>Android App</div>
                    </Space>
                </a>
                <br />
                <a href='https://play.google.com/store/games?hl=en&gl=US' target='_blank' className='itemMenu'>
                    <Space>
                    <AiFillApple /><div>IOS App</div>
                    </Space>
                </a>
             </Col>

             <Col span={8} style={{padding:15}}>
                <div className='txtTitle' style={{marginBottom:10}}>Follow Us</div>
                 {
                    dataFollow.map((item,index)=>{
                        return (
                            <div>
                                <a key={index} href={item.link} target='_blank' className='itemMenu'>
                                    <Space>
                                    {item.icon}<div>{item.name}</div>
                                    </Space>
                                </a>  
                            </div>
                        )
                    })
                 }
             </Col>
           </Row>

        </div>
       
       </div>


        
    )
}

export default Layout;