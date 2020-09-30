<template>
  <div>
    <div class='title-wrapper'>
      <el-select
        style='width: 20%;'
        v-model="sortValue"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择文章分类">
        <el-option
          v-for="item in sortOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select
        style='width: 20%;'
        v-model="tagValue"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择文章标签">
        <el-option
          v-for="item in tagOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        style='width: 40%;'
        placeholder="请输入内容"
        v-model="title"
        clearable>
      </el-input>
      <button class='btn'>保存</button>
    </div>
    <mavon-editor ref="md" v-model="mdValue"
            style='font-size: .28rem;width: 100%;min-width: 0;z-index: 9;border: 0;min-height: 100vh;'
            :boxShadow='false'
            :ishljs="true"
            codeStyle='atom-one-dark'
            previewBackground='rgb(255, 255, 255)'
            @save='save' />
  </div>
</template>
<script>
export default {
  name: 'MD',
  data () {
    return {
      mdValue: '',
      sortValue: '',
      sortOptions: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      tagValue: '',
      tagOptions: [],
      title: ''
    }
  },
  methods: {
    save () {}
  }
}
</script>
<style lang='less' scoped>
  .title-wrapper {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
    .btn:hover {
      cursor: pointer;
    }
    .btn {
      width: 1.6rem;
      height: .7rem;
      background: rgb(64, 158, 255);
      border-radius: 4px;
      border: 1px solid rgb(64, 158, 255);
      color: #fff;
      font-size: .28rem;
    }
  }
</style>
