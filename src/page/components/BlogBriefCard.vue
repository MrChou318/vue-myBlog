<template>
  <div class='wrapper'>
    <div class='user-wrapper'>
      <div class='user-avatars-wrapper'>
        <img src='static/index.jpg' class='user-avatars' />
      </div>
      <div class='user-name'>Jerry</div>
      <div class='user-sign'>A Simple and Card UI Design theme for Hexo</div>
    </div>
    <div class='blog-wrapper'>
      <div class='item-wrapper'>
        <div class='item-label'>文章</div>
        <div class='item-num'>15</div>
      </div>
      <div class='item-wrapper'>
        <div class='item-label'>标签</div>
        <div class='item-num'>9</div>
      </div>
      <div class='item-wrapper'>
        <div class='item-label'>分类</div>
        <div class='item-num'>3</div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang='less' scoped>
  .wrapper:hover {
    box-shadow: 0 4px 10px 10px rgba(7,17,27,.2);
  }
  .wrapper {
    transition: all .4s;
    width: 100%;
    height: 6.5rem;
    padding: .5rem .6rem;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
    border-radius: 8px;
    .user-wrapper {
      width: 100%;
      height: 75%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .user-avatars-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        .user-avatars {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .user-name {
        display: flex;
        justify-content: center;
        font-size:.6rem;
      }
      .user-sign {
        text-align: center;
        font-size: .26rem;
        line-height: 1.8;
      }
    }
    .blog-wrapper {
      width: 100%;
      height: 22%;
      display: flex;
      margin-top: .3rem;
      .item-wrapper {
        width: 33.33%;
        .item-label {
          width: 100%;
          height: 40%;
          font-size: .28rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-num {
          width: 100%;
          height: 60%;
          font-size: .36rem;
          color: #000;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
