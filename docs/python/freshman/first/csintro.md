---
sidebar_position: 1
title: 计算机科学速成课
---

# 计算机科学导论 

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

>**课程名称：** Crash Course Computer Science  
**课程官网地址：**[2022年](https://cs50.harvard.edu/x/2022/)  
**先修课程：** 零基础可学  
**重要程度：** ※※※   
**课程评点：** CS50系列课程可以说是哈佛大学一个现象级的课程，也是哈佛大学最受欢迎的课程之一。这门课主要面向高中生和计算机专业大一的学生。   

## 课程说明
### ① 课程介绍
计算机专业入门的第一课通常被称之为“CS0”，课程名字为 <H color="#25c2a0">“计算机科学导论”</H> 或 <H color="#25c2a0">“计算机科学概论”</H>，这门课主要向没有学习过任何先修知识的新人介绍计算机科学是什么，当走进大学时应该学习什么，非常适合高考刚毕业的准大学生、大一新生、计算机自学爱好者等。

:::tip 提示

这门课会带你游历计算机的世界，由远及近的介绍计算机硬件和软件的历史，自底向上介绍计算机系统的分层，会让你对计算机科学整个体系有一个宏观的了解，因此里面会涉及到非常多的概念，但是你在学习的过程中不要有心理负担，也不要死记硬背，而应该把课程所涉及的内容当成历史小说、文学作品一样津津有味地去阅读。

:::


### ② 学习视频

Crash Course Computer Science

**B站视频：**[计算机科学速成课：Crash Course Computer Science](https://www.bilibili.com/video/BV1EW411u7th)

<iframe src="//player.bilibili.com/player.html?aid=21376839&bvid=BV1EW411u7th&cid=35533224&page=2" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"  width="100%" height="500"> </iframe>

### 课程基础大纲

* 1 - 早期的计算 - Early Computing
* 2 - 电子计算 - Electronic Computing
* 3 - 布尔逻辑与逻辑电路 - Boolean Logic & Logic Gates
* 4 - 二进制 - Representing Numbers and Letters with Binary
* 5 - 算术逻辑单元 - How Computers Calculate - the ALU
* 6 - 寄存器 & 内存 - Registers and RAM
* 7 - 中央处理器 - The Central Processing Unit(CPU)
* 8 - 指令和程序 - Instructions & Programs
* 9 - 高级 CPU 设计 - Advanced CPU Designs
* 10 - 编程史话 - Early Programming
* 11 - 编程语言 - The First Programming Languages
* 12 - 编程原理：语句和函数 - Programming Basics: Statements & Functions
* 13 - 算法初步 - Intro to Algorithms
* 14 - 数据结构 - Data Structures
* 15 - 阿兰·图灵 - Alan Turing
* 16 - 软件工程 - Software Engineering
* 17 - 集成电路、摩尔定律 - Integrated Circuits & Moore’s Law
* 18 - 操作系统 - Operating Systems
* 19 - 内存 & 储存介质 - Memory & Storage
* 20 - 文件系统 - Files & File Systems
* 21 - 压缩 - Compression
* 22 - 命令行界面 - Keyboards & Command Line Interfaces
* 23 - 屏幕 & 2D 图形显示 - Screens & 2D Graphics
* 24 - 冷战和消费主义 - The Cold War and Consumerism
* 25 - 个人计算机革命 - The Personal Computer Revolution
* 26 - 图形用户界面 - Graphical User Interfaces
* 27 - 3D 图形 - 3D Graphics
* 28 - 计算机网络 - Computer Networks
* 29 - 互联网 - The Internet
* 30 - 万维网 - The World Wide Web
* 31 - 网络安全 - Cybersecurity
* 32 - 黑客与攻击 - Hackers & Cyber Attacks
* 33 - 加密 - Cryptography
* 34 - 机器学习与人工智能 - Machine Learning & Artificial Intelligence
* 35 - 计算机视觉 - Computer Vision
* 36 - 自然语言处理 - Natural Language Processing
* 37 - 机器人 - Robots
* 38 - 计算机中的心理学 - Psychology of Computing
* 39 - 教育型科技 - Educational Technology
* 40 - 奇点，天网，计算机的未来 - The Singularity, Skynet, and the Future of Computing

## 书籍推荐

<Book img="https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/hackway/cs/s27331702.jpeg" url="https://item.jd.com/13467838.html" title="编码：隐匿在计算机软硬件背后的语言"></Book>



<Comment></Comment>



