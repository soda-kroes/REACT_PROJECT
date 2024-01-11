import React, { useState } from 'react';
import LOGO from '../../assets/logo/img3.jpg'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '/dashboard', <PieChartOutlined />),
  getItem('Category', '/dashboard/category', <DesktopOutlined />),
  getItem('Employee', '/dashboard/employee', <DesktopOutlined />),
  getItem('Report', 'report', <UserOutlined />, [
    getItem('Tom', '4'),
    getItem('Bill', '5'),
    getItem('Alex', '6'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '7'),
    getItem('Team 2', '8')
]),
  getItem('Logout', '9', <FileOutlined />),
];
const LayoutDashboard = () => {
    const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChangeMenu = (item) =>{
    console.log(item.key);
    navigate(item.key)
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu onSelect={onChangeMenu} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <div className='branchContain'>
        <img  src={LOGO} style={{width:40, height:40, marginRight:10 ,marginLeft:10} }></img>

        </div>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutDashboard;



// import './LayoutDashboard.css'
// import LOGO from '../../assets/logo/img3.jpg'
// import {useNavigate} from "react-router-dom"
// import { Outlet } from 'react-router-dom'
// const LayoutDashboard = () =>  {

//     //@TODO
//     const navigate = useNavigate();

//     const handleOnClickMenu = (routeName) =>{
//         navigate(routeName);
//     }
//     // const handleOnClickGoToWeb = ()=>{
//     //     window.location.href="/";
//     // }


//     return(
//         <div>
//                    <div className="mainHeaderDashboard">
//             <div className='branchContain'>
//             <img  className="img_logo" src={LOGO} style={{width:80, height:80} }></img>
//                 <div>
//                    <div className="txtBranch">Computor Cambodia</div>
//                     <div className="txtSubBranch">Build Your IT SKill</div>
//                 </div>
//             </div>
           

//             <div className='menuContain'>
//                 <ul className="menu">
//                     <li onClick={()=>handleOnClickMenu("/")} className="menu_item">Home</li>
//                     <li onClick={()=>handleOnClickMenu("/about")} className="menu_item">About</li>
//                     <li onClick={()=>handleOnClickMenu("/product")} className="menu_item">Product</li>
//                     <li onClick={()=>handleOnClickMenu("/category")} className="menu_item">Category</li>
//                     <li onClick={()=>handleOnClickMenu("/login")} className="menu_item">Login</li>
//                     <li onClick={()=>handleOnClickMenu("/")} className="menu_item">Go to Website</li>
//                 </ul>

//             </div>
            

//         </div>
//         <Outlet />

//         </div>
        
//     )
// }

// export default LayoutDashboard;