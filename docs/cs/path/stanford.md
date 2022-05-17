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



## 课程说明
斯坦福大学计算机专业的学生需要掌握的课程可以分为工程学院基础要求的课程、6门计算机核心课程，学完了之后，你可以再去选择一个赛道深入研究（这里简称为赛道课程）。

:::info 说明

斯坦福大学计算机专业的课程可以直接通过它的课程编号知道它的难易程度以及所属领域，比如深度学习的课程cs231n，这里的编号2指的是二年级，300-399是大三，而0-99则是没有基础的。斯坦福大学也给高中生AP课程或大一零基础的新生准备的**零基础导论课或实践课**，这些课程都不是必修课程；如果你是高考刚结束，或者大一上学期的学生，可以学习这些课程；

:::

### ① 工程学院基础要求
斯坦福大学计算机专业隶属于工程学院，所以学生也要满足工程学院基本要求的课程（含必修以及选修），这些课程可以分为数学类、科学类、工程基础类、社会技术类，是所有工程学院的学生都需要学习的。

#### 1、数学类
- **数学核心课**，计算机专业的学生必须掌握微积分；
- **计算机科学中的数学**，本科需要掌握两门计算机数学课程，计算数学基础(CS103) 和 计算机科学家概率概论(CS109)
- **数学选修课**，计算机专业的学生必须再选择两门数学选修课

#### 2、科学类
计算机专业的学生必须同时学习力学课程（PHYSICS21、PHYSICS41、PHYSICS61）和电学和磁学类（PHYSICS23、PHYSICS43、PHYSICS63），计算机专业不需要学习物理实验课。当然你也可以去学习机械、机电学院大一的物理课作为替代。

同时你需要选择一门或两门科学选修课，让科学类的总学分至少为11门，至于科学选修课推荐选修的课程，可以参考你选择的赛道课程的推荐

#### 3、工程基础类
- **编程抽象（CS106B 或 CS106X）**，CS106X 涵盖与 CS106B 相同的主题，但覆盖更深入，你也可以在学完CS106A 之后再学 CS106X（而不是 CS106B）。即使你有大量的编程经验，也强烈建议学习 CS106X，特别是如果您不懂 C++。这将确保您为以后的 CS 课程中预期的更高级的工作奠定必要的基础。
- **电子学导论(ENGR40A)**，电子学导论是电子工程系关于电子学的入门课程。该课程每周有习题集、实验、期中考试和期末考试。
- **工程基础选修课，** 你需要从工程学院工程基础列表中选择另一门课，不过你也可以用你选择的赛道课程来替代这门选修课

#### 4、社会技术类
比如和老师在暑假一起做垂直赛道的研究，比如组织有利于工程学院或促进工程协会目标的活动，或者出国去学习海外课程（大约有一半的学生会出国学习海外课程）。海外课程包括为期10周的学制季度课程、为期3到5周的短期学术课程。

### ② 6门计算机核心课程
核心课程包含系统部分和理论部分，这些课程是计算机专业的学生需要认真学习的基础课程，也是很多专业方向的前置课。

#### 1、核心系统课
- **程序的抽象概念**（CS106B或CS106X），主要是C++基础、递归、数据抽象、基础的算法
- **计算机组成与系统**（CS107），基于Unix操作系统，从底层硬件到代码，主题包含计算机结构、内存模型、编译以及基础的并发；
- **计算机系统原理**（CS110）：如何使用操作系统和网络抽象构建大型系统；

#### 2、核心理论课
- **计算的数学基础**（CS103）：数学归纳法、逻辑、集合、函数、关系、DFA's, NFA's、线性回归、图灵机、NP
- **计算机科学家的概率论**（CS109）
- **数据结构与算法**（CS161）

### ③ 赛道必修与选修课
学生需要选择一个赛道，并在该赛道学习4-5 门课程来达到专业级别的深度。学生必须完成任何一个赛道方向的要求，通常包括1-2门必修课，1-2门高度相关的课程以及你可以选择一些更广泛的选修课。

斯坦福大学当前赛道分为人工智能、计算理论、计算机系统、人机交互、图形学、信息学、生物计算（以及其他非专业和个性化自主设计的赛道）。

## 推荐学习课程
### ① CS106系列课程
CS106是一个斯坦福计算机专业一个非常知名的系列入门课程，通过Python入门之后可以选修网站开发、机器学习、音视频等应用开发方向。这些虽然不是专业核心必修课，但却是先修课，而<H color="#25c2a0">以C++为主的CS106B或CS106X是所有计算机方向的必修</H>，也就是斯坦福大学主打的编程语言是Python和C++。

CS106A算是计算机专业入门第一课，CS106A的配套实验课是CS100A，学完CS106A可以选择。

- CS106A 程序设计，主要是用Python入门
- CS 106E 计算机科学探索课，CS106A的进阶课，主要是网站开发、安全，音视频处理、计算机网络、计算机组成、数据库等，相当于用Python把计算机科学的各个分支都实战了一遍。
- CS106B和CS106X（配套实验课为CS100B、CS106L）则是计算机所有方向的必修课，主要学习C++，学完CS106B或CS106X之后可以继续学习：
- CS106B 程序抽象，CS106B是计算机专业的核心必修课程，参考教材为《C++程序设计》。
- CS106L 标准C++程序实验课，这是CS106B或CS106X的实验课，参考资料和工具有QT以及C++ 技术文档
- CS106M CS106B进阶算法课，通过课程名就知道是CS106B的一个进阶课，Google Page Rank算法、分形、蒙特卡洛算法、MapReduce、二进制搜索、数据压缩等算法；
- CS106S C++小组研讨课，这门课主要是分小组围绕健康、公共事务、教育和环境进行应用开发。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ② CS 107 计算机组成与系统
这门课的前置课程是CS106B或CS106X，也就是先要有C/C++的基础，课程主要是用C语言学习计算机组成与系统，参考教材是《深入理解计算机系统》，配有小组研讨课CS107A。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ③ CS 109 计算机科学家的概率论
前置课程是CS103、CS106B或CS106X，MATH51或CME100，主要内容组合学、随机、概论、分布、回归，配套实验课是CS109A。配套教材是《概率论基础教程》。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ④ CS 110 计算机系统原理
前置课程是CS106B、CS107，参考教材除了《深入理解计算机系统》外，还有《计算机系统设计原理》。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ⑤ CS 103 计算的数学基础
主要内容是离散数学，配套的实验课是CS103A，参考教材为《离散数学及其应用》以及《计算理论导引》。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ⑥ CS 161 算法的设计与分析
前置课程是CS103、CS109，参考教材为《算法详解》的卷1、卷2、卷3，这套书原本有四部，但是国内只翻译了两部。同时官方也推荐了替代教材，你可以选用更多细节的《算法导论》。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ⑦ CS 140 操作系统
这门课所使用的操作系统的教材是《Operating Systems_ Principles and Practice》与清华、CMU、伯克利、MIT等学校使用的教材是一样的，整本书分为4个部分。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ⑧ CS 143 编译器
使用的编程语言是C/C++、Golang、Rust，教材是龙书《编译原理》

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ⑨ EE180 计算机体系结构
教材使用的是2017年图灵奖得主Patterson和Hennessy共同撰写的，这本书由3个版本，斯坦福大学用的是MIPS的，这本书还有ARM版、RSIC-V版。它的前置课程EE108A、EE108B也是用的这本教材。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ⑩ CS 144 计算机网络
前置课程为CS 110

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

### ⑪ CS145 数据管理和数据系统
这其实是一门讲解数据库的课程，前置课程为CS103、CS107。课程官网上有比较详细的教程，并没有指定教材，但是官方推荐以下两本《数据库系统全书》和《数据库系统基础教程》。

**前置课程：** 零基础可学，无前置课程

**学习地址：** [CS61A 计算机程序的结构和解释](https://hackway.org//docs/cs/freshman/first/cs61a)

<Comment></Comment>

