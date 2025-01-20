<template>
  <GitHubCorner blank />
  <BackToTop />
  <header>
    <div class="header-container">
      <div class="left">
        <img src="/logo.png" alt="logo">
        <h3>My Vue UI</h3>
      </div>
      <div class="right">
        <a href="#">指南</a>
        <a href="#">组件</a>
        <a href="#">资源</a>
      </div>
    </div>
  </header>
  <div class="main-container">
    <div class="banner-container">
      <h1>My Vue UI</h1>
      <span class="banner-desc">基于 Vue 3，面向设计师和开发者的组件库</span>
    </div>
  </div>
  <footer>
    <div class="footer-container">
      <span>
        根据 GPL-3.0 许可证发布。
      </span>
      <span>
        Copyright © 2024 Liu Yuhe
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dadada;
  padding: 0 64px;
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    h3 {
      margin-left: 4px;
      color: #409eff;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
      padding: 0 12px;
      text-decoration: none;
      color: #303133;
      &:hover {
        color: #4fa6ff;
      }
    }
  }
}
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .banner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .banner-desc {
      color: #606266;
      font-size: 16px;
      margin-top: 20px;
    }
  }
}
.footer-container {
  border-top: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
  span {
    color: #9a9a9a;
    margin: 2px 0;
  }
}
</style>
