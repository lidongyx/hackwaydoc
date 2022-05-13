---
sidebar_position: 5
---

# Berkeley 电子工程与计算机科学

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


>计算机科学知识并不仅限于计算机专业的学生来学习，如果你是非工程领域（比如数学、统计、物理、英语、经济学、商业、音乐等）专业的学生想双修计算机，或者你只想专注于CS但是对EE课程不感兴趣，或者你是其他专业想学习计算机科学知识，伯克利有专门的计算机Arts学位，不过本学习路线以工程学院EECS内容为主，所以难度深度会偏大一些。

## 课程说明
可以说伯克利Berkeley的教程资料应该是四大CS名校里面最新最全的。本文会尽可能全面展示伯克利教学特点、风格、内容，并附上比较详细的选课指南与建议。伯克利选择学习时有最低标准和最高标准。

## 课程体系



<Comment></Comment>

