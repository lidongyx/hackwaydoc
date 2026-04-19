# HackWay Docs

HackWay 的文档站仓库，基于 [Docusaurus](https://docusaurus.io/) 构建。

仓库职责：
- 承载 `hackway.org` 的文档、博客、静态页面与站点配置
- 维护中英文双语站点架构
- 支持后续分批交付高质量英文内容

## Tech Stack

- Docusaurus
- React
- MDX
- npm / yarn

## Project Structure

```text
docs/        中文默认文档内容
blog/        博客内容
src/         站点页面、组件与主题覆写
static/      静态资源
i18n/        非默认语言内容与翻译资源
```

## Install

推荐使用 `npm`：

```bash
npm install
```

如需使用 `yarn`：

```bash
yarn
```

## Local Development

```bash
npm run start
```

## Build

```bash
npm run build
```

## Bilingual Workflow

当前默认语言为中文 `zh-Hans`，已预留英文 `en` 站点结构。

双语内容约定：
- `docs/` 保持中文默认内容
- `i18n/en/docusaurus-plugin-content-docs/current/` 放英文文档
- `i18n/en/docusaurus-plugin-content-blog/` 放英文博客
- `i18n/en/docusaurus-plugin-content-pages/` 放英文页面内容
- `i18n/en/code.json` 放英文界面文案翻译

当前策略：
- 先搭建双语架构与英文占位内容
- 再按模块分批替换成可发布质量的英文内容

## Translation Commands

抽取界面翻译骨架：

```bash
npm run write-translations -- --locale en
```

## Deployment

```bash
npm run deploy
```

如使用 SSH：

```bash
USE_SSH=true npm run deploy
```
