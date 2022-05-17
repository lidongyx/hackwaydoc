---
sidebar_position: 8
---

# Harvard 计算机科学专业

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


>哈佛大学虽然不在四大CS名校之列，不过由于师资力量强大，因此有不少神课，比如CS50系列课程，风靡全校乃至全美，而且有比尔盖茨、扎克伯格等一众知名校友。就图灵奖获得者所在的大学排名，哈佛大学在斯坦福、MIT、伯克利、普林斯顿之后，在CMU之前，位列第5。除此以外，哈佛大学的学生可以交叉学习MIT的课程。

## 课程说明
哈佛大学计算机专业将毕业要求氛围基础与荣誉等级别，其中基础毕业要求除了需要掌握微积分、线性代数、概率统计外，还需要围绕编程（编程1和编程2）、形式推理、计算机系统、计算与世界（计算与世界之间的交互，如人工智能）、高级计算机科学来选择至少9门课，其中编程课至少2门，形式推理至少要包含离散数学（如CS20）、可计算性和复杂性理论与算法（如CS120、CS121、CS124），计算机系统至少1门、计算与世界至少1门、高级计算机科学至少4门。

而荣誉毕业要求，至少要掌握11门计算机科学的核心课，增加了对人工智能的硬件要求，以及高级计算机科学至少5门。

### ① 推荐课程安排
哈佛大学对各年级的大学生推荐了一个比较基础的课程安排计划，大致如下：
- 大一上学期：CS 50（计算机科学导论）、微积分、线性代数，如果你之前编程经验丰富，你可以直接去学CS 61(系统编程与计算机组成原理) 或 CS120/CS121（形式推理）
- 大一下学期：CS32（计算思维与解决问题）、CS51（计算中的抽象与设计）、CS20（离散数学），如果你数学基础可以好，可以直接跳过 CS20（离散数学）而去学习 CS121（算法、可计算和复杂性导论）
- 大二上学期：CS121 或CS120（算法、可计算和复杂性导论），概率统计、CS61（计算机系统）
- 大二下学期：CS124（数据结构与算法）

大三、大四你可以根据你自己的兴趣来安排、选修课程。

### ② 编程1和编程2
学习编程1和编程2，必须要掌握重要的软件构建和良好的工程实践能力
- CS32  计算思维和问题解决	
- CS50  计算机科学导论
- CS107/CS207  计算科学的系统开发
- CS109A  数据科学1：数据科学概论
- CS109B  数据科学 2：数据科学高级主题
- CS51  计算中的抽象与设计
- CS61  系统编程和计算机组成原理	
- CS153  编译器
- CS161  操作系统
- CS165  数据系统

### ③ 形式推理
形式推理课程向学生灌输的是计算机科学学术里至关重要的形式思维习惯，主要包括可计算性和复杂性理论、数据结构与算法、算法分析等课程。

- CS120  算法、可计算性和复杂性导论
- CS124	 数据结构和算法	
- CS222	 网络、数据传输和搜索引擎的算法
- CS223	 概率分析和算法	
- CS224	 高级算法	
- MIT 6.854 高级算法

### ④ 计算机系统
计算机系统主要是围绕计算机的软件和硬件的交互和适应来展开，这些课程要求学生能够自己或组队完成广泛的编程以及计算机系统开发方面的作业，需要设计软件以及硬件的组件，同时要关注性能、稳定性、安全性等（以下列表排除了和编程类、形式推理类重复的课程）。

- CS141	计算硬件		
- CS145 / CS245	大规模网络		
- CS146	计算机架构		
- CS242	大规模计算		
- CS243	高级计算机网络		
- CS246	高级计算机体系结构		
- CS247R	计算机体系结构高级主题		
- CS261	操作系统研究课题		
- CS262	分布式计算简介		
- CS263	系统安全		
- CS265	大数据系统		
- PHY123b / ES153	实验室电子	
- MIT6.172	软件系统性能工程	
- MIT6.858	比较系统安全	

## 推荐学习课程
### ① CS50 计算机科学导论
介绍计算机科学和编程艺术的智力企业。本课程教学生如何通过算法思考并有效地解决问题。主题包括抽象、算法、数据结构、封装、资源管理、安全、软件工程和网络编程。语言包括 C、Python 和 SQL 以及 HTML、CSS 和 JavaScript。受艺术、人文、社会科学和科学启发的问题集。课程以最终项目告终。专为集中器和非集中器设计，无论是否有编程经验。

**前置课程：**  零基础可学，无前置课程

**学习地址：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)



### ② CS107 计算科学的系统开发
这是一门基于项目的课程，强调为科学计算和数据科学设计、构建、测试、维护和修改软件。学生将分组参与多个项目，从小型数据转换实用程序到大型系统。学生将学习使用各种工具和语言，以及各种组织团队的技巧。最重要的是，学生将学会适应基本工具和方法来解决学术或工业环境中的计算问题。

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS107 计算科学的系统开发](https://hackway.org//docs/cs/sophomore/software/cs107)


### ③ CS109 数据科学概论
该课程将侧重于分析杂乱的现实生活数据，以使用统计和机器学习方法进行预测。涵盖的材料将使用数据整合调查的五个关键方面：（1）数据收集 - 数据整理、清理和采样以获得合适的数据集；(2) 数据管理——快速可靠地访问数据；(3) 探索性数据分析——产生假设和建立直觉；(4) 预测或统计学习；(5) 交流——通过可视化、故事和可解释的摘要来总结结果。

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS109 数据科学概论](https://hackway.org//docs/cs/freshman/data/cs109)


### ④ CS51 计算中的抽象与设计
计算机程序设计中的基本概念，强调抽象的关键作用。本课程的目标是让学生深入了解编程和编程之间的区别。为了强调表达编程解决方案的不同方法，您将学习以各种范式进行编程——包括函数式、命令式和面向对象。来自软件工程和计算模型的重要思想将为这些不同的编程观点提供信息。

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS51 计算中的抽象与设计](https://hackway.org//docs/cs/sophomore/programming/cs51)

### ⑤ CS61  系统编程和计算机组成原理	
计算机系统编程、机器组织和性能调整的基础知识。本课程提供扎实的系统编程背景以及对低级机器组织和设计的深刻理解。主题包括 C 和汇编语言编程、程序优化、内存层次结构和缓存、虚拟内存和动态内存管理、并发、线程和同步。

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)、[CS51 计算中的抽象与设计](https://hackway.org//docs/cs/sophomore/programming/cs51)

**学习地址：** [CS61  系统编程和计算机组成原理](https://hackway.org//docs/cs/sophomore/system/cs61)


### ⑥ CS120  算法、可计算性和复杂性导论
理论计算机科学的入门课程，旨在让学生有能力使用数学抽象和严格的证明来理解计算。如此装备后，学生将能够设计和使用适用于各种计算问题的算法，并对算法的正确性和效率充满信心，并能够识别问题何时可能没有算法解决方案。同时，他们将欣赏美丽的计算数学理论，该理论独立于（实际上早于）实现它的技术。


**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS120  算法、可计算性和复杂性导论](https://hackway.org//docs/cs/junior/reasoning/cs120)


### ⑦ CS124	数据结构和算法	
设计和分析高效的算法和数据结构。涵盖了算法设计方法、图形算法、近似算法和随机算法。

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS124	数据结构和算法](https://hackway.org//docs/cs/sophomore/algorithm/cs124)


### ⑧ CS141 计算硬件
本课程介绍设计和构建与现实世界交互的现代信息设备和系统的基础知识。它侧重于数字设备和系统，并补充了 ENG-SCI 152，后者侧重于使用模拟电子设备的设备和系统。主题包括：组合逻辑和时序逻辑；计算机架构; 机器码；以及构成 MIPS 处理器的基础设施和计算框架。在设计中考虑了硬件和软件系统之间的交互。学生将为嵌入式系统设计专用硬件

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS141 计算硬件](https://hackway.org//docs/cs/senior/architecture/cs141)


### ⑨ CS153 编译器
为编程语言实现高效的解释器和编译器。相关的算法和语用问题。强调实际应用，包括那些在适当的编程语言之外的应用。还展示了与编程语言理论和设计的关系。参与者构建一个工作编译器，包括词法分析、解析、类型检查、代码生成和寄存器分配。暴露于运行时问题和优化。

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS153 编译器](https://hackway.org//docs/cs/junior/compiler/cs153)

### ⑩ CS161 操作系统
本课程侧重于现代操作系统的设计和实现。本课程讨论线程、进程、虚拟内存、调度程序以及操作系统用来表示活动计算的其他基本原语。系统调用接口的探索解释了应用程序如何与硬件和其他同时执行的程序进行交互。流行文件系统的案例研究揭示了操作系统如何在崩溃和意外重启的情况下提高 IO 的效率和稳健性。学生还将了解虚拟化如何允许物理机将其资源分配到多个虚拟机中。课堂主题通过一系列使用真实操作系统的密集编程作业得到强化。

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS161 操作系统](https://hackway.org//docs/cs/sophomore/operating/cs161)

### ⑪ CS165 数据系统
本课程是对现代数据系统的全面介绍。本课程的主要重点是目前正在塑造数据管理行业的现代趋势：列存储和混合系统、无共享架构、缓存意识算法、硬件/软件协同设计、主内存系统、自适应索引、流处理、科学数据管理和键值存储。我们还研究数据系统的历史、传统和开创性的概念和思想，例如关系模型、行存储数据库系统、优化、索引、并发控制、恢复和 SQL。

**前置课程：** [CS50 计算机科学导论](https://hackway.org/docs/cs/freshman/first/cs50x)

**学习地址：** [CS165 数据系统](https://hackway.org//docs/cs/junior/database/cs165)

<Comment></Comment>

