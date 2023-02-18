---
sidebar_position: 8
---

# Princeton 计算机科学专业

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

>普林斯顿大学以优质而严苛的本科生教育闻名，计算机科学和人工智能之父图灵、现代计算机之父冯诺依曼都曾在普林斯顿大学求学和工作过。普林斯顿计算机专业对数学有着比较严格的要求。

## 课程说明
普林斯顿大学计算机专业课程分为基础课、必修课、选修课，学生需要学完所有基础课程，至少8门必修课以及至少3门选修课（必须是COS300开头或更高的COS课程，其中COS500为研究生课程）。

基础课包含数学类微积分（上、下）、线性代数以及工程导论，除此以外还需要学习计算机COS126（计算机科学：跨学科方法 ）、COS217（编程系统导论）和COS226（算法与数据结构）以及COS340 计算推理这四门课程必须在大三结束前学完。

和其他计算机专业一样，普林斯顿开始将计算机专业的必修课程分为4类：研究计算机硬件和软件设计的计算机系统、使用数学来严格发展研究领域的基础理论课、人工智能和机器学习以及比较宽泛的应用课程（比如函数式编程、图形学、信息安全、人机交互等）。

:::info 说明

从普林斯顿最新的课程安排来看，物理、化学等理科课程逐渐被排除在计算机专业之外，而人工智能和机器学习则被纳入到计算机专业必修课程之中。

:::

学生需要从以下4类专业课程中都选择一门课程作为必修，同时你至少从以下课程里要选择8门必修课，以及3门选修课（选修课也可以是COS500开头的研究生课），也就是说建议你从下列课程里选择11门课。

### ① 计算机系统
- COS375 (Computer Architecture and Organization)
- COS318 (Operating Systems)
- COS418 (Distributed Systems)                      
- COS461 (Computer Networks)

### ② 人工智能与机器学习
- COS324 (Introduction to Machine Learning)
- COS424 (Fundamentals of Machine Learning)
- COS429 (Computer Vision)
- COS484 (Natural Language Processing)

### ③ 理论课程
- COS423 (Theory of Algorithms)
- COS433 (Cryptography)
- COS445 (Networks, Economics, and Computing)
- COS487 (Theory of Computation)

### ③ 应用课程
- COS326 (Functional Programming)
- COS333 (Advanced Programming Techniques)
- COS343 (Algorithms for Computational Biology)
- COS426 (Computer Graphics)
- COS432 (Information Security)
- COS436 (Human-Computer Interface Technology)
- COS448 (Innovating across Technology, Business, and Markets)


## 推荐学习课程
### ① COS126 计算机科学：跨学科方法
在科学、工程和商业应用的背景下介绍计算机科学。本课程的目标是讲解计算机科学的基本原理和如何解决实际问题，同时帮助学生有效地使用计算机在计算机科学、物理、生物、化学、工程和其他学科中的应用。所涉及的主题包括：计算机硬件和软件系统；用Java编程；算法和数据结构；计算的基本原理；科学计算，包括模拟、优化和数据分析。

**先修课程：** 零基础可学，无先修课程

**学习地址：** [COS126 计算机科学：跨学科方法](https://hackway.org/docs/cs/freshman/first/cos126)

### ② COS217 编程系统导论
主要包括模块化编程、高级程序设计、编程风格、测试、调试和性能调优；机器语言和汇编语言；和使用系统调用服务。

**先修课程：** [COS126 计算机科学：跨学科方法](https://hackway.org/docs/cs/freshman/first/cos126)

**学习地址：** [COS217 编程系统导论](https://hackway.org/docs/cs/sophomore/programming/cos217)


### ③ COS226 算法和数据结构
本课程调查当今计算机上使用的最重要的算法和数据结构。特别强调用于排序、搜索和字符串处理的算法。还涵盖了许多其他领域的基本算法，包括几何算法、图形算法和一些数值算法。

**先修课程：** [COS126 计算机科学：跨学科方法](https://hackway.org/docs/cs/freshman/first/cos126)

**学习地址：** [COS226 算法和数据结构](https://hackway.org/docs/cs/freshman/datastructure/cos226)

### ⑤ COS240 计算推理
介绍与计算机科学相关的数学主题。组合数学、概率和图论将在计算机科学应用的背景下进行介绍。本课程将介绍一种计算机科学方法来思考和建模。将向学生介绍从高效计算的世界观中产生的基本概念，例如 NP 完整性和密码学。

**先修课程：** [COS126 计算机科学：跨学科方法](https://hackway.org/docs/cs/freshman/first/cos126)、[COS226 算法和数据结构](https://hackway.org/docs/cs/freshman/datastructure/cos226) 以及 线性代数

**学习地址：** [COS240 计算推理](https://hackway.org/docs/cs/junior/reasoning/cos340)


### ④ COS318 操作系统
操作系统的设计和分析的研究。主题包括：进程、互斥、同步、信号量、监视器、死锁预防和检测、内存管理、虚拟内存、处理器调度、磁盘管理、文件系统、安全、保护、分布式系统。

**先修课程：** [COS217 编程系统导论](https://hackway.org/docs/cs/sophomore/programming/cos217)、[COS226 算法和数据结构](https://hackway.org/docs/cs/freshman/datastructure/cos226)

**学习地址：** [COS318 操作系统](https://hackway.org/docs/cs/sophomore/operating/cos318)


### ⑥ COS326 函数式编程
类型化函数式编程原理的介绍。对结构化数据类型的递归函数进行编程，并通过归纳这些函数的正确性进行非正式推理。函数式算法和数据结构。模块化编程、类型抽象、表示不变量和表示独立性的原则。并行函数式编程、算法和应用。

**先修课程：** [COS226 算法和数据结构](https://hackway.org/docs/cs/freshman/datastructure/cos226)

**学习地址：** [COS326 函数式编程](https://hackway.org/docs/cs/sophomore/programming/cos326)


### ⑦ COS375 计算机体系结构和组织
计算机体系结构和组织简介。指令集设计；基本的处理器实现技术；绩效管理；缓存和虚拟内存；流水线处理器设计；成本、性能和复杂性之间的设计权衡。

**先修课程：**  [COS217 编程系统导论](https://hackway.org/docs/cs/sophomore/programming/cos217)

**学习地址：** [COS375 计算机体系结构和组织](https://hackway.org/docs/cs/senior/architecture/cos375)


### ⑧ COS423 算法导论
设计和分析高效的数据结构和算法。构建和分析算法的一般技术。NP完全性简介。

**先修课程：** [COS226 算法和数据结构](https://hackway.org/docs/cs/freshman/datastructure/cos226)、 [COS340 计算推理](https://hackway.org/docs/cs/junior/reasoning/cos340)

**学习地址：** [COS423 算法导论](https://hackway.org/docs/cs/sophomore/algorithm/cos423)

### ⑨ COS425 数据库和信息管理系统
用于访问和管理半结构化信息（例如，Web 信息库）的数据库系统和系统的理论和实践方面。主题包括：关系和 XML 模型、存储和索引结构、查询表达式和评估、并发和事务管理、搜索有效性。

**先修课程：** [COS217 编程系统导论](https://hackway.org/docs/cs/sophomore/programming/cos217)、[COS226 算法和数据结构](https://hackway.org/docs/cs/freshman/datastructure/cos226)

**学习地址：** [COS425 数据库和信息管理系统](https://hackway.org/docs/cs/junior/database/cos425)


### ⑩ COS461 - 计算机网络
本课程研究计算机网络以及在其上运行的应用程序和服务。该课程涵盖网络概念，包括：分组交换；互联网路由和业务关系；IPv4 和 IPv6 寻址；域名系统（DNS）、路由器、交换机和中间盒设计；网络安全; 内容分发网络；无线网络; 和网络应用程序，例如流媒体视频。该课程还将包括几个编程任务，从客户端-服务器编程到网络测量、分析和推理

**先修课程：** [COS217 编程系统导论](https://hackway.org/docs/cs/sophomore/programming/cos217)

**学习地址：** [COS461 - 计算机网络](https://hackway.org/docs/cs/junior/network/cos461)


## 推荐选修课程

### COS316 

### COS320 

### COS333

### COS418

### COS426 计算机图形学

### COS432

## 专业选课表 

- [22、23级课程要求](https://www.cs.princeton.edu/ugrad/becoming-cs-major/requirements)
- [24、25级课程要求](https://www.cs.princeton.edu/ugrad/class-of-2025-departmental-requirements)

- [普林斯顿计算机专业课程目录](https://www.cs.princeton.edu/courses/catalog)


<Comment></Comment>

