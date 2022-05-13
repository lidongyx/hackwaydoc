---
sidebar_position: 6
---

# Stanford 计算机科学专业

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

>斯坦福大学计算机专业的课程可以直接通过它的课程编号知道它的难易程度以及所属领域，比如深度学习的课程cs231n，这里的编号2指的是二年级，300-399是大三，而0-99则是没有基础的。

## 课程说明
斯坦福计算机专业主要分为零基础导论课或实践课、核心必修课程、专业方向必修、专业选修以及研究型课程。

零基础导论课或实践课，是给高中生的AP课程或大一零基础的新生准备的，这些课程都不是必修课程；如果你是高考刚结束，或者大一上学期的学生，可以学习这些课程；
核心必修课程，是计算机专业所有方向必修，也是我们学习和参考的重点，核心必修课程包括系统部分和理论部分，
专业方向必修，专业方向包含人工智能、系统、计算机工程、图形学、人机交互、信息、系统、理论以及混杂、自主选择等，每个方向都有一些必修课程；
专业方向选修，你可以根据要求在选定的专业方向再选修一些课程，斯坦福大学的选修课非常丰富





<Comment></Comment>

