import React from "react";
import Layout from "@theme/Layout";
import {translate} from '@docusaurus/Translate';

export default function qrcode() {
  return (
    <Layout
      title={translate({
        id: 'pages.qrcode.meta.title',
        message: 'HackWay技术交流群',
      })}
      description={translate({
        id: 'pages.qrcode.meta.description',
        message: '欢迎加入计算机专业技术学习交流群',
      })}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          color: "#555",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <div>
          <p style={{
              marginTop: "15px",
            }}>
            {translate({
              id: 'pages.qrcode.instructions.add',
              message: '添加下方微信号，备注“HackWay”邀请进群',
            })}
          </p>
          <img
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "300px",
            }}
            src="https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/hackway/cs/wechat.jpg"
            alt=""
            srcset=""
          />
          <p style={{
              marginTop: "15px",
            }}>
            {translate({
              id: 'pages.qrcode.instructions.scan',
              message: '扫码加好友，或搜索“lidongbbsky”',
            })}
          </p>
        </div>
      </div>
    </Layout>
  );
}
