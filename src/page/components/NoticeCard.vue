<template>
    <div class="wrapper">
      <div class="title">
        <span class="notice-icon notice-icon-active">&#xe622;</span>
        公告
      </div>
      <div class="content">
        If you have any questions, you can feedback on Github Issues or Messageboard, also you can join the Group.
      </div>
    </div>
</template>

<script>
export default {
  name: 'NoticeCard'
}
</script>

<style lang="less" scoped>
  .wrapper:hover {
    box-shadow: 0 4px 10px 10px rgba(7,17,27,.2);
  }
  .wrapper {
    transition: all .4s;
    width: 100%;
    /*height: 4rem;*/
    padding: .5rem .6rem;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
    border-radius: 8px;
    .title {
      width: 100%;
      height: 20%;
      display: flex;
      align-items: center;
      font-size: .3rem;
      .notice-icon {
        font-family: "iconfont",serif !important;
        margin-right: .1rem;
        color: red;
        transform: rotate(30deg);
        animation: animate-notice-active 1s linear infinite;
      }
      @keyframes animate-notice-active {
        0% {transform: rotate(15deg);}
        50% {transform: rotate(-15deg);}
        100% {transform: rotate(15deg);}
      }
    }
    .content {
      margin-top: .2rem;
      width: 100%;
      height: 80%;
      font-size: .24rem;
      line-height: 2;
    }
  }
</style>
