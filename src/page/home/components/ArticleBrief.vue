<template>
  <div class="brief">
    <div class="img-wrapper">
      <img src="static/index.jpg">
    </div>
    <div class="ar-brief">
      <div class="brief-title"></div>
      <div class="brief-info"></div>
      <div class="brief-content">123</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleBrief'
}
</script>

<style lang="less" scoped>
  .brief:hover {
    transition: .8s;
    box-shadow: 0 4px 10px 10px rgba(7,17,27,.2);
    img {
      transform: scale(1.2);
    }
  }
  .brief {
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 6rem;
    box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
    border-radius: 8px;
    .img-wrapper {
      width: 45%;
      height: 100%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        object-fit: cover;
        transition: all .8s;
      }
    }
    .ar-brief {
      flex: 1;
    }
  }
</style>
