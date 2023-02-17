---
displayed_sidebar: mathSidebar
sidebar_position: 1
---

# 大学数学路线与资料

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


## 学习路线说明
### 不建议过度学习数学 
本学习路线只列举与计算机相关专业的数学课程，也就是只列出五大计算机名校在计算机各门课程里，所涉及到的数学先修课，不包含数学系过于复杂、艰深的内容。同时，值得注意的是，不同的计算机专业方向对数学的要求程度也有所不同，因此计算机专业的学生在学习时，以课程要求的数学先修课为主，不建议过度学习过难的数学。

国内普遍存在比较高的数学以及工程崇拜，因此不少高校在计算机专业里塞入了过多的数学、物理、电子、通信等专业的课程，并作为必修课，这让计算机专业的学生学业负担过重，导致没法深入扎实地学好本专业的核心课程，这和五大计算机名校在课程设计和学习路线上存在比较大的分歧。计算机专业是一门独立的专业，计算机也理应与电气工程、数学、工程物理（斯坦福大学的专业划分）分开。

### 需要学习哪些课程
以斯坦福大学计算机专业为例，数学需要学习26个学分，其中离散数学（CS103）5分、微积分（MATH 19、MATH 20、MATH 21）共10分、概率论（CS 109）5分，这三门课是必修，需要再选修2门数学课。










<Comment></Comment>