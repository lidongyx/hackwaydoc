---
sidebar_position: 1
---

# 伯克利 CS61C 计算机组成原理

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




>**课程名称：** Great Ideas in Computer Architecture (Machine Structures)  
**课程官网地址：**[2021年夏](https://inst.eecs.berkeley.edu/~cs61c/su21/)、[2022年春](https://cs61c.org/sp22/)  
**先修课程：**   
**重要程度：** ※※※

## 课程说明

## 学习视频

**B站视频地址：**[UC Berkeley 公开课-CS61C (Fall 2021)](https://www.bilibili.com/video/BV1Lu411X7u7)

<iframe src="//player.bilibili.com/player.html?aid=509183844&bvid=BV1Lu411X7u7&cid=515222349&page=1" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"> </iframe>





<Comment></Comment>
