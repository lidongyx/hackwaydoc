---
sidebar_position: 31
---

# 浏览器开发者工具
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




>**课程名称：** Structure and Interpretation of Computer Programs  
**课程官网地址：**[1986年Lisp版本](https://inst.eecs.berkeley.edu/~cs61c/su21/)、[2022年春](https://cs61c.org/sp22/)  
**先修课程：** 无  
**重要程度：** ※※※※※  
**课程评点：** 


这门课只有2个学分，主课一般都是9到12个学分，属于选修，主要是掌握Linux的一些操作，如编辑器Emacs、命令行、Git、Latex、Bash、包管理、Makefiles以及React Native等，相当于是教一些计算机的基础操作。


课程地址：[15-131 – Great Practical Ideas in CS](https://www.cs.cmu.edu/~15131/f17/)


<Comment></Comment>
