<template>
  <div class="brief">
    <div class="ar-img"></div>
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
  .brief {
    display: flex;
    width: 100%;
    height: 6rem;
    border: 1px solid #4c4948;
    box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
    .ar-img {
      width: 45%;
      height: 100%;
      background-image: ~"url(~@/assets/index.jpg)";
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .ar-brief {
      flex: 1;
    }
  }
</style>
