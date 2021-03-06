---
displayed_sidebar: csSidebar
sidebar_position: 1
---

# 计算机专业学习路线

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

>对计算机科学有追求的同学（读研、想进大厂或工作之余想提升自己），非常推荐你按照本学习路线花两三年的时间去深入学习，这对你今后的发展大有裨益；不过，如果你急于找工作（只有一年以内的时间），这种<H color="green">“科班式”</H>的学习方式并不适合你，建议你按照<H color="green">“培训班式”</H>的方式围绕企业招聘岗位去选择前端JavaScript、Java后端、Go等方向。

## 关于本学习路线
计算机专业、或转专业、或自学成才、或培训班、或其他专业辅修的童鞋，应该如何循序渐进地掌握系统而扎实的计算机科学知识，让自己拥有名校科班的实力，无论是从事科研抑或找工作都具有竞争力。从目前大厂招聘来看，掌握本学习路线核心课程的童鞋能够很容易拿到ssp offer。

:::info 说明

本学习路线主要参考美国四大CS名校（卡耐基梅隆CMU、斯坦福Stanford、加州伯克利UC Berkeley、麻省理工MIT）以及哈佛Harvard、普林斯顿Princeton等6所计算机名校的课程安排与内容。而这六所名校也恰好是图灵奖得主最多的前六所：斯坦福、MIT、伯克利、普林斯顿、哈佛、CMU。本学习路线会尽可能列出配套的视频、书籍、作业、项目等相关资源。

:::

尽管在Github、知乎等平台上，有不少国外名校优质课程的推荐文章，但是大都比较零散、杂乱，让那些想系统学习的同学也难以入手，因此本学习路线会尽可能地：

- **从基础到进阶** ：本学习路线充分参考了美国多所名校的前置课程关系、难易程度、重要程度将课程分成大一、大二、大三、研究以及选修多个部分；
- **中文化的推荐资料** ：考虑到网络原因，大多数学生访问国外资源速度会比较慢，同时很多同学的英语水平比较有限，因此会尽量采用国内的视频资源比如B站，列出每个课程参考资料相应的中文教材，以及尽可能将资料做到国内的学生都可以访问；
- **中文社区** ：本学习路线配有一个微信社群，欢迎大家加入

## 为什么要按这个学习路线来学？
国内不同院校在计算机专业的课程内容、进度的安排上有着非常大的差异，相比美国CS名校的课程而言，存在着诸多不足，比如：

- 国内院校更偏向于使用C语言作为入门的编程语言，而美国CS名校则都是采用Python，无论是在知识的循序渐进上、项目的实践上以及计算机系统的分层教学上，Python都比C更为友好；
- 国内不少院校的计算机教学还停留在“黑板教学”、“PPT教学”上，这让学生死记硬背理论，却无法真正理解；而国外相关的作业、项目、Lab等实践性的资源十分丰富，比如大一阶段就能够进行全栈项目的开发；
- 国内不少院校在课程内容的安排上，大学物理、数电、模电、电子实验等都是必修，而这些课程在国外通常属于“EE”课程，而不是“CS”课程，计算机专业的学生可以根据自己的爱好来进行选修这些课程，应该把更多精力放在计算机专业的核心课程上；
- 国内不少大专院校的课程安排过于偏向技校，而一些211、985院校的课程过于杂而不精，学校的教学内容十分陈旧且脱离企业生产实践，导致不少计算机专业的学生毕业之后达不到企业的用人需求；

这六大顶级名校的课程由浅入深、循序渐进，让学生更加容易接受和理解；课程包含大量作业与项目实践，让学生不仅能够熟练的编写代码，而且还教如何写好代码；课程内容与时俱进，符合当前大厂对学生技能的需求；教学内容十分深入，即便是国内985名校的学生也强烈推荐学习。


## 关于学习内容
>什么是计算机科学？伯克利将计算机科学广义地定义为包括计算理论、算法的设计与分析、计算机体系结构与逻辑设计、编程语言、编译器、操作系统、科学计算、计算机图形学、数据库、人工智能和自然语言处理。计算机科学知识不应仅限于计算机专业的学生学习，跨学科跨领域的结合也是大势所趋。

计算机专业应该学习哪些内容？6所CS名校对学生应该掌握哪些核心课程都有一个非常清晰的说明，本学习路线将这些学校对本科毕业生的要求以及课程的分类、顺序、重要程度等课程体系进行了一个说明。不过，由于计算机的课程十分庞杂，分的方向很多，比如斯坦福大学就针对不同方向（赛道）推出了不同的课程学习要求，这里没法一一都列出来，因此对这些课程进行了一定的筛选。

- <H color="blue">暂时</H>将机器学习、人工智能、数据科学、人机交互、计算机图形学等课程排除在外；尽管人工智能已经被这6所学校明确强调为必修；
- 有些课程不是所有计算机专业方向都必修的，比如计算机网络、数据库、分布式系统等，不过这些课程也都是几乎所有这6所学校的核心选修课，而且这些课程对国内找工作比较有好处，所以都罗列了下来；
- 微积分、概率统计、线性代数是必修课，大家学习时可以按照国内的课程来学习，这里暂时也没有列出来
- 这6所大学都是非常强调实践的，大一就要求独立开发出各种项目（学生自己可以选择实践方向），比如Web全栈、移动端开发、小游戏开发，也非常强调软件工程，写好代码...而且课程内容非常新，这些是国内不少学校比较缺乏的；



<Comment></Comment>