---
sidebar_position: 1
---

# 斯坦福 Math50系列 线性代数
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




>**课程名称：** Linear Algebra and Differential Calculus of Several Variables      
**课程官网地址：**[MATH 51课程官网](https://web.stanford.edu/class/math51/)、[MATH 53课程官网](http://web.stanford.edu/class/math53/cgi-bin/p53.pl)        
 
**先修课程：** 无  
**重要程度：** ※※※※※  
**课程评点：** 

## 课程说明
斯坦福大学 MATH50是一个系列，内容将线性代数和微积分相结合，学MATH 50系列前需要先掌握MATH20的内容，MATH50系列包含三门课程：

- MATH51 线性代数、多元微积分和现代应用：以统一的方式涵盖线性代数和多元微积分以及与许多定量领域相关的应用。该材料包括矢量、矩阵和线性变换的基本几何和代数，以及任意数量变量的优化技术（涉及偏导数和拉格朗日乘数）。
- MATH52 多变量积分:涵盖多变量积分，特别是格林定理和斯托克斯定理。
- MATH53 微分方程与线性代数、傅立叶方法和现代应用：发展了常微分方程的核心概念、示例和结果，并涵盖了重要的偏微分方程和求解它们的傅立叶技术。



<Comment></Comment>
