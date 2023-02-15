---
displayed_sidebar: mathSidebar
sidebar_position: 1
---

# 人工智能学习路线与资料

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



>数学是计算机专业的必修课

:::danger 注意

本学习路线与资料只列举计算机相关专业所需要掌握的数学知识，


:::


## Java的学习前景
尽管现在Java的就业市场相比前几年“内卷”了很多，不过Java



计算机专业、或转专业、或自学成才、或培训班、或其他专业辅修的童鞋，应该如何循序渐进地掌握系统而扎实的计算机科学知识，让自己拥有名校科班的实力，无论是从事科研抑或找工作都具有竞争力。从目前大厂招聘来看，掌握本学习路线核心课程的童鞋能够很容易拿到ssp offer。


## 关于


<Comment></Comment>