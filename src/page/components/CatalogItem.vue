<template>
  <div>
    <div v-for='(item, index) in data' :key='index'>
    <!--
      <div class='catalog-item' :class="{'active': item.id === activeClass}" @click='catalogClickHandle(item.id)'>{{item.text}}</div>
      -->
      <div :style='paddingLeftStyle' class='catalog-item' :class="{'active': item.id === activeHId}" @click='catalogClickHandle(item.id)'>{{item.text}}</div>
      <CatalogItem :data='item.children' @click='catalogClickHandle' :paddingLeft='addPaddingLeft' :activeHId='activeHId'></CatalogItem>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CatalogItem',
  props: {
    data: {
      type: Array,
      require: true
    },
    paddingLeft: {
      type: Number,
      default: 0.1
    },
    activeHId: String
  },
  computed: {
    addPaddingLeft () {
      return this.paddingLeft + 0.2
    },
    paddingLeftStyle () {
      return {paddingLeft: this.paddingLeft + 'rem'}
    }
  },
  methods: {
    catalogClickHandle (id) {
      this.$emit('click', id)
    }
  }
}
</script>
<style lang='less' scoped>
  .catalog-item:hover {
    color: #4c4948;
    background: rgb(73, 177, 245);
    cursor: pointer;
  }
  .catalog-item {
    width: 100%;
    height: .65rem;
    line-height: .7rem;
    color: rgb(144 ,144, 144);
    font-size: .25rem;
    border-radius: 2px;
    overflow:hidden; //超出的文本隐藏
    text-overflow:ellipsis; //溢出用省略号显示
    white-space:nowrap; //溢出不换行
  }
  .active {
    color: rgb(73, 177, 245);
  }
</style>
