---
sidebar_position: 1
---

# 哈佛 MATH 1a/1b  微积分导论
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




>**课程名称：** Introduction to Calculus    
**课程官网地址：**[MATH 1a 2021年春](https://people.math.harvard.edu/~knill/teaching/math1a2021/index.html)、[MATH 1b 2021年秋](https://people.math.harvard.edu/~knill/teaching/fall2021/index.html)、[MATH 21a 2022年夏](https://people.math.harvard.edu/~knill/teaching/summer2022/index.html)        
**先修课程：** 无  
**重要程度：** ※※※※※  
**课程评点：** 

## 课程说明
关于微积分，哈佛大学开设了MATH 1a

对数学有追求的学生可以学习MATH 121代替 MATH21a 的内容

[MATH 112](https://people.math.harvard.edu/~auroux/112s19/index.html)


<Comment></Comment>
