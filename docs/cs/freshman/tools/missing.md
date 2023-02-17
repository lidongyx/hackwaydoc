---
sidebar_position: 1
---

# MIT 计算机教育中缺失的一课

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




>**课程名称：** The Missing Semester of Your CS Education   
**课程官网地址：**[英文版](https://missing.csail.mit.edu/)、[中文版](https://missing-semester-cn.github.io/)  
**先修课程：** 无  
**重要程度：** ※※※  
**课程评点：** 强烈建议大一新生在学习计算机导论和Python的时候，掌握这门课里所涉及到的工具软件的使用，这些都是程序员必须掌握的。


## 课程说明
大学里的计算机课程通常专注于讲授从操作系统到机器学习这些学院派的课程或主题，而对于如何精通工具这一主题则往往会留给学生自行探索。在这个系列课程中，我们讲授命令行、强大的文本编辑器的使用、使用版本控制系统提供的多种特性等等。学生在他们受教育阶段就会和这些工具朝夕相处（在他们的职业生涯中更是这样）。



## 配套资源
### 配套视频
**B站视频：** [计算机教育中缺失的一门课程——编程工具的使用](https://www.bilibili.com/video/BV1vb4y1a7K6)



<Comment></Comment>
