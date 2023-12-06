import React from 'react';
export const Book = ({url,img,title}) =>(
  <div class="bookitem">
    <a href={url} target="_blank" class="book-content">
      <div class="book-img">
        <img src={img} />
      </div>
      <div class="book-detail">
        <div class="book-title">{title}</div>
        <div class="boook-desc">
          <img width="25" height="25" src="https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/hackway/cs/jd.svg" />
          <div class="book-jd">去京东购买支持正版</div>
        </div>
      </div>
    </a>
    </div> 
  );
  
export const H = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

import AdSense from 'react-adsense';
export const Ad =()=> {
  return (
    <div className="ad-container">
      <AdSense.Google
        client='ca-pub-3564174644141518'
        slot='1473297334'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'/>
    </div>
  )
}

export const Adb =()=> {
  return (
    <div className="ad-container">
      <AdSense.Google
        client='ca-pub-3564174644141518'
        slot='7041719755'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'/>
    </div>
  )
}
  
import Giscus from '@giscus/react';
export const Comment =()=> {
  return (
   <div className="comments-container">
      <Giscus
        src="https://giscus.app/client.js"
        id="comments"
        repo="lidongyx/hackwaydoc"
        repoId="R_kgDOHUMOyA"
        category="Announcements"
        categoryId="DIC_kwDOHUMOyM4CPCtD"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="zh-CN"
        crossorigin="anonymous"
      />
    </div>
  );
}


const DivItem = ({ title, desc, footer}) => {
  return (
    <div style={{ paddingRight: '15px',width:'33%',float:'left',marginBottom:"20px" }}>
      <div style={{borderRadius:"4px",padding: '10px 15px',backgroundColor:"rgba(55, 53, 47, 0.04)",boxShadow:"rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px"}}>
      <div style={{fontSize:"16px",fontWeight:"600"}}>{title}</div>
      <div style={{fontSize:"12px",color:"#555",lineHeight:"20px",height:"100px",overflow:"hidden"}}>{desc}</div>
      <div style={{fontSize:"12px",marginTop:"10px"}}><a href={footer} target='_blank' style={{display:"block",width:"200px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{footer}</a></div>
      </div>
    </div>
  );
};

export const ContentList = ({ items }) => {
  return (
    <>
      <div style={{overflow:"hidden"}}>
      {items.map((item, index) => (
        <DivItem key={index} title={item.title} desc={item.desc} footer={item.footer} />
      ))}
      </div>

    </>
  );
};