import React from "react";
import Layout from "@theme/Layout";

export default function qrcode() {
  return (
    <Layout
      title="HackWay技术交流群"
      description="欢迎加入计算机专业技术学习交流群"
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
            添加下方微信号，备注“<strong>HackWay</strong>”邀请进群
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
            扫码加好友，或搜索“<strong>lidongbbsky</strong>”
          </p>
        </div>
      </div>
    </Layout>
  );
}
