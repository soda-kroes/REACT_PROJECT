import React from 'react'
import {AndroidOutlined, AppleOutlined, DeleteFilled, EditFilled, SaveFilled} from '@ant-design/icons'
import {Button, Space} from 'antd'
import SlideHome from '../../component/slide/SlideHome'
import HomeHotItem from './HomeHotItem'



function HomePage() {
  return (
    <div style={{padding:50}}>
       <div style={{textAlign:'center', fontSize:50, fontWeight:'bold'} }>Computor Shop Cambodia</div>
       <hr />
      <Space direction='horizontal' style={{marginTop:20}}>
       <Button loading= 'true'>Apple <AppleOutlined /></Button>
       <Button success>Android <AndroidOutlined /></Button>
       <Button success>Save <SaveFilled /></Button>
       <Button success>Update <EditFilled /></Button>
       <Button danger>Delete <DeleteFilled /></Button>
      </Space>
      <hr />
      <SlideHome />
      <HomeHotItem />
      
       
    </div>
    
  )
}

export default HomePage