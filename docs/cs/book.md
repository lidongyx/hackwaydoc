---
displayed_sidebar: csSidebar
sidebar_position: 2
---

# 教科书推荐

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


:::tip 说明

广泛翻阅了大量的计算机书籍推荐的文章，包括国内以及国外的推荐，考虑到通用性，对于计算机专业的学生来说，只推荐最为经典必买的书，这些书大多都是国内外诸多顶级名校的本科生教材，而且一版再版，不少书籍的作者还是计算机最高奖项图灵奖的获得者。

:::

## 书籍推荐
### 编程语言
#### C程序设计语言
C程序设计语言的作者是Brian W. Kernighan/ Dennis M. Ritchie，因此这本书也被称为K&R，号称”C语言的圣经“，其中Dennis M. Ritchie丹尼斯·里奇是C语言之父，Unix之父，图灵奖、计算机先驱奖获得者，是可以排进程序员前十的大牛。
​
>如果你觉得这本书写的让你看不懂，你可以去看一下C Primer Plus来作为过渡，值得一提的是，时至今日依然有不少计算机专业使用的是谭浩强的书，这里非常不推荐。在学习C语言时，建议你能够先安装一个Linux操作系统。

### 计算机系统
#### 深入理解计算机系统
这本书对于程序员来说，号称价值堪比等重量的黄金，是国外诸多名校以及国内顶级985的必修基础课程。有余力者，推荐直接看英文。
这本书无论是在国外还是在国内都是被公认的经典，英文为Computer Systems A Programmer's perspective，简称CSAPP，是四大名校CMU 15-213的教材。主要讲的是程序员的视角讲述应用开发者（码农）如何能够根据计算机系统知识编写出更好的程序，是国内外公认的最值得阅读的计算机书籍之一。
​
>如这本书的序言里讲到的”如果你研究和领会了这本书的概念，你将开始成为极少数的’牛人‘，这些’牛人‘知道事情是如何运作的，也知道当事情出现故障时如何修复。你写的程序将能够更好地利用操作系统和系统软件提供的功能，对各种操作条件和运行时参数都能正确操作，运行起来更快，并能避免出现使出现容易受到网络攻击的缺陷。同时，你也要做好更深入探究的准备，研究像编译器、计算机体系结构、操作系统、嵌入式系统、网络互联合网络安全这样的高级题目。

看这本书需要你有一些C语言基础，在序言里作者也强烈推荐你先阅读K&R，”无论你的编程背景如何，都应该考虑将K&R作为个人系统藏书的一部分。“


### 程序设计
#### 计算机程序的构造和解释
这本书的英文名为Structure and Interpretation of Computer Programs，简称为SICP，在国外也被称为”The Wizard Book“（巫师书）。这本书曾经长期是MIT本科入门第一课（不过现在四大CS名校入门第一课都改成了Python，MIT在2009年也是），但是这本书仍然是必看的经典，是所有MIT计算机科学、电子工程的学生都必修的一本书。


>这本书可以和MIT 6.001的公开课一起服用。没有一定编程经验，尽管它是MIT入门第一课，你也未必看得懂，所以建议你先掌握一下其他比较简单的编程语言再说。

### 设计模式
#### 设计模式
这本书可以说是设计模式的开山之做，面向对象以及设计模式是程序员必须掌握的基础技能了。因为这本书的作者是四个人，也被称为四人组（Gang of Four），于是这本书也被称为GoF，23种设计模式就是因为这本书。


>”面向对象设计最困难的部分是将系统分解成对象集合。因为要考虑许多因素：封装、粒度、依赖关系、灵活性、性能、演化、复用等等，它们都影响着系统的分解，并且这些因素通常还是互相冲突的。“

设计模式这本书虽然经典，但是要学习设计模式，建议多参考一些书，不能只看这本书。

### 算法与数据结构 
#### 算法导论
这本书的作者也是四个人，Thomas H. Cormen，Charles E. Leiserson，Ronald L. Rivest，Clifford Stein，因此这本书的简称就是这四位大神名字的首字母为CLRS。这本书属于算法里的圣经，也是MIT 6.046的教材，推荐和MIT教学视频一起学习。

这种硬核的书，你不能指望像学编程语言一样很快就能看完，即使是MIT的学生，也要耗费一年的时间来学习此书的部分章节。更建议你可以先阅读《算法》或者其他数据结构与算法的书，比如《数据结构与算法分析 某某语言描述》，去刷一刷LeetCode.

#### 算法



### 计算机网络
#### 计算机网络：自顶向下方法
这本书被数百个大学作为计算机网络课程的教材。”鉴于有那么多关于网络服务端和客户端的软件工程，计算机网络是计算机科学中价值最为'立竿见影'的领域之一“，关于计算机网络也是互联网企业面试必考的。

### 计算机体系结构
#### 计算机体系结构-量化研究方法
这本书是最权威的计算机体系结构著作书中系统地介绍了计算机系统的设计基础、指令集系统结构、流水线和指令集并行技术、层次化存储系统与存储设备、互连网络以及多处理器系统等重要内容。英文名为Computer Architecture:A Quantitative Approach，简称CAAQA。这本书的作者是John L. Hennessy / [美] David A. Patterson，也是计算机组成与设计的作者，这个计算机组成与设计分RISC-V和ARM。

#### 计算机组成与设计

### 操作系统
#### 现代操作系统
国内很多人都更推荐现代操作系统，国外不少人推荐操作系统导论

#### 操作系统导论

### 离散数学
#### 离散数学以及应用
一般建议看离散数学，但是国外不少人推荐具体数学和计算机科学中的数学。只是粗略翻了一下，可能我有黑皮书以及机械工业或华章情节，更偏向于离散数学及其应用。这三本书我都买了，会继续阅读，之后会谈谈心得。

#### 具体数学：计算机科学基础

#### 计算机科学中的数学

### 分布式系统
#### 数据密集型应用系统设计
国内外非常推荐设计数据密集型应用这本书，我看了一下黑皮书的分布式系统也很不错，也有不少人推荐，当然这两本书我都买了。


#### 分布式系统：概念与设计


### 可计算性
### 数据库
#### 数据库系统
比较推荐机械工业出版社出版的数据库系统。国外不少人推荐的是数据库”红书“，这本书的英文版是红色的，但是中文版不是，叫数据管理系统原理与设计

#### 数据库系统概念

#### 数据库系统：设计、实现与管理


### 编译原理
#### 编译原理
编译原理属于编译领域”龙虎鲸“里面的龙书，其中编译原理的两位作者获得了2020年的图灵奖。



<Comment></Comment>