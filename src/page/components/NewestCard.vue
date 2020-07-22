<template>
    <div class="wrapper">
      <div class="title"></div>
      <div class="content">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NewestCard'
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
    box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
    border-radius: 8px;
  }
</style>
