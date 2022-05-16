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
### ① CS32 计算思维和问题解决

### ② CS50 计算机科学导论

### ③ CS107 计算科学的系统开发
科学有三大支柱，理论科学、计算科学和实验科学，而计算科学广泛渗透到各个学科，包括所有工程学、物理、化学、金融、生物、数据分析等。科学家们不应该只停留在为某些问题而编写代码并调试的水平上，而要学会使用软件工程和计算机科学来解决科学问题。

### ④ CS109A 数据科学概论

### ⑤ CS51 计算中的抽象与设计
### ⑥ CS61  系统编程和计算机组成原理	
### ⑦ CS120  算法、可计算性和复杂性导论
### ⑧ CS124	 数据结构和算法	
### ⑨ CS153  编译器
### ⑩ CS161  操作系统
### ⑪ CS165  数据系统




<Comment></Comment>

