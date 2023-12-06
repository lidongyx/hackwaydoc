import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '六大CS名校完整路线',
    src: "https://hackweek.oss-cn-shanghai.aliyuncs.com/01.png",
    description: (
      <>
        系统而详细的整理了六所最知名的CS名校官方要求掌握的必修以及推荐选修的课程，让学习有重点，有顺序
      </>
    ),
  },
  {
    title: '编程语言职业路线',
    src: "https://hackweek.oss-cn-shanghai.aliyuncs.com/02.png",
    description: (
      <>
        整理主流的编程语言当前市场最推荐学习的技术栈，便于你更系统得了解职业方向学习的重点以及避免学习过于陈旧的知识
      </>
    ),
  },
  {
    title: '网络资源与心得分享',
    src: "https://hackweek.oss-cn-shanghai.aliyuncs.com/03.png",
    description: (
      <>
        精选网络上程序员最为推崇的工具、书籍、网站等资源，以及一些大佬学习成长的经历与心得，让你少走弯路
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={src} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
