---
sidebar_position: 4
---

# CMU 计算机科学专业

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

>卡内基梅隆大学CMU号称自己是世界上第一个开设计算机专业的学校（开设于1965年，另有说是普渡大学1962年），CMU的计算机堪称可以载入史册的化石级。  
计算机科学可以说是CMU之魂，有点“全民CS”的味道。对于其他很多学校来说，计算机可能只是一个系，而CMU则有独立的计算机学院。不仅如此，它的其它学院如艺术学院、理工学院、商学院、科学院等都有一定数量的计算机方面的课程。

## 课程说明
计算机专业的学生毕业后应该掌握哪些技能？CMU对毕业生的要求也反映在它们的课程安排上：
- 识别、使用、设计、开发和分析适当的抽象和算法来解决问题，同时能够在各种指标（例如，时间、空间、并行与顺序实现、可计算性）上证明算法的性能和正确性。
- 在人工智能、图形和声音、软件工程和人机交互等领域实施问题的解决方案，通过应用这些领域的基础知识来创建当前问题的解决方案，同时接触技术发展前沿，使解决方案能够适应技术的变化。
- 用不同的编程语言和编程范式来推理并实现程序；
- 具备设计与开发高性能、低资源要求的大型开放式软件系统；
- 能够向技术人员和非技术人员来传达技术材料；
- 能够胜任个人和团队的工作

数学课方面，计算机专业的学生掌握CS-151 计算机科学的数学基础（离散数学）、微积分、多重积分、线性代数以及概率统计约50个学分的数学课，而专业课以及选修课方面则需要掌握至少300个学分。专业课分必修核心课以及多个维度的选修课，课程如下所示：

### ① 计算机科学核心课程
以下所有的课程都必须要掌握：
- 15-122 命令式编程原理，在此前需学完15-112的课程，10学分
- 15-150	函数式编程原理，10学分
- 15-210	并行和顺序数据结构和算法，12学分
- 15-213	计算机系统概论，12学分
- 15-251	理论计算机科学的伟大思想，12学分
- 15-451	算法设计与分析，12学分

### ② 人工智能选修课
必须要要选择一门一门人工智能选修课（最少9个学分）：	
- 10-315	机器学习简介，12学分
- 11-411	自然语言处理，12学分
- 11-485	深度学习简介，9学分
- 15-281	人工智能：表示和解决问题，12学分
- 15-386	神经计算，9学分
- 16-384	机器人运动学和动力学，12学分
- 16-385	计算机视觉，12学分

### ③ 跨领域选修课
至少要学习一个跨领域选修课（最少9学分）：	
- 02-251	计算生物学的伟大想法，12学分
- 05-391	设计以人为本的软件，12学分
- 15-322	电脑音乐概论，9学分
- 15-330	计算机安全概论，12学分
- 15-455	复杂性理论（本科），9学分
- 15-462	计算机图形学，12学分
- 17-313	软件工程基础，12学分

### ④ 逻辑、编程语言课
至少要学习一门逻辑/语言选修课（最少9学分）：	
- 15-312	编程语言基础，12学分
- 15-314	编程语言语义，12学分
- 15-316	软件的安全与隐私基础，9学分
- 15-317	构造性逻辑，9学分
- 15-414	Bug捕获：自动程序验证，9学分
- 15-424	网络物理系统的逻辑基础，12学分
- 17-355	程序分析，12学分
- 80-413	范畴论

### ⑤ 软件系统选修课
至少要学习一门软件系统的选修课（至少12学分）：
- 15-410	操作系统设计与实现，15学分
- 15-411	编译器设计，15学分
- 15-418	并行计算机体系结构和编程，12学分
- 15-440	分布式系统，12学分
- 15-441	计算机网络，12学分
- 15-445	数据库系统，12学分

## 推荐学习课程
### ① 15-112 编程和计算机科学基础
对编程基础知识的技术介绍，重点是使用自上而下的设计、非正式分析以及有效的测试和调试来生成清晰、健壮和合理高效的代码。从第一原则开始，我们将介绍 Python 编程语言的一个大子集，包括它的标准库和编程范式。我们还将针对大量部署场景，包括独立程序、shell 脚本和基于 Web 的应用程序。本课程假设没有任何编程经验。即便如此，对于15-122 来说，这是一个快节奏和严谨的准备。寻求更温和地介绍计算机科学的学生应考虑首先参加15-110. 

课程网址：https ://www.cs.cmu.edu/~112/

### ② 15-121 数据结构简介
程序设计和分析过程的延续，面向具有一定编程经验（函数、循环和数组，不一定使用 Java）的学生。本课程强化了 Java 中的面向对象编程技术，涵盖了数据聚合、数据结构（例如，链表、堆栈、队列、树和图），以及对在这些数据结构上运行的算法的分析的介绍。
前置课程：15-112
课程网站：http ://www.cs.cmu.edu/~mjs/121/index.html

### ③ 15-122 命令式计算原理
适合对编程（变量、表达式、循环、数组、函数）有基本了解的学生。教授命令式编程和确保程序正确性的方法。学生将学习从算法的高级描述到正确的命令式实现所需的过程和概念，以及对基本数据结构和算法的具体应用。大部分课程将在可验证的 C 子集中进行，并在接近尾声时过渡到完整的 C。本课程让学生为15-213和15-210做好准备。注意：学生必须达到 C 或更高才能使用本课程来满足任何后续计算机科学课程的先决条件。
前置课程：15-112

课程网址：http ://www.cs.cmu.edu/~15122/home.shtml

### ④ 15-131 计算机科学家的伟大实用思想
本课程只对 CS 大一新生开放。在卡内基梅隆大学作为计算机科学家的整个教育过程中，您将学习编程、理论思想、逻辑、系统等课程。随着您的进步，您将学习所谓的“交易工具”。本课程旨在帮助您以友好、低压力、高支持的方式学习您需要了解的内容。我们将讨论 UNIX、LaTeX、调试和许多其他基本工具。需要笔记本电脑。（没有笔记本电脑的人可以使用笔记本电脑。）

课程网站：https ://www.cs.cmu.edu/~15131/f17/

### ⑤ 15-150 函数式编程原理
基于“功能”计算模型的编程介绍。函数模型是代数的自然概括，其中程序是根据输入和#8212 描述计算输出的公式；即作为函数。但是，函数模型不仅限于实值或复值函数，而是将代数视图扩展到非常丰富的数据类型类别，不仅包括从其他类型构建的聚合，还包括作为值的函数本身。本课程是对编程的介绍，侧重于函数和类型的核心概念。一个主要主题是逐步建立的归纳类型之间的相互作用。递归函数，通过分解计算归纳类型；并通过结构归纳证明，用于证明递归函数的正确性和时间复杂度。另一个主要主题是类型在将大型程序构建成单独的模块中的作用，以及通过引入其值可能在计算期间更改的数据类型来集成命令式编程。注意：学生必须达到 C 或更高才能使用本课程来满足任何后续计算机科学课程的先决条件。
前置课程：15-112、15-151

课程网址：http ://www.cs.cmu.edu/~15150/

### ⑥ 15-151 计算机科学的数学基础
本课程面向即将入学的计算机科学新生，重点介绍计算机科学特别感兴趣的数学基本概念，例如逻辑、集合、归纳、函数和组合。这些主题被用作学生学习使用数学证明方法形式化论证的背景。本课程使用实验和协作作为更好地理解材料的方法。仅对 CS 新生开放。注意：学生必须达到 C 或更高才能使用本课程来满足任何后续计算机科学课程的先决条件。

课程网址：http ://www.cs.cmu.edu/~15150/

### ⑦ 15-213 计算机系统概论
本课程提供程序员对计算机系统如何执行程序、存储信息和通信的看法。它使学生​​成为更有效的程序员，特别是在处理性能、可移植性和健壮性问题方面。它还作为编译器、网络、操作系统和计算机体系结构课程的基础，这些课程需要对系统级问题有更深入的了解。涵盖的主题包括：机器级代码及其通过优化编译器生成的代码、性能评估和优化、计算机算术、内存组织和管理、网络技术和协议，以及支持并发计算。研究生注意事项：本课程从 2015 年春季开始不对研究生开放。研究生必须注册15-513反而。
前置课程：15-122

课程网站：https ://www.cs.cmu.edu/~213/

### ⑧ 15-214 软件构建原理：对象、设计和并发
今天的软件工程师不太可能从头开始设计数据结构和算法，而更有可能从库和框架组件构建系统。在本课程中，学生在对数据结构、算法、程序结构和计算机结构的基本构建块的理解的基础上，参与与大规模软件系统构建相关的概念。该课程涵盖四个领域的技术主题：（1）复杂系统的设计概念，（2）面向对象的编程，（3）程序的静态和动态分析，以及（4）并发和分布式软件。学生作业涉及使用复杂的软件，例如分布式大型多人游戏系统和图形用户交互框架。

前置课程：15-121 、15-122、15-151 

### ⑨ 15-237 专题：跨平台移动Web应用
编写跨平台移动 Web 应用程序的介绍。使用基于 HTML5、CSS3、JavaScript 和各种支持框架的工具链，我们将编写适用于桌面和移动浏览器的有效设计的应用程序，并且可以转换为 Android、iOS 和 Windows Phone 的原生应用程序7个设备。其他主题将包括为移动设备设计用户界面、访问移动设备 API（例如加速度计、GPS、指南针或相机）以及电源管理问题。虽然本课程侧重于浏览器端技术，但我们将简要探讨基于 JavaScript 的服务器端技术（尽管学生应该考虑15-437用于广泛处理服务器端主题）。请注意，我们不会在 iOS 上用 Objective-C 或在 Android 上用 Java 编写原生应用程序，尽管我们可能会在课程结束时简要介绍这些技术。

前置课程：15-112

### ⑩ 15-251 理论计算机科学的伟大思想
学分本课程是关于如何使用理论思想来制定和解决计算机科学中的问题。它将数学材料与一般问题解决技术和计算机科学应用相结合。示例来自算法、复杂性理论、博弈论、概率论、图论、自动机理论、代数、密码学和组合学。作业涉及数学证明和编程。注意：学生必须达到 C 或更高才能使用本课程来满足任何后续计算机科学课程的先决条件。

前置课程：15-150、15-151

课程网站：http ://www.cs.cmu.edu/~15251/

### ⑪ 15-312 编程语言基础
学分本课程深入讨论了现代编程语言的设计、定义、实现和使用的许多概念。定义语法和语义的正式方法用于描述编程语言的基本概念。涵盖了各种编程范式，例如命令式、函数式、逻辑和并发编程。除了正式的研究之外，使用语言编程的经验被用来说明不同的设计目标如何导致完全不同的语言和计算模型。
前置课程：15-150、15-251

### ⑫ 15-313 软件工程基础
学生接触现代软件工程的基础知识。这包括核心 CS 技术知识和将这些知识应用于复杂软件的实际工程的方法。与软件工件相关的主题包括设计模型、模式、编码、静态和动态分析、测试和检查、测量以及软件架构和框架。与软件过程相关的主题包括建模、需求工程、过程模型和评估、团队开发以及包括外包和开源在内的供应链问题。本课程具有很强的技术重点，将包括书面和编程作业。学生将获得使用现代软件工程工具的经验。

前置课程：15-214


### ⑬ 15-319 云计算
本课程向学生介绍云计算，即通过网络提供计算即服务，分布式资源由最终用户作为公用事业租用而不是拥有。学生将学习其支持技术、构建模块，并通过利用公共云基础设施的项目获得实践经验。云计算服务被跨领域的许多组织广泛采用。本课程将介绍云并涵盖数据中心、软件堆栈、虚拟化、软件定义的网络和存储、云存储和编程模型等主题。我们将首先讨论云的激励因素、好处、挑战、服务模型、SLA 和安全性。我们将描述数据中心设计和管理背后的几个概念，这使云范式的经济和技术优势成为可能。接下来，我们将研究 CPU、内存和 I/O 资源、网络 (SDN) 和存储 (SDS) 是如何虚拟化的，以及虚拟化对启用云的关键作用。随后，学生将学习云存储概念，如数据分布、持久性、一致性和冗余。我们将使用 HDFS、CephFS、HBASE、MongoDB、Cassandra、DynamoDB、S3 和 Swift 作为案例研究来讨论分布式文件系统、NoSQL 数据库和对象存储。最后，学生将学习 MapReduce、Spark 和 GraphLab 编程模型。学生将与 Amazon Web Services 和 Microsoft Azure 合作，租用和配置计算资源，然后使用这些资源编程和部署应用程序。学生将开发和评估扩展和负载平衡解决方案，使用云存储系统，并以多种编程范式开发应用程序。15619 名学生必须完成一个额外的团队项目，该项目需要设计和实施一个成本和性能敏感的 Web 服务来查询大数据。

前置课程：15-213

课程网站：https ://csd.cs.cmu.edu/course-profiles/15-319-619-Cloud-Computing

### ⑭ 15-437 网络应用程序开发
本课程将介绍编程 Web 应用程序服务器的概念。我们将研究动态生成内容的编程网站的基本架构元素。介绍的主要技术将是 Python 的 Django 框架，但我们将根据需要涵盖相关主题，以便学生可以构建重要的应用程序。此类主题包括：HTTP、HTML、CSS、Javascript、XML、设计模式、关系和非关系数据库、对象-关系映射工具、安全性、Web 服务、云部署、国际化以及可扩展性和性能问题。学生必须具有与典型的初级 CS 专业和#8212 相当的编程和软件设计经验； - 三门大学 CS 课程或更多课程。不需要特定于 Python 的经验。学生必须为本课程提供自己的计算机硬件。有关更多信息，请参阅上面的相关 URL。

前置课程：15-214

### ⑮ 15-440 分布式系统
本课程的目标有两个：首先，让学生了解分布式系统设计背后的原理和技术，例如锁定、并发、调度和跨网络通信。其次，让学生获得设计、实现和调试真实分布式系统的实践经验。本课程将教授的主要主题包括稀缺性、调度、并发和并发编程、命名、抽象和模块化、不完善的通信和其他类型的故障、防止意外和恶意伤害、乐观以及仪器和监控和调试工具的使用在解决问题。由于软件系统的创建和管理是任何本科系统课程的基本目标，学生将设计、实施、并调试大型编程项目。因此，需要具备 C 和 Java 编程语言的能力。

前置课程：15-213

### ⑯ 15-441 计算机网络
学分 本课程的重点是计算机网络设计和实施中的基本性能和工程权衡。为了使问题更具体，该课程包括几个需要大量设计和实施的为期数周的项目。目标是让学生不仅了解计算机网络是什么以及它们今天的工作方式，还了解它们为什么要按现在的方式设计以及它们未来可能如何发展。我们将主要从 Internet 中提取示例。涵盖的主题包括：网络架构、路由、拥塞/流量/错误控制、命名和寻址、点对点和网络、互联网络和网络安全。

前置课程：15-213

### ⑰ 15-445 数据库系统
学分 本课程是关于数据库管理系统的设计和实施。主题包括数据模型（关系、文档、键/值）、存储模型（n-ary、分解）、查询语言（SQL、存储过程）、存储架构（堆、日志结构）、索引（顺序保留树、哈希表）、事务处理（ACID、并发控制）、恢复（日志记录、检查点）、查询处理（连接、排序、聚合、优化）和并行架构（多核、分布式）。开源和商业数据库系统的案例研究将用于说明这些技术和权衡。该课程适合具有强大系统编程技能的学生。

前置课程：15-213

课程网站：http://15445.courses.cs.cmu.edu


### ⑱ 15-451 算法设计与分析
学分本课程是关于算法的设计和分析。我们研究各种问题的特定算法，以及通用设计和分析技术。具体主题包括搜索、排序、图问题算法、高效数据结构、下界和 NP 完备性。教师可酌情涵盖各种其他主题。这些包括并行算法、随机算法、几何算法、用于高效编程的低级技术、密码学和密码协议。

前置课程：15-210、15-251

课程网站：https://www.csd.cs.cmu.edu/course-profiles/15-451-Algorithm-Design-and-Analysis

<Comment></Comment>
