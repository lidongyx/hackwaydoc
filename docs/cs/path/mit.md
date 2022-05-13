---
sidebar_position: 2
---

# MIT 计算机科学与工程

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

>麻省理工MIT既是世界顶级名校，在计算机方面也是四大CS名校之一。它的计算机专业隶属于电子工程与计算机学院Electrical Engineering and Computer Science。由于MIT在开放课程上一直做得比较优秀，Syllabus课程表、Readings教材与参考资料、Slides课件、Code代码、video课程视频以及Lab实验课等等都十分齐全，因此十分推荐大家学习MIT CS的课程。

## 课程说明
:::info 说明

MIT很多课程几年就更新一次，可以尽可能选择最新的，我在整理的过程中也会尽量把最新的开放课程放在课程地址的最前面。有些课程标有“sc”，如“6.00SC”，这个指的是专门为公开课提供的自学课程

:::


MIT 计算机相关的专业有两个，电气工程和计算机科学（Electrical Engineering and Computer Science，EECS）以及计算机科学工程（Computer Science and Engineering，CSE），本学习路线只以CSE为主。

:::danger 注意

相比于EECS，CSE不需要学习电路与电子，信号处理，信号、系统和推断，电磁波与应用，电磁场、力和运动，纳米电子系和计算系统等课程。国内不少计算机专业由于EECS和CSE没有严格区分，导致不少计算机专业仍然需要学习大量EE相关的课程，即便是强如MIT的计算机专业CSE也对EE部分没有要求，所以不推荐国内计算机专业的学生学习大学物理、电子等EE课程。

:::

## 课程体系
以下是MIT 计算机科学与工程专业本科的课程学习路线图，非常详细的列出了该专业本科毕业生应该学习哪些课程，课程分为导论课、基础课、头部课和进阶课。

![MIT CS学习路线图](https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/hackway/cs/v2-bcbfdcbce6c171da5ce0e2ff39744c66_1440w.png)

**专业学分说明：**[MIT CSE专业课程说明](http://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/)

## 必修推荐课程
### ① 6.0001 Python计算机科学编程导论
6.0001	Introduction to Computer Science Programming in Python

### ② 6.042 计算机科学中的数学

### ③ 6.02 

### ④ 6.004	计算架构

### ⑤ 6.006 算法导论

### ⑥ 6.009 编程基础

### ⑦ 6.031 软件构建要素

### ⑧ 6.033 计算机系统工程

### ⑨ 6.046 算法设计与分析

## 进阶推荐课程
### ① 6.814 数据库系统

### ② 6.207 计算机网络




<Comment></Comment>


